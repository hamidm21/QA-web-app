<template>
    <div class="user-dash sm:pr-250   content-center h-full sm:h-full flex flex-col">
        <div class="w-full sm:p-10">
            <div class="flex flex-col rounded-md bg-white rouended-md w-full h-full shadow-md ">
                <div class="flex justify-between items-center">
                  <div class="p-4 text-center">
                    گردش های مالی من
                  </div>
                    <div @click="openModal = true" class="flex justify-center items-center bg-green text-white font-bold p-2 m-4 rounded focus:outline-none focus:shadow-outline cursor-pointer" style="box-shadow: 5px 5px 14px -6px rgba(23,198,152,0.9);">
                        افزایش اعتبار
                        <img class="w-4 mx-2" src="~/assets/icons/plus.svg"/>
                    </div>
                </div>
                <hr class="w-full mb-5">
              <div v-if="transactions.length === 0" class="bg-white w-full flex flex-col items-center sm:p-12">
                <img class="w-20" src="~/assets/icons/empty-box.svg" alt="جعبه خالی">
                <p class="font-bold">
                    نتیجه ای یافت نشد
                </p>
                <p>
                    لیست تراکنش ها خالیست !
                </p>
              </div>
              <div v-else class="bg-white w-full h-full flex flex-col items-center rounded-b-md">
                  <div class="w-full sm:w-3/5 flex justify-between items-center p-4 bg-white m-2 shadow-md rounded-md" v-for="tsa in transactions" v-bind:key="tsa.id">
                      <div class="w-fit rounded-md rounded-l-none h-auto flex justify-center items-center writing-on sm:writing-off">
                          <div v-bind:class="tsa.state !== 1 ? 'bg-red' : tsa.state === 1 && tsa.transaction_type === 'increase' ? 'bg-green' : 'bg-orange'" class="w-3 h-3 rounded-full">
                          </div>
                          <p class="p-2" >
                              {{ tsa.state !== 1 ? "ناموفق" : tsa.state === 1 && tsa.transaction_type === 'increase' ? "واریز" : "برداشت" }}
                          </p>
                      </div>
                      <div class="mx-2 text-secondary-700 number">
                          {{ tsa.transaction_type === 'increase' ? "+" : "-" }} {{tsa.amount_comma}} تومان
                      </div>
                      <div v-bind:class="tsa.state_name !== 'موفق' ? 'text-red' : tsa.state_name === 'موفق'  ? 'text-green' : 'bg-orange'" >
                          {{ tsa.state_name }}
                      </div>
                  
                      <div class="mr-5 number">
                          {{ tsa.jcreate_time }}
                      </div>
                  </div>
              </div>
            </div>
            <hr v-if="pagination.pages > 1" class="w-full">
              <div v-if="pagination.pages > 1" id="paginator" class="m-2">
                    <Pagination v-bind:ps="pagination.pages" v-bind:p="pagination.page" v-bind:changePage="changePage" />
              </div>

                <!--
                    Background overlay, show/hide based on modal state.
                -->
                <transition
                    enter-class="ease-out duration-300"
                    enter-active-class="opacity-0"
                    enter-to-class="opacity-100"
                    leave-class="ease-in duration-200"
                    leave-active-class="opacity-100"
                    leave-to-class="opacity-0"
                >
                    <div v-if="openModal" class="fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center" style="direction: rtl; z-index:99;">
                    <div class="fixed inset-0 transition-opacity">
                        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>
                    <!--
                        Modal panel, show/hide based on modal state.

                        Entering: "ease-out duration-300"
                        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        To: "opacity-100 translate-y-0 sm:scale-100"
                        Leaving: "ease-in duration-200"
                        From: "opacity-100 translate-y-0 sm:scale-100"
                        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    -->
                        <transition
                        enter-class="ease-out duration-300"
                        enter-active-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enter-to-class="opacity-100 translate-y-0 sm:scale-100"
                        leave-class="ease-in duration-200"
                        leave-active-class="opacity-100 translate-y-0 sm:scale-100"
                        leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <div v-show="openModal" class="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div class="sm:flex sm:items-start">
                                    <div class="w-full mt-3 text-center sm:mt-0 sm:ml-4 sm:text-right">
                                    <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                                        افزایش اعتبار
                                    </h3>
                                    <div class="w-full flex flex-col mt-4">
                                        <div class="w-full flex flex-col sm:flex-row justify-between items-start p-2">
                                            <div class="relative right-0 m-2">
                                                <h3>
                                                    اعتبار فعلی شما
                                                </h3>
                                            </div>
                                            <div>
                                                <input disabled class="form-input block w-full pr-7 pl-12 sm:text-sm sm:leading-5 number" v-bind:value="this.$auth.user.current_balance + ' تومان'" />
                                            </div>
                                        </div>
                                        <div class="w-full flex flex-col sm:flex-row justify-between items-start p-2">
                                            <div class="relative right-0 m-2">
                                            <h3>
                                                مبالغ پیشنهادی
                                            </h3>
                                            </div>
                                            <div class="flex w-full sm:justify-end">
                                                <div @click="amount=50000" class="sm:w-1/4 w-1/3 cursor-pointer border rounded-md flex justify-center py-2 m-1 hover:bg-primary hover:text-white">
                                                    ۵۰,۰۰۰
                                                </div>
                                                <div @click="amount=20000" class="sm:w-1/4 w-1/3 cursor-pointer border rounded-md flex justify-center py-2 m-1 hover:bg-primary hover:text-white">
                                                    ۲۰,۰۰۰
                                                </div>
                                                <div @click="amount=10000" class="sm:w-1/4 w-1/3 cursor-pointer border rounded-md flex justify-center py-2 m-1 hover:bg-primary hover:text-white">
                                                    ۱۰,۰۰۰
                                                </div>
                                            </div>
                                        </div>
                                        <div class="w-full flex flex-col sm:flex-row justify-between items-start p-2">
                                            <div class="relative right-0 m-2">
                                                <h3>
                                                    مبلغ
                                                </h3>
                                            </div>
                                            <div>
                                                <input v-model="amount" type="number" id="price" class="form-input block w-full pr-7 pl-12 sm:text-sm sm:leading-5" placeholder="عدد را به تومان وارد کنید" />
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row">
                                <span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                                    <div @click="payment()" class="inline-flex justify-center w-full rounded-md border border-primary px-4 py-2 bg-red-600 text-primary leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:border-primary focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5 cursor-pointer">
                                    تایید
                                    </div>
                                </span>
                                <span class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                                    <div @click="openModal = false" class="inline-flex justify-center w-full rounded-md border border-red px-4 py-2 bg-white text-red leading-6 font-medium shadow-sm focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5 cursor-pointer">
                                    انصراف
                                    </div>
                                </span>
                                </div>
                            </div>
                        </transition>
                    </div>
                </transition>

                <small class="pt-1 number">
                    اعتبار شما: {{ this.$auth.user.current_balance }} تومان
                </small>
        </div>
    </div>
    
