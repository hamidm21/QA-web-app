<template>
<div class="bg-graybg">
    <div class="w-full h-full" style="direction: rtl;">
        <div class="w-full sm:p-10">
            <div class="flex flex-col rounded-md bg-white rouended-md w-full shadow-md">
                <div class="w-full flex justify-between items-center">
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
                                <tbody>
                                    <tr v-for="item in items" v-bind:key="item.id" >
                                        <td class="p-4">
                                            <div class="flex justify-start items-center">
                                                <div v-bind:class="item['state_name'] === 'is_active' ? 'bg-primary' : item['state_name'] === 'is_finished' ? 'bg-green' : item['state_name'] === 'wait_for_response' ? 'bg-secondary' : item['state_name'] === 'question_solved_request' ? 'bg-orange' : 'bg-gray-700' " class="w-5 h-5 rounded-full p-2"/>
                                                <p class="flex justify-center w-full px-2">
                                                    {{
                                                        item['state_name'] === 'is_active' ? 'در انتظار پاسخ' : item['state_name'] === 'is_finished' ? 'پاسخ داده شده' : item['state_name'] === 'wait_for_response' ? 'پذیرفته شده توسط استاد' : item['state_name'] === 'question_solved_request' ? 'سوال حل شده' : 'نامشخص'
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
                            </table>
                    </div>
                </div>
                <hr v-if="pages > 1" class="w-full">
                <div v-if="pages > 1" id="paginator" class="m-2">
                    <Pagination v-bind:ps="pages" v-bind:p="page" v-bind:changePage="changePage" />
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Pagination from '~/components/dashboard/pagination';

export default {
    mounted: function () {
        this.$store.commit("setUserDashPage", 'questions');
        var replaceDigits = function() {
            var map = ["&\#1776;","&\#1777;","&\#1778;","&\#1779;","&\#1780;","&\#1781;","&\#1782;","&\#1783;","&\#1784;","&\#1785;"]
            var elements = document.getElementsByClassName("number");
            for (const e of elements) {
            e.innerHTML = e.innerHTML.replace(/\d(?=[^<>]*(<|$))/g, function($0) { return map[$0]});
            }
        }
        replaceDigits()
    },
    components: {
        Pagination
    },
    props: [
        "items",
        "page",
        "pages",
        "changePage"
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