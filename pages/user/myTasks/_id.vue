<template>
    <div class="user-dash sm:pr-250 h-full sm:h-full flex flex-col" style="direction: rtl;">
        <div class="w-full p-0 sm:px-10 sm:pt-10 pb-2">
            <div class="flex flex-col rounded-md bg-white rouended-md w-full shadow-md">
                <div class="w-full flex justify-start items-center">
                    <h3 class="p-4 font-bold">
                        مشخصات سوال 
                    </h3>
                </div>
                <hr class="w-full">
                <div class="flex flex-col sm:flex-row w-full">
                    <div class="flex w-full sm:w-1/2 flex-col justify-between">
                        <div class="flex flex-col w-full py-6 px-10">
                            <img v-bind:src="image" class="w-full rounded-md" style="height: 280px;">
                            <div class="w-full py-4">
                                <ul id="gallery" class="flex flex-1 flex-wrap -m-1">
                                    <li v-for="image of images" v-bind:key="image" class="block p-1 w-1/4 h-24 min-w-32">
                                        <article tabindex="0" class="group hasImage w-full h-full rounded-md focus:outline-none focus:shadow-outline bg-gray-100 cursor-pointer relative text-transparent hover:text-white shadow-sm">
                                        <img v-bind:alt="image" class="img-preview w-full h-full sticky object-cover rounded-md bg-fixed" v-bind:src="image" />
                                        <section class="flex flex-col rounded-md text-xs break-words w-full h-full z-20 absolute top-0 py-2 px-3">
                                            <h1 class="flex-1">{{ image.substr(0, 60) }}</h1>
                                            <div class="flex items-center">
                                                <a v-bind:href="image" v-bind:download="image">
                                                    <div class="ml-auto focus:outline-none hover:bg-gray-300 p-1 rounded-md">
                                                    <svg class="pointer-events-none fill-current w-4 h-4 ml-auto" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 395.638 395.638" style="enable-background:new 0 0 395.638 395.638;" xml:space="preserve" width="512px" height="512px"><g><g><g><polygon points="254,313.071 206.351,360.721 206.351,138.881 189.285,138.881 189.285,360.721 141.636,313.071 129.56,325.147     197.819,393.406 266.076,325.147   "/></g></g><g><g>
                                                        <path d="M376.209,143.738c-9.845-10.501-22.447-17.721-36.361-21.134c3.413-10.632,4.858-21.659,4.07-32.817    c-1.444-23.366-12.076-45.287-30.061-61.827c-17.852-16.407-40.955-25.465-64.976-25.728c-0.262,0-0.394,0-0.656,0    c-39.774,0-75.478,24.284-89.654,59.464C144,50.276,125.098,44.631,105.934,46.47c-27.567,2.757-51.457,21.003-61.04,46.73    c-4.332,11.42-5.513,23.104-3.413,34.786C16.408,139.8,0,164.741,0,192.306c0,38.724,29.929,80.073,74.428,80.073H156.6v-17.065    H74.296c-33.867,0-57.363-33.211-57.363-63.008c0-22.84,14.964-43.45,37.279-51.194l7.614-2.625l-2.231-7.744    c-3.019-10.632-2.625-21.134,1.313-31.504c7.22-19.69,25.597-33.604,46.6-35.704c18.64-1.707,36.755,5.513,48.437,19.296    l11.026,13.127l3.806-16.671c7.876-34.916,40.693-60.119,77.841-59.857c40.824,0.261,75.872,32.421,78.235,71.538    c0.787,12.076-1.313,23.76-6.432,34.916l-4.987,10.895l11.945,1.05c28.748,2.625,51.194,26.385,51.194,54.213    c0,18.903-7.614,63.008-77.972,63.008h-61.695v17.065h61.695c70.096,0,95.037-41.349,95.037-80.073    C395.636,174.192,388.68,156.995,376.209,143.738z"/></g></g></g> 
                                                    </svg>
                                                </div>
                                                </a>
                                            </div>
                                        </section>
                                        </article>
                                    </li>

                                    <li v-for="file in files" v-bind:key="file" class="block p-1 w-1/4 h-24">
                                        <article tabindex="0" class="group hasImage w-full h-full rounded-md focus:outline-none focus:shadow-outline bg-gray-300 cursor-pointer relative text-transparent hover:text-white shadow-sm">
                                        <img v-bind:alt="file" class="img-preview hidden w-full h-full sticky object-cover rounded-md bg-fixed" />
                                        <div class="flex w-full h-full justify-center items-center">
                                        <img class="w-1/4" src="~/assets/icons/file_icon.svg" v-bind:alt="file">
                                        </div>
                                        <section class="flex flex-col rounded-md text-xs break-words w-full h-full z-20 absolute top-0 py-2 px-3">
                                            <h1 class="flex-1"> {{ file.substr(0, 60) }} </h1>
                                            <div class="flex items-center">
                                            <button @click="cancelOneFile(file.id)" class="delete ml-auto focus:outline-none hover:bg-gray-300 p-1 rounded-md">
                                                    <svg class="pointer-events-none fill-current w-4 h-4 ml-auto" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 395.638 395.638" style="enable-background:new 0 0 395.638 395.638;" xml:space="preserve" width="512px" height="512px"><g><g><g><polygon points="254,313.071 206.351,360.721 206.351,138.881 189.285,138.881 189.285,360.721 141.636,313.071 129.56,325.147     197.819,393.406 266.076,325.147   "/></g></g><g><g>
                                                        <path d="M376.209,143.738c-9.845-10.501-22.447-17.721-36.361-21.134c3.413-10.632,4.858-21.659,4.07-32.817    c-1.444-23.366-12.076-45.287-30.061-61.827c-17.852-16.407-40.955-25.465-64.976-25.728c-0.262,0-0.394,0-0.656,0    c-39.774,0-75.478,24.284-89.654,59.464C144,50.276,125.098,44.631,105.934,46.47c-27.567,2.757-51.457,21.003-61.04,46.73    c-4.332,11.42-5.513,23.104-3.413,34.786C16.408,139.8,0,164.741,0,192.306c0,38.724,29.929,80.073,74.428,80.073H156.6v-17.065    H74.296c-33.867,0-57.363-33.211-57.363-63.008c0-22.84,14.964-43.45,37.279-51.194l7.614-2.625l-2.231-7.744    c-3.019-10.632-2.625-21.134,1.313-31.504c7.22-19.69,25.597-33.604,46.6-35.704c18.64-1.707,36.755,5.513,48.437,19.296    l11.026,13.127l3.806-16.671c7.876-34.916,40.693-60.119,77.841-59.857c40.824,0.261,75.872,32.421,78.235,71.538    c0.787,12.076-1.313,23.76-6.432,34.916l-4.987,10.895l11.945,1.05c28.748,2.625,51.194,26.385,51.194,54.213    c0,18.903-7.614,63.008-77.972,63.008h-61.695v17.065h61.695c70.096,0,95.037-41.349,95.037-80.073    C395.636,174.192,388.68,156.995,376.209,143.738z"/></g></g></g> 
                                                    </svg>
                                            </button>
                                            </div>
                                        </section>
                                        </article>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="flex w-full py-8 px-10">
                            <div @click="finish()" class="flex justify-center items-center border border-primary bg-white w-full text-primary font-bold p-4 rounded-md focus:outline-none focus:shadow-outline cursor-pointer">
                                پایان پروژه
                                <!-- <img class="px-2" src="~/assets/icons/icon-delete.svg" alt="edit"> -->
                            </div>
                        </div>
                    </div>
                    <div class="w-full sm:w-1/2">
                        <div class="flex flex-col py-6 px-10">
                            <h3 class="text-xl font-bold my-2">
                                {{item.subject}}
                            </h3>
                            <h4 class="text-lg">
                                {{item.desc}}
                            </h4>
                            <div class="flex flex-col w-full mt-4 rounded-md shadow-md">
                                <div class="flex w-full p-4 justify-between">
                                    <p>نوع پروژه</p>
                                    <p>{{item.question_type_name}}</p>
                                </div>
                                <div class="flex w-full p-4 justify-between bg-gray-300">
                                    <p>وضعیت پروژه</p>
                                    <p>{{item.state}}</p>
                                </div>
                                <div class="flex w-full p-4 justify-between">
                                    <p>مقطع</p>
                                    <p>{{item.grade_name}}</p>
                                </div>
                                <div class="flex w-full p-4 justify-between bg-gray-300">
                                    <p>رشته تحصیلی</p>
                                    <p>{{item.category_name}}</p>
                                </div>
                                <div class="flex w-full p-4 justify-between">
                                    <p>شاخه</p>
                                    <p>{{item.sub_category_name}}</p>
                                </div>
                                <div class="flex w-full p-4 justify-between bg-gray-300">
                                    <p>مهلت دریافت پاسخ</p>
                                    <p>{{item.literal_exp_date}}</p>
                                </div>
                                <div class="flex w-full p-4 justify-between">
                                    <p>سقف هزینه</p>
                                    <p>{{item.max_cost_comma}} تومان</p>
                                </div>
                                <div class="flex w-full p-4 justify-between bg-gray-300">
                                    <p>تعداد پیشنهاد</p>
                                    <p>{{item.num_offers}} پیشنهاد</p>
                                </div>
                                <div class="flex w-full p-4 justify-between">
                                    <p>زمان ثبت</p>
                                    <p>{{item.jcreate_time}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full sm:px-10 pb-10">
            <div class="flex flex-col rounded-md bg-white rouended-md w-full shadow-md">
                <div class="w-full flex justify-start items-center">
                    <div class="flex flex-col w-full p-10">
                        <div class="flex w-full">
                            <div @click="tabOpener(2)" v-bind:class="openTab === 2 ? 'text-primary border-b border-primary' : '' " class="p-3 px-6 font-bold cursor-pointer">
                                نظرات
                            </div>
                            <div @click="tabOpener(3)" v-bind:class="openTab === 3 ? 'text-primary border-b border-primary' : '' " class="p-3 px-6 font-bold cursor-pointer">
                                پاسخ ها
                            </div>
                        </div>
                        <hr>
                            <div class="flex w-full sm:p-10" v-if="openTab === 2">
                                <div class="flex w-full justify-center">
                                    <Chat v-bind:messages="comments" v-bind:type="'comments'" v-bind:question="this.$route.params.id" v-bind:active="answers.length < 1" />
                                </div>
                            </div>
                            <div class="flex w-full sm:py-10" v-else-if="openTab === 3">
                                <div class="flex w-full justify-center">
                                    <Chat v-bind:messages="answers" v-bind:type="'answers'" v-bind:question="this.$route.params.id" v-bind:active="true"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import Chat from "~/components/dashboard/chat.vue";
// local function
function diff(a1, a2) {
            var a = [], diff = [];
            for (var i = 0; i < a1.length; i++) {
                a[a1[i]] = true;
            }
            for (var i = 0; i < a2.length; i++) {
                if (a[a2[i]]) {
                    delete a[a2[i]];
                } else {
                    a[a2[i]] = true;
                }
            }
            for (var k in a) {
                diff.push(k);
            }
            return diff;
        }

export default {
    mounted: function () {
        this.$store.commit("setUserDashPage", 'myTasks');
    },
    async asyncData({ $axios, params, $auth }) {
        const id = params.id
        const q_res = await $axios.get(`/api/questions/${id}`);
        const c_res = await $axios.get(`/api/comments/?q=${id}`);
        const a_res = await $axios.get(`/api/answers/?q=${id}`);
        const cMsgs = c_res.data.results;
        const aMsgs = a_res.data.results;
        const comments = [];
        const answers = [];
        let cStart = 0;
        let aStart = 0;
        for (let i = 0; i < cMsgs.length; i++) {
            let nextCom = cMsgs[i + 1] ? cMsgs[i + 1].owner : '';
            if (cMsgs[i].owner !== nextCom) {
                comments.push(cMsgs.slice(cStart, i + 1).reverse());
                cStart = i + 1;
            }
        }
        for (let j = 0; j < aMsgs.length; j++) {
            let nextAns = aMsgs[j + 1] ? aMsgs[j + 1].owner : '';
            if (aMsgs[j].owner !== nextAns) {
                answers.push(aMsgs.slice(aStart, j + 1).reverse());
                aStart = j + 1;
            }
        }
        const FILES = [
            q_res.data.pic_1,
        ]
        const slefMsgs = c_res.data.results.map(x => {})
        q_res.data.pic_2 ? FILES.push(q_res.data.pic_2) : '';
        q_res.data.pic_3 ? FILES.push(q_res.data.pic_3) : '';
        q_res.data.pic_4 ? FILES.push(q_res.data.pic_4) : '';
        const regEx = /\.(gif|jpe?g|tiff|png|webp|bmp)$/i
        let images = FILES.filter(x => x.match(regEx));
        const files = diff(FILES, images)
        return {
            item: q_res.data,
            files,
            images,
            image: images[0],
            comments: comments.reverse(),
            answers: answers.reverse()
        }
    },
    methods: {
        tabOpener(id) {
            this.openTab = id;
        },
        async finish() {
            const res = await this.$axios.get(`/api/questions/${this.$route.params.id}/solvedrequest`);
            this.$router.push("/user/myTasks");
        },
    },
    data() {
        return {
            openTab: 3,
            files: [],
            images: [],
            image: '',
            question: '',
            item: {},
            comments: [],
            answers: []
        }
    },
    components: {
        Chat
    },
    auth: true,
    layout: 'dashboard/user'
}
</script>