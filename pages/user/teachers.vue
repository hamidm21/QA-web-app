<template>
    <div class="user-dash sm:pr-250 h-full sm:h-full flex flex-col">
        <div class="w-full sm:p-10">
            <div class="flex flex-col rounded-md bg-white rouended-md w-full shadow-md">
                <div class="w-full flex justify-between items-center">
                    <h3 class="p-4">
                        اساتید حل یاب
                    </h3>
                </div>
                <hr class="w-full">
                <div class="p-2 flex w-full justify-evenly">
                    <div class="responsive-table mt-2">
                        <table class="w-full">
                            <thead v-show="items.length !== 0" class="w-full ">
                            <tr class="w-full border-b">
                                <th class="pb-2">
                                    نام استاد
                                </th>
                                <th class="pb-2">
                                    رشته
                                </th>
                                <th class="pb-2">
                                    مدرک
                                </th>
                                <th class="pb-2">
                                    پرسش های حل شده 
                                </th>
                                <th class="pb-2">
                                    امتیاز
                                </th>
                            </tr>
                        </thead>
                        <tbody v-if="items.length !== 0">
                            <tr v-for="item in items" v-bind:key="item.id" class="cursor-pointer" >
                                <td class="p-4">
                                    <div class="flex justify-start items-center">
                                        <img class="rounded-full w-12 border-2 border-transparent mx-1 cursor-pointer" v-bind:src="item.profile_pic_thumb " v-bind:alt="item.full_name">
                                        <!-- <div v-bind:class="item['state_name'] === 'is_active' ? 'bg-primary' : item['state_name'] === 'is_finished' ? 'bg-green' : item['state_name'] === 'wait_for_response' ? 'bg-secondary' : item['state_name'] === 'question_solved_request' ? 'bg-orange' : 'bg-gray-700' " class="w-5 h-5 rounded-full p-2"/> -->
                                        <p class="flex justify-center w-full px-2">
                                            {{
                                                item["full_name"]
                                            }}
                                        </p>
                                    </div>
                                </td>
                                <td class="p-4">
                                    <div class="flex justify-center items-center">
                                        {{
                                            item["current_category"]
                                        }}
                                    </div>
                                </td>
                                <td class="p-4">
                                    <div class="flex justify-center items-center">
                                        {{
                                            item['current_grade_name']
                                        }}
                                    </div>
                                </td>
                                <td class="p-4">
                                    <div class="flex justify-center items-center number">
                                        {{
                                            item["num_solved_questions_teacher"]
                                        }}
                                    </div>
                                </td>
                                <td class="p-4">
                                    <div class="flex justify-start items-center">
                                        <p class="flex justify-center w-full px-2 number">
                                            {{
                                                item["teacher_rate"]
                                            }}
                                        </p>
                                        <img class="w-8" src="~/assets/icons/icon-star.svg" alt="">
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
        this.$store.commit("setUserDashPage", 'teachers');
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
        const res = await $axios.get("/api/initdata");
        return {
            items: res.data.teachers.results,
            pagination: {
                page: 1,
                pages: Math.floor(100)
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
        async changePage(page) {
            const s_res = await this.$axios.get(`/api/initdata?page=${page}`);
            this.items = s_res.data.teachers.results,
            this.pagination = {
                page: page,
                pages: Math.floor(100) 
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