</template>

<script>
export default {
  mounted: function () {
    this.$store.commit("setUserDashPage", 'finance');
        var replaceDigits = function() {
        var map = ["&\#1776;","&\#1777;","&\#1778;","&\#1779;","&\#1780;","&\#1781;","&\#1782;","&\#1783;","&\#1784;","&\#1785;"]
        var elements = document.getElementsByClassName("number");
        for (const e of elements) {
          e.innerHTML = e.innerHTML.replace(/\d(?=[^<>]*(<|$))/g, function($0) { return map[$0]});
        }
      }
    replaceDigits()
  },
    async asyncData({ $axios }) {
    const t_res = await $axios.get("/api/transactions")
    return {
      transactions: t_res.data.results,
      pagination: {
        page: 1,
        pages: Math.floor(t_res.data.count / 25)
      }
    }
  },
  methods: {
    async changePage(page) {
        const s_res = await this.$axios.get(`/api/transactions?page=${page}`);
        this.items = s_res.data.results,
        this.pagination = {
            page: page,
            pages: Math.floor(s_res.data.count / 25) 
        }
    },
    async payment() {
      const res = await this.$axios.post(`/api/transactions/`, {
          amount: this.amount
      });
      window.location.replace(`https://halyab.com/api/gpg/${res.data.id}`)
    }
  },
  data() {
    return {
      openModal: false,
      pagination: {
          page: 0,
          pages: 0
      },
      amount: '',
      transactions: [],
      others_heads: [
        {
          id: 1,
          persian: "وضعیت",
          english: "state_name",
        },
        {
          id: 2,
          persian: "موضوع",
          english: "subject",
        },
        {
          id: 3,
          persian: "مقطع",
          english: "grade_name"
        },
        {
          id: 4,
          persian: "سقف هزینه",
          english: "max_cost"
        },
        {
          id: 5,
          persian: "تعداد پیشنهاد",
          english: "num_offers"
        },
      ],
      my_heads: [
        {
          id: 1,
          persian: "وضعیت",
          english: "state",
        },
        {
          id: 2,
          persian: "موضوع",
          english: "subject",
        },
        {
          id: 3,
          persian: "مقطع",
          english: "grade_name"
        },
        {
          id: 4,
          persian: "سقف هزینه",
          english: "max_cost"
        },
        {
          id: 5,
          persian: "تعداد پیشنهاد",
          english: "num_offers"
        },
      ]
    }
  },
  auth: true,
  layout: 'dashboard/user',

}
</script>

<style>
.writing-on {
  writing-mode: tb-rl;
}
.writing-off {
  writing-mode: none;
}
</style>