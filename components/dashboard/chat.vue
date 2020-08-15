<template>
    <div class="flex w-full h-128 bg-bluebg rounded-md shadow-md relative">
        <div id="scroll" v-if="messages.length !== 0" class="flex flex-col w-full mb-20 overflow-y-scroll">
            <div id="message" v-for="message in messages" v-bind:key="message[0].id + 100000" v-bind:class=" message[0].owner === $auth.user.username ? 'items-start' : 'items-end'" class="flex flex-col w-full justify-center p-4 h-fit relative">
                <div v-if="message[0].owner === $auth.user.username">
                    <div v-for="msg in message" v-bind:key="msg.id" v-bind:class="(msg === message[0] && message.length > 2) ? 'rounded-t-md' : (msg === message[message.length - 1] && message.length > 2) ? 'rounded-b-md' : 'rounded-md' " class="flex flex-col bg-blue-400 text-white max-w-xl w-50 sm:w-64 p-2 my-1 mr-12">
                        <p v-if="msg.desc">
                            {{ msg.desc }}
                        </p>
                        <div v-else class="flex flex-col justify-center items-center">
                            <img v-if="msg.pic ? isImage(msg.pic) : false" v-bind:alt="msg.pic" class="img-preview w-full sticky object-cover shadow-md rounded-md bg-fixed h-32" v-bind:src="msg.pic" />
                            <audio v-else-if="msg.voice ? isVoice(msg.voice) : false" controls style="width: 13rem;">
                                <source :src="msg.voice">
                            </audio>
                            <div v-else class="flex flex-col w-full h-32 p-4 bg-bluebg shadow-md rounded-md justify-center items-center">
                                <img class="w-1/4" src="~/assets/icons/file_icon.svg" v-bind:alt="msg.pic">
                                <p class="pt-1 text-black">
                                    فایل با فرمت {{ getExt(msg.pic) }}
                                </p>
                            </div>
                            <a v-if="msg.pic" v-bind:href="msg.pic" v-bind:download="msg.pic" class="w-auto">
                                <div class="m-2 w-6 focus:outline-none hover:bg-gray-400 p-1 rounded-md">
                                    <svg class="pointer-events-none fill-current w-4 h-4 ml-auto" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 395.638 395.638" style="enable-background:new 0 0 395.638 395.638;" xml:space="preserve" width="512px" height="512px"><g><g><g><polygon points="254,313.071 206.351,360.721 206.351,138.881 189.285,138.881 189.285,360.721 141.636,313.071 129.56,325.147     197.819,393.406 266.076,325.147   "/></g></g><g><g>
                                        <path d="M376.209,143.738c-9.845-10.501-22.447-17.721-36.361-21.134c3.413-10.632,4.858-21.659,4.07-32.817    c-1.444-23.366-12.076-45.287-30.061-61.827c-17.852-16.407-40.955-25.465-64.976-25.728c-0.262,0-0.394,0-0.656,0    c-39.774,0-75.478,24.284-89.654,59.464C144,50.276,125.098,44.631,105.934,46.47c-27.567,2.757-51.457,21.003-61.04,46.73    c-4.332,11.42-5.513,23.104-3.413,34.786C16.408,139.8,0,164.741,0,192.306c0,38.724,29.929,80.073,74.428,80.073H156.6v-17.065    H74.296c-33.867,0-57.363-33.211-57.363-63.008c0-22.84,14.964-43.45,37.279-51.194l7.614-2.625l-2.231-7.744    c-3.019-10.632-2.625-21.134,1.313-31.504c7.22-19.69,25.597-33.604,46.6-35.704c18.64-1.707,36.755,5.513,48.437,19.296    l11.026,13.127l3.806-16.671c7.876-34.916,40.693-60.119,77.841-59.857c40.824,0.261,75.872,32.421,78.235,71.538    c0.787,12.076-1.313,23.76-6.432,34.916l-4.987,10.895l11.945,1.05c28.748,2.625,51.194,26.385,51.194,54.213    c0,18.903-7.614,63.008-77.972,63.008h-61.695v17.065h61.695c70.096,0,95.037-41.349,95.037-80.073    C395.636,174.192,388.68,156.995,376.209,143.738z"/></g></g></g> 
                                    </svg>
                                </div>
                            </a>
                        </div>
                        <small class="flex justify-end text-gray-300 pt-1 w-full ">
                            {{ msg.huamanized_dt }}
                        </small>
                    </div>
                    <img v-bind:src="message[0].owner_profile_pic" aria-hidden="true" class="rounded-full w-12 h-12 absolute inset-x-0 bottom-0">
                    <div class="rounded-full bg-blue-400 w-2 h-2 mr-10 absolute bottom-0" style="right:7px;"></div>
                    <div class="rounded-full bg-blue-400 w-3 h-3 mr-10 absolute" style="right:16px; bottom: 3px;"></div>
                </div>
                <div v-else>
                    <div v-for="msg in message" v-bind:key="msg.id" v-bind:class="(msg === message[0] && message.length > 2) ? 'rounded-t-md' : (msg === message[message.length - 1] && message.length > 2) ? 'rounded-b-md' : 'rounded-md' " class="flex flex-col bg-gray-500 text-white max-w-xl w-50 sm:w-64 p-2 my-1 ml-12">
                        <p v-if="msg.desc">
                            {{ msg.desc }}
                        </p>
                        <div v-else>
                            <img v-if="msg.pic ? isImage(msg.pic) : false" v-bind:alt="msg.pic" class="img-preview w-full sticky object-cover shadow-md rounded-md bg-fixed h-32" v-bind:src="msg.pic" />
                            <audio v-else-if="msg.voice ? isVoice(msg.voice) : false" controls style="width: 13rem;">
                                <source :src="msg.voice">
                            </audio>
                            <div v-else class="flex flex-col w-full h-32 p-4 bg-bluebg shadow-md rounded-md justify-center items-center">
                                <img class="w-1/4" src="~/assets/icons/file_icon.svg" v-bind:alt="msg.pic">
                                <p class="pt-1 text-black">
                                    فایل با فرمت {{ getExt(msg.pic) }}
                                </p>
                            </div>
                            <a v-if="msg.pic" v-bind:href="msg.pic" v-bind:download="msg.pic" class="w-auto">
                                    <div class="m-2 w-6 focus:outline-none hover:bg-gray-400 p-1 rounded-md">
                                    <svg class="pointer-events-none fill-current w-4 h-4 ml-auto" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 395.638 395.638" style="enable-background:new 0 0 395.638 395.638;" xml:space="preserve" width="512px" height="512px"><g><g><g><polygon points="254,313.071 206.351,360.721 206.351,138.881 189.285,138.881 189.285,360.721 141.636,313.071 129.56,325.147     197.819,393.406 266.076,325.147   "/></g></g><g><g>
                                        <path d="M376.209,143.738c-9.845-10.501-22.447-17.721-36.361-21.134c3.413-10.632,4.858-21.659,4.07-32.817    c-1.444-23.366-12.076-45.287-30.061-61.827c-17.852-16.407-40.955-25.465-64.976-25.728c-0.262,0-0.394,0-0.656,0    c-39.774,0-75.478,24.284-89.654,59.464C144,50.276,125.098,44.631,105.934,46.47c-27.567,2.757-51.457,21.003-61.04,46.73    c-4.332,11.42-5.513,23.104-3.413,34.786C16.408,139.8,0,164.741,0,192.306c0,38.724,29.929,80.073,74.428,80.073H156.6v-17.065    H74.296c-33.867,0-57.363-33.211-57.363-63.008c0-22.84,14.964-43.45,37.279-51.194l7.614-2.625l-2.231-7.744    c-3.019-10.632-2.625-21.134,1.313-31.504c7.22-19.69,25.597-33.604,46.6-35.704c18.64-1.707,36.755,5.513,48.437,19.296    l11.026,13.127l3.806-16.671c7.876-34.916,40.693-60.119,77.841-59.857c40.824,0.261,75.872,32.421,78.235,71.538    c0.787,12.076-1.313,23.76-6.432,34.916l-4.987,10.895l11.945,1.05c28.748,2.625,51.194,26.385,51.194,54.213    c0,18.903-7.614,63.008-77.972,63.008h-61.695v17.065h61.695c70.096,0,95.037-41.349,95.037-80.073    C395.636,174.192,388.68,156.995,376.209,143.738z"/></g></g></g> 
                                    </svg>
                                </div>
                            </a>
                        </div>
                        <small class="flex justify-end text-gray-300 pt-1 w-full ">
                            {{ msg.huamanized_dt }}
                        </small>
                    </div>
                    <img v-bind:src="message[0].owner_profile_pic" aria-hidden="true" class="rounded-full w-12 h-12 absolute left-0 bottom-0">
                    <div class="rounded-full bg-gray-400 w-2 h-2 ml-10 absolute bottom-0" style="left:7px;"></div>
                    <div class="rounded-full bg-gray-400 w-3 h-3 ml-10 absolute" style="left:16px; bottom: 3px;"></div>
                </div>
            </div>
        </div>
        <div v-else class="flex justify-center items-center w-full mb-20">
            <div class="rounded-md shadow-md bg-gray-400 p-2">
                هیچ پیامی پیدا نشد !
            </div>
        </div>
        <div v-if="active" class="flex justify-between items-center h-16 absolute inset-x-0 bottom-0 p-2">
            <div @click="sendMsg()" class="flex justify-center items-center bg-primary shadow-sm hover:shadow-lg p-2 w-10 h-10 rounded-full cursor-pointer">
                <img src="~/assets/icons/send.svg" style="filter: invert(1);" alt="">
            </div>
        <div v-show="type !== 'comments'" class="flex justify-center items-center cursor-pointer">
            <vue-record-audio @result="onResult" class="bg-primary w-10 h-10 pl-2 mr-2" />
        </div>
            <div class="flex justify-end items-center w-full bg-white shadow-lg rounded-full mx-1 h-10">
                <input v-on:keyup.enter="sendMsg()" v-model="message" class="w-full m-6 outline-none" placeholder="متن پیام" type="text" name="" id="">
                <div v-show="type !== 'comments'" @click="UBHandler()" class="bg-gray-300 p-2 m-2 w-8 h-8 rounded-full hover:shadow-md cursor-pointer">
                    <input @change="hiddenChange($event)" id="hidden-input" type="file" class="hidden" />
                    <img src="~/assets/icons/icon-clip.svg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        if (process.client) {
            let element = document.getElementById("scroll");
            element ? element.scrollTop = element.scrollHeight - element.clientHeight : '';
        }
    },
    methods: {
        toBase64(file) {
          return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
          })
        },
        onResult (data) {
            const blob = data.slice(0, data.size, "audio/mp3")
            const file = new File([blob], "audio", {
                type: "audio/mp3"
            })
            this.addFile(file);
        },
        async addFile(file) {
            const base = await this.toBase64(file);
            const obj = {
                desc: '',
                question: this.$props.question
            }
            file.type === 'audio/mp3' ? Object.assign(obj, {voice: base.replace("data", "ext:mp3#data")}): ''
            file.type !== 'audio/mp3' ? Object.assign(obj, {pic: base.replace("data", `ext:${file.type.split("/")[1]}#data`)}): ''
            this.$axios.post(`api/${this.$props.type}/`, obj).then((res) => {
                this.message = '';
                if (this.newMsgs.length > 0) {
                    this.newMsgs.push(res.data)
                    this.$props.messages.pop();
                    this.$props.messages.push(this.newMsgs)
                } else {
                    this.newMsgs.push(res.data)
                    this.$props.messages.push(this.newMsgs)
                }
            }).catch((e) => {
                this.$toast.error("مشکلی در ارسال فایل پیش آمد.")
            })
        },
        UBHandler() {
            if (process.client) {
                document.getElementById('hidden-input').click();
            }
        },
        hiddenChange(e) {
            this.addFile(e.target.files[0]);
        },
        isImage(file) {
            const regEx = /\.(gif|jpe?g|tiff|png|webp|bmp)$/i
            return file.match(regEx);
        },
        isVoice(file) {
            const regEx = /\.(ogg|m4a|mp3|mp4|m3u|wav)$/i
            return file.match(regEx);
        },
        getExt(file) {
            return (/[.]/.exec(file)) ? /[^.]+$/.exec(file) : undefined;
        },
        showDisableMsg() {
            this.$toast.error('نظرات این سوال به دلیل وجود پاسخ غیر فعال است')
        },
        async sendMsg() {
            const res = await this.$axios.post(`api/${this.$props.type}/`, {
                desc: this.message,
                question: this.$props.question
            })
            this.message = '';
            if (this.newMsgs.length > 0) {
                this.newMsgs.push(res.data)
                this.$props.messages.pop();
                this.$props.messages.push(this.newMsgs)
            } else {
                this.newMsgs.push(res.data)
                this.$props.messages.push(this.newMsgs)
            }
        }
    },
    data() {
        return {
            message: '',
            newMsgs: [],
        }
    },
    watch: {
        messages: function() {
            setTimeout(() => {
                let element = document.getElementById("scroll");
                element.scrollTop = element.scrollHeight - element.clientHeight;
            }, 500)
        }
    },
    props: [
        'messages',
        'type',
        'question',
        'active'
    ]
}
</script>

<style>

</style>