<template>
    <div class="user-dash sm:pr-250 h-full sm:h-full flex flex-col">
        <div class="w-full sm:p-10">
            <div class="flex flex-col rounded-md bg-white rouended-md w-full shadow-md">
                <div class="w-full flex justify-start items-center">
                    <h3 class="p-4">
                        پروژه های دیگران
                    </h3>
                </div>
                <hr class="w-full">
                <div class="p-2 flex w-full justify-evenly">
                    <div class="responsive-table mt-2">
                        <table class="w-full">
                            <thead v-show="items.length !== 0" class="w-full ">
                            <tr class="w-full border-b">
                                <th class="pb-2">
                                    وضعیت
                                </th>
                                    <th class="pb-2">
                                    نوع پروژه
                                </th>
                                <th class="pb-2">
                                    نام پروژه
                                </th>
                                <th class="pb-2">
                                    مقطع
                                </th>
                                <th class="pb-2">
                                    مهلت 
                                </th>
                                <th class="pb-2">
                                    سقف هزینه
                                </th>
                                <th class="pb-2">
                                    پیشنهاد
                                </th>
                            </tr>
                        </thead>
                        <tbody v-if="items.length !== 0">
                            <tr @click="goToQuestion(item.id)" v-for="item in items" v-bind:key="item.id" class="cursor-pointer" >
                                <td class="py-4 px-2">
                                    <div class="flex justify-start items-center">
                                        <div v-bind:class="item['state_name'] === 'is_active' ? 'bg-primary' : item['state_name'] === 'is_finished' ? 'bg-gray-700' : item['state_name'] === 'wait_for_response' ? 'bg-green' : item['state_name'] === 'question_solved_request' ? 'bg-orange' : 'bg-gray-700' " class="w-5 h-5 rounded-full p-2"/>
                                        <p class="flex justify-center w-full px-2">
                                            {{
                                                item['state_name'] === 'is_active' ? 'در انتظار پاسخ' : item['state_name'] === 'is_finished' ? 'انجام شده' : item['state_name'] === 'wait_for_response' ? 'در انتظار پاسخ' : item['state_name'] === 'question_solved_request' ? 'سوال حل شده' : 'نامشخص'
                                            }}
                                        </p>
                                    </div>
                                </td>
                                 <td class="py-4 px-2">
                                    <div class="flex justify-center w-full items-center number">
                                        {{item['question_type_name']}} 
                                    </div>
                                </td>
                                <td class="py-4 px-2 w-1/4">
                                    <div class="flex justify-center items-center">
                                        {{
                                            item['subject'].length >= 30 ? item['subject'].substr(0,30) + ' ...' : item['subject']
                                        }}
                                    </div>
                                </td>
                                <td class="py-4 px-2">
                                    <div class="flex justify-center items-center">
                                        {{
                                            !item['grade_name'] ? 'تعیین نشده' :  item['grade_name'] 
                                        }}
                                    </div>
                                </td>
                                <td class="py-4 px-2">
                                    <div class="flex justify-center items-center number">
                                        {{
                                            item['literal_exp_date']
                                        }}
                                    </div>
                                </td>
                                <td class="py-4 px-2">
                                    <div class="flex justify-center items-center number">
                                        {{item['max_cost']}} تومان
                                    </div>
                                </td>
                                <td class="py-4 px-2">
                                    <div class="flex justify-center items-center number">
                                        {{item['num_offers']}} پیشنهاد
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                        <tbody v-else class="w-full">
                                <div class="w-full flex flex-col justify-center items-center p-32">
                                    <img class="w-20" src="~/assets/icons/empty-box.svg" alt="جعبه خالی">
                                    <p class="font-bold">
                                        نتیجه ای یافت نشد
                                    </p>
                                    <p>
                                        لیست پروژه ها خالیست !
                                    </p>
                                </div>
                            </tbody>
                        </table>
                    </div>
                </div>
                <hr v-if="pagination.pages > 1" class="w-full">
                <div v-if="pagination.pages > 1" id="paginator" class="m-2">
                    <Pagination v-bind:ps="pagination.pages" v-bind:p="pagination.page" v-bind:changePage="changePage" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Pagination from '~/components/dashboard/pagination';

export default {
    mounted: function () {
        if(this.items){
            console.log(this.items);
        }
        this.$store.commit("setUserDashPage", 'others');
        var replaceDigits = function() {
            var map = ["&\#1776;","&\#1777;","&\#1778;","&\#1779;","&\#1780;","&\#1781;","&\#1782;","&\#1783;","&\#1784;","&\#1785;"]
            var elements = document.getElementsByClassName("number");
            for (const e of elements) {
            e.innerHTML = e.innerHTML.replace(/\d(?=[^<>]*(<|$))/g, function($0) { return map[$0]});
            }
        }
        replaceDigits()
    },
    async asyncData({ $axios, $auth }) {
        const s_res = !$auth.user.is_teacher ?
        await $axios.get("/api/questions/?others=true") :
        await $axios.get("/api/questions/?teacher=1");
        return {
            items: s_res.data.results,
            pagination: {
                page: 1,
                pages: Math.floor(s_res.data.count / 25) 
            }
        }
    },
    data() {
        return {
            items: [],
            pagination: {
                page: 0,
                pages: 0
            }
        }
    },
    methods: {
        goToQuestion(id) {
            this.$auth.user.is_teacher ?
            this.$router.push(`/user/othersQuestions/${id}`) :
            this.$toast.info('این پروژه برای شما قابل دسترسی نیست')
        },
        async changePage(page) {
            const s_res = !this.$auth.user.is_teacher ?
            await this.$axios.get(`/api/questions/?others=true&page=${page}`) :
            await this.$axios.get(`/api/questions/?teacher=1&page=${page}`);
            this.items = s_res.data.results,
            this.pagination = {
                page: page,
                pages: Math.floor(s_res.data.count / 25) 
            }
        }
    },
    components: {
        Pagination
    },
    auth: true,
    layout: 'dashboard/user',
}
</script>