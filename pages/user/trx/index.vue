<template>
    <div class="user-dash sm:pr-250   content-center h-full sm:h-full flex flex-col">
        <div class="w-full sm:p-10">
            <div class="flex flex-col rounded-md bg-white rouended-md w-full h-full shadow-md ">
                <div class="flex justify-between items-center">
                  <div class="p-4 text-center">
                          گردش های مالی من
                  </div>
                  <nuxt-link to='questions/add'>
                    <button class="flex justify-center items-center bg-green text-white font-bold p-2 m-4 rounded focus:outline-none focus:shadow-outline" style="box-shadow: 5px 5px 14px -6px rgba(23,198,152,0.9);">
                        افزایش اعتبار
                        <img class="w-4 mx-2" src="~/assets/icons/plus.svg"/>
                    </button>
                  </nuxt-link>
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
                <div class="mx-2 text-secondary-700 ">
                    {{ tsa.transaction_type === 'increase' ? "+" : "-" }} {{tsa.amount_comma}} تومان
                </div>
                <div v-bind:class="tsa.state_name !== 'موفق' ? 'text-red' : tsa.state_name === 'موفق'  ? 'text-green' : 'bg-orange'" >
                    {{ tsa.state_name }}
                </div>
            
                <div class="mr-5">
                    {{ tsa.jcreate_time }}
                </div>
            </div>
        </div>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
  mounted: function () {
    this.$store.commit("setUserDashPage", 'dashboard');
  },
    async asyncData({ $axios }) {
      console.log("started")
    const t_res = await $axios.$get("/api/transactions")
    console.log({t_res})
    return {
      transactions: t_res.results.slice(0,3)
    }
  },
  data() {
    return {

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