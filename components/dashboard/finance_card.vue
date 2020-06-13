<template>
    <div class="flex flex-col rounded-md bg-white rouended-md w-full h-full shadow-md">
        <div class="flex justify-between items-center p-6 border-b">
            <div class="">
                لیست تراکنش ها
            </div>
            <div class="flex flex-col">
                <button class="bg-white text-sm text-green font-bold p-1 rounded focus:outline-none focus:shadow-outline">
                    افزایش اعتبار
                </button>
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