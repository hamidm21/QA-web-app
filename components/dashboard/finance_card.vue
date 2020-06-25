<template>
    <div class="flex flex-col rounded-md bg-white rouended-md w-full h-full shadow-md">
        <div class="flex justify-between items-center p-6 border-b">
            <div class="">
                لیست تراکنش ها
            </div>
            <div class="flex flex-col">
                <div @click="openModal = !openModal" class="bg-white text-sm text-green font-bold p-1 rounded focus:outline-none focus:shadow-outline cursor-pointer">
                    افزایش اعتبار
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
                                    <div @click="payment()" class="inline-flex justify-center w-full rounded-md border border-green px-4 py-2 bg-red-600 text-green leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:border-primary focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                                    تایید
                                    </div>
                                </span>
                                <span class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                                    <div @click="openModal = false" class="inline-flex justify-center w-full rounded-md border border-red px-4 py-2 bg-white text-red leading-6 font-medium shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                                    انصراف
                                    </div>
                                </span>
                                </div>
                            </div>
                        </transition>
                    </div>
                </transition>

                <small class="pt-1">
                    اعتبار شما: {{ this.$auth.user.current_balance }} تومان
                </small>
            </div>
        </div>
        <div v-if="transactions.length === 0" class="w-full flex flex-col justify-center items-center p-12">
            <img class="w-20" src="~/assets/icons/empty-box.svg" alt="جعبه خالی">
            <p class="font-bold">
                نتیجه ای یافت نشد
            </p>
            <p>
                لیست تراکنش ها خالیست !
            </p>
        </div>
        <div v-else class="w-full h-full bg-white flex flex-col justify-start rounded-b-md">
            <div class="w-9/10 flex bg-white m-2 shadow-md rounded-md h-fit" v-for="tsa in transactions" v-bind:key="tsa.id">
                <div class="w-fit rounded-md rounded-l-none h-auto flex justify-center items-center" style="writing-mode: tb-rl;">
                    <p class="p-2">
                        {{ tsa.state !== 1 ? "ناموفق" : tsa.state === 1 && tsa.transaction_type === 'increase' ? "واریز" : "برداشت" }}
                    </p>
                    <div v-bind:class="tsa.state !== 1 ? 'bg-red' : tsa.state === 1 && tsa.transaction_type === 'increase' ? 'bg-green' : 'bg-orange'" class="w-3 h-3 rounded-full">
                        
                    </div>
                </div>
                <div class="px-2 flex flex-col justify-evenly">
                    <small>
                        {{ tsa.transaction_type === 'increase' ? "+" : "-" }} {{tsa.amount_comma}} تومان
                    </small>
                    <small>
                        {{ tsa.state_name }}
                    </small>
                    <small>
                        {{ tsa.jcreate_time }}
                    </small>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            openModal: false,
            amount: ''
        }
    },
    methods: {
        async payment() {
            const res = await this.$axios.post(`/api/transactions/`, {
                amount: this.amount
            });
            this.$router.replace(`/api/gpg/${res.data.id}`)
        }
    },
    props: [
        'transactions',
        'heads'
    ]
}
</script>

<style>

.responsive-table {
    display: block;
    overflow-x: auto;
    width: 100%;
    -webkit-overflow-scrolling: touch;
}

</style>