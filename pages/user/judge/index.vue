<template>
    <div class="user-dash sm:pr-250 h-full sm:h-full flex flex-col">
        <div class="w-full sm:p-10">
            <div class="flex flex-col rounded-md bg-white rouended-md w-full shadow-md">
                <div class="w-full flex justify-between items-center">
                    <h3 class="p-4">
                        پروژه های من
                    </h3>
                    <nuxt-link to='questions/add'>
                        <button class="flex justify-center items-center bg-green text-white font-bold p-2 m-4 rounded focus:outline-none focus:shadow-outline" style="box-shadow: 5px 5px 14px -6px rgba(23,198,152,0.9);">
                            ثبت پروژه
                            <img class="w-4 mx-2" src="~/assets/icons/plus.svg"/>
                        </button>
                    </nuxt-link>
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
                                <td class="p-4">
                                    <div class="flex justify-start items-center">
                                        <div v-bind:class="item['state_name'] === 'is_referred_to_judge' ? 'bg-primary' : 'bg-gray-700'" class="w-5 h-5 rounded-full p-2"/>
                                        <p class="flex justify-center w-full px-2">
                                            {{
                                                item["state"]
                                            }}
                                        </p>
                                    </div>
                                </td>
                                <td class="p-4">
                                    <div class="flex justify-center items-center">
                                        {{
                                            item['subject'].length >= 50 ? item['subject'].substr(0,50) + ' ...' : item['subject']
                                        }}
                                    </div>
                                </td>
                                <td class="p-4">
                                    <div class="flex justify-center items-center">
                                        {{
                                            item['grade_name']
                                        }}
                                    </div>
                                </td>
                                <td class="p-4">
                                    <div class="flex justify-center items-center number">
                                        {{
                                            item['literal_exp_date']
                                        }}
                                    </div>
                                </td>
                                <td class="p-4">
                                    <div class="flex justify-center items-center number">
                                        {{item['max_cost']}} تومان
                                    </div>
                                </td>
                                <td class="p-4">
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
        this.$store.commit("setUserDashPage", 'judge');
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
        const s_res = await $axios.get("/api/questions?judge=true&page=1");
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
            this.$router.push(`/user/judge/${id}`)
        },
        async changePage(page) {
            const s_res = await this.$axios.get(`/api/questions?judge=true&page=${page}`);
            this.items = s_res.data.results,
            this.pagination = {
                page: page,
                pages: Math.floor(s_res.count / 25) 
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

<style>

</style>