<template>
    <div class="flex flex-col rounded-md bg-white rouended-md w-full shadow-md" style="word-wrap: break-word;">
        <div class="flex justify-between items-center p-6">
            <div>
                <h2>
                    {{ title }}
                </h2>
            </div>
            <nuxt-link to="/user/othersQuestions" v-if="title !== 'پروژه های من'" class="bg-white text-sm text-secondary font-bold p-1 rounded focus:outline-none focus:shadow-outline">
                مشاهده همه
            </nuxt-link>
            <nuxt-link to="/user/questions/add" v-else class="flex justify-center items-center bg-green text-white font-bold p-2 rounded focus:outline-none focus:shadow-outline" style="box-shadow: 5px 5px 14px -6px rgba(23,198,152,0.9);">
                ثبت پروژه
                <img class="w-4 mx-2" src="~/assets/icons/plus.svg"/>
            </nuxt-link>
        </div>
        <hr class="w-full">
        <div class="responsive-table mt-2">
            <table class="w-full">
                <thead v-if="items.length !== 0" class="w-full p-4">
                    <tr class="w-full">
                        <th class="text-right border-b p-2" v-for="head in heads" v-bind:key="head.id" >
                            {{ head.persian }}
                        </th>
                    </tr>
                </thead>
                <thead v-else>
                    <tr>
                        <td>

                        </td>
                    </tr>
                </thead>
                <tbody v-if="items.length !== 0">
                    <tr class="border-b" v-for="item in items" v-bind:key="item.id">
                        <td class="p-4" v-for="head in heads" v-bind:key="head.id">
                            <div class="number" v-if="head.english !== 'state' && head.english !== 'state_name'">
                                {{ head.english !== 'subject' ? item[head.english] : item[head.english].substr(0, 30) }}
                            </div>
                            <div v-else-if="head.english === 'state_name'" class="flex justify-start items-center">
                                {{ item[head.english] === 'is_active' ? 'در انتظار پاسخ' : item[head.english] === 'is_finished' ? 'انجام شده' : item[head.english] === 'wait_for_response' ? 'در انتظار پاسخ' : item[head.english] === 'question_solved_request' ? 'سوال حل شده' : 'نامشخص' }}
                            </div>
                            <div class="flex justify-start items-center" v-else>
                                {{ item[head.english] }}
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tbody v-else class="w-full">
                    <div class="w-full flex flex-col justify-center items-center p-12">
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
</template>


<script>

export default {
  props: [
      'title',
      'heads',
      'items'
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