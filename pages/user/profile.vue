<template>
    <div class="user-dash sm:pr-250 h-full sm:h-full flex flex-col">
        <div class="p-1 sm:p-10 w-full flex justify-center items-center">
            <div class="flex flex-col rounded-lg bg-white rouended-md w-r35 shadow-lg">
                <div class="w-full flex flex-col justify-start items-end" >
                    <input @change="hiddenChange($event)" id="hidden-input" type="file" class="hidden" />
                    <div @click="ProfHandler($event)" class="bg-primary w-full h-32 rounded rounded-b-none flex justify-start relative">
                        <img id="prof-thumb" class="rounded-full w-32 h-32 shadow-2xl border-4 right-30 bottom-30n bg-white sm:right-18 sm:top-60 sm:bottom-0 absolute hover:border-secondary" v-bind:src="profile_pic_thumb ? profile_pic_thumb : default_profile_pic " v-bind:alt="full_name ? full_name : 'کاربر بدون نام' " >
                    </div>
                    <div class="flex flex-col sm:flex-row w-full h-full justify-between items-center sm:items-end">
                        <div class="flex flex-col justify-center items-center h-full">
                            <h3 class="pt-16 font-bold h-full">
                            {{
                                full_name
                            }}
                            </h3>
                            <small class="flex w-full justify-center items-center pt-1 number">
                                {{
                                    username
                                }}
                            </small>
                            <div>
                                <div class="flex w-full justify-end ">
                                <div @click="logout()" class="flex justify-center items-center text-red text-white font-bold py-2 m-4 cursor-pointer">
                                    خروج
                                </div>
                                <div @click="openModal = !openModal" class="flex justify-center items-center text-primary text-white font-bold p-2 my-4 cursor-pointer">
                                    تغییر رمز عبور
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="h-full w-9/10 p-5">
                            <div class="flex justify-between w-full border-b">
                                <h3 class="p-4">
                                    اعتبار فعلی :
                                </h3>
                                <h3 class="p-4 number">
                                    {{
                                        $auth.user.current_balance
                                    }} تومان
                                </h3>
                            </div>
                            <div class="flex justify-between w-full">
                                <h3 class="p-4">
                                    نوع حساب کاربری :
                                </h3>
                                <h3 class="p-4">
                                    {{
                                        $auth.user.is_teacher ? 'استاد' : 'دانش آموز'
                                    }}
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                    <hr>
                    <div class="flex-col sm:flex sm:flex-row">
                        <div class="flex-col w-full sm:w-1/2 justify-center items-center p-3">
                            <label for="first_name"><small>نام</small></label>
                            <div class="flex justify-center items-center">
                                <input v-model="first_name" id="first_name" name="first_name" class="form-input block w-full pr-7 pl-12 sm:text-sm sm:leading-5" placeholder="نام" />
                            </div>
                        </div>
                        <div class="flex-col w-full sm:w-1/2 justify-center items-center p-3">
                            <label for="last_name"><small>نام خانوادگی</small></label>
                            <div class="flex justify-center items-center">
                                <input v-model="last_name" id="last_name" name="last_name" class="form-input block w-full pr-7 pl-12 sm:text-sm sm:leading-5" placeholder="نام خانوادگی" />
                            </div>
                        </div>
                    </div>
                    <div class="flex-col sm:flex sm:flex-row">
                        <div class="flex-col w-full sm:w-1/2 justify-center items-center p-3">
                            <label for="username"><small>نام کاربری</small></label>
                            <div class="flex justify-center items-center">
                                <input v-model="username" id="username" name="username" class="form-input block w-full pr-7 pl-12 sm:text-sm sm:leading-5" placeholder="نام کاربری" />
                            </div>
                        </div>
                        <div class="flex-col w-full sm:w-1/2 justify-center items-center p-3">
                            <label for="email"><small>ایمیل</small></label>
                            <div class="flex justify-center items-center">
                                <input v-model="email" id="email" name="email" type="email" class="form-input block w-full pr-7 pl-12 sm:text-sm sm:leading-5" placeholder="ایمیل" />
                            </div>
                        </div>
                    </div>
                    <div class="flex-col sm:flex sm:flex-row relative">
                        <div class="flex-col w-full sm:w-1/2 justify-center items-center p-3">
                            <label for=""><small>مقطع تحصیلی</small></label>
                            <div @click="opener(1)" class="bg-white justify-center items-center flex border rounded" style="border-color: #d2d6dc;">
                                <input v-bind:value="dd1Selected ? dd1Selected.name : ''" placeholder="مقطع تحصیلی" disabled class="p-1 px-2 appearance-none outline-none w-full bg-white text-gray-800 unselecting">
                                <div class="text-gray-300 w-8 py-1 pl-2 pr-1 border-r flex justify-center items-center border-gray-200">
                                    <div class="flex justify-center items-center cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up w-4 h-4" v-bind:style="ddOpen === 2 ? 'transform: rotate(0deg);' : 'transform: rotate(180deg);'">
                                            <polyline points="18 15 12 9 6 15"></polyline>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <transition
                                enter-active-class="transition ease-out duration-100"
                                enter-class="transform opacity-0 scale-95"
                                enter-to-class="transform opacity-100 scale-100"
                                leave-active-class="transition ease-in duration-75"
                                leave-class="transform opacity-100 scale-100"
                                leave-to-class="transform opacity-0 scale-95"
                                >
                                <div v-show="ddOpen === 1" class="absolute shadow-md z-40 w-full sm:top-100 rounded overflow-y-auto" style="height: 12rem;">
                                    <div class="flex flex-col w-full">
                                        <div @click="dd1Handler(item);" v-for="item in grades" v-bind:key="item.id" class="cursor-pointer w-full border-gray-100 border-b hover:bg-teal-100">
                                            <div class="flex w-full items-center p-2 pl-2 border-transparent bg-white border-l-2 relative hover:bg-primary hover:text-teal-100" v-bind:class="dd2Selected ? dd2Selected.id === item.id ? 'border-primary': '' : '' ">
                                                <div class="w-full items-center flex">
                                                    <div class="mx-2 leading-6  "> {{item.name}} </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </transition>
                        </div>
                        <div class="flex-col w-full sm:w-1/2 justify-center items-center p-3">
                            <label for="current_category"><small>رشته تحصیلی</small></label>
                            <div class="flex justify-center items-center">
                                <input v-model="current_category" id="current_category" name="current_category" class="form-input block w-full pr-7 pl-12 sm:text-sm sm:leading-5" placeholder="رشته تحصیلی" />
                            </div>
                        </div>
                    </div>
                    <div class="flex-col sm:flex sm:flex-row relative">
                        <div class="flex-col w-full sm:w-1/2 justify-center items-center p-3">
                            <label for=""><small>استان</small></label>
                            <div @click="opener(2)" class="bg-white justify-center items-center flex border rounded" style="border-color: #d2d6dc;">
                                <input v-bind:value="dd2Selected" placeholder="استان" disabled class="p-1 px-2 appearance-none outline-none w-full bg-white text-gray-800 unselecting">
                                <div class="text-gray-300 w-8 py-1 pl-2 pr-1 border-r flex justify-center items-center border-gray-200">
                                    <div class="flex justify-center items-center cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up w-4 h-4" v-bind:style="ddOpen === 2 ? 'transform: rotate(0deg);' : 'transform: rotate(180deg);'">
                                            <polyline points="18 15 12 9 6 15"></polyline>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <transition
                                enter-active-class="transition ease-out duration-100"
                                enter-class="transform opacity-0 scale-95"
                                enter-to-class="transform opacity-100 scale-100"
                                leave-active-class="transition ease-in duration-75"
                                leave-class="transform opacity-100 scale-100"
                                leave-to-class="transform opacity-0 scale-95"
                                >
                                <div v-show="ddOpen === 2" class="absolute shadow-md z-40 w-full sm:top-100 rounded overflow-y-auto" style="height: 12rem;">
                                    <div class="flex flex-col w-full">
                                        <div @click="dd2Handler(item);" v-for="item in provinces" v-bind:key="item.name" class="cursor-pointer w-full border-gray-100 border-b hover:bg-teal-100">
                                            <div class="flex w-full items-center p-2 pl-2 border-transparent bg-white border-l-2 relative hover:bg-primary hover:text-teal-100" v-bind:class="dd2Selected === item.name ? 'border-primary': ''">
                                                <div class="w-full items-center flex">
                                                    <div class="mx-2 leading-6  "> {{item.name}} </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </transition>
                        <div class="flex-col w-full sm:w-1/2 justify-center items-center p-3">
                            <label for=""><small>شهر</small></label>
                            <div @click="opener(3)" class="bg-white justify-center items-center flex border rounded" style="border-color: #d2d6dc;">
                                <input v-bind:value="dd3Selected" placeholder="شهر" disabled class="p-1 px-2 appearance-none outline-none w-full bg-white text-gray-800 unselecting">
                                <div class="text-gray-300 w-8 py-1 pl-2 pr-1 border-r flex justify-center items-center border-gray-200">
                                    <div class="flex justify-center items-center cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up w-4 h-4" v-bind:style="ddOpen === 2 ? 'transform: rotate(0deg);' : 'transform: rotate(180deg);'">
                                            <polyline points="18 15 12 9 6 15"></polyline>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <transition
                                enter-active-class="transition ease-out duration-100"
                                enter-class="transform opacity-0 scale-95"
                                enter-to-class="transform opacity-100 scale-100"
                                leave-active-class="transition ease-in duration-75"
                                leave-class="transform opacity-100 scale-100"
                                leave-to-class="transform opacity-0 scale-95"
                                >
                                <div v-show="ddOpen === 3" class="absolute shadow-md z-40 w-full sm:top-100 rounded overflow-y-auto" style="height: 12rem;">
                                    <div class="flex flex-col w-full">
                                        <div @click="dd3Handler(item);" v-for="item in cities" v-bind:key="item.name" class="cursor-pointer w-full border-gray-100 border-b hover:bg-teal-100">
                                            <div class="flex w-full items-center p-2 pl-2 border-transparent bg-white border-l-2 relative hover:bg-primary hover:text-teal-100" v-bind:class="dd2Selected === item.name ? 'border-primary': ''">
                                                <div class="w-full items-center flex">
                                                    <div class="mx-2 leading-6  "> {{item.name}} </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </transition>
                        </div>
                    </div>
                    <div class="flex-col sm:flex sm:flex-row">
                        <div class="flex-col w-full justify-center items-center p-3">
                            <label for=""><small>شماره شبا</small></label>
                            <div class="flex justify-center items-center">
                                <input v-model="shaba_num" id="shaba_num" name="shaba_num" type="number" class="form-input block w-full pr-7 pl-12 sm:text-sm sm:leading-5" placeholder="شماره شبا" />
                            </div>
                        </div>
                    </div>
                    <div class="flex-col sm:flex sm:flex-row">
                        <div class="flex-col w-full justify-center items-center p-3">
                            <div class="flex justify-center items-center">
                                <div @click="sendChanges()" class="p-2 bg-primary text-white flex justify-center items-center rounded-md w-full sm:w-1/3 cursor-pointer">
                                    ذخیره
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
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
                                                    تغییر رمز
                                                </h3>
                                                <div class="w-full flex flex-col mt-4">
                                                    <div class="w-full flex flex-col sm:flex-row justify-between items-start p-2">
                                                        <div class="relative right-0 m-2">
                                                            <h3>
                                                                رمز فعلی
                                                            </h3>
                                                        </div>
                                                        <div>
                                                            <input v-model="old_password" type="text" class="form-input block w-full pr-7 pl-12 sm:text-sm sm:leading-5" placeholder="رمز فعلی خود را وارد کنید" />
                                                        </div>
                                                    </div>
                                                    <div class="w-full flex flex-col sm:flex-row justify-between items-start p-2">
                                                        <div class="relative right-0 m-2">
                                                            <h3>
                                                                رمز جدید
                                                            </h3>
                                                        </div>
                                                        <div>
                                                            <input v-model="new_password" type="text" class="form-input block w-full pr-7 pl-12 sm:text-sm sm:leading-5" placeholder="رمز جدید خود را وارد کنید" />
                                                        </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                            <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row">
                                            <span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                                                <div @click="renewPass()" class="inline-flex justify-center w-full rounded-md border border-primary px-4 py-2 bg-red-600 text-primary leading-6 font-medium text-white shadow-sm transition ease-in-out duration-150 sm:text-sm sm:leading-5 cursor-pointer">
                                                تایید
                                                </div>
                                            </span>
                                            <span class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                                                <div @click="openModal = false" class="inline-flex justify-center w-full rounded-md border border-red px-4 py-2 bg-white text-red leading-6 font-medium shadow-sm transition ease-in-out duration-150 sm:text-sm sm:leading-5 cursor-pointer">
                                                انصراف
                                                </div>
                                            </span>
                                            </div>
                                        </div>
                                    </transition>
                                </div>
                            </transition>

    </div>
</template>

<script>
export default {
    mounted: async function () {
        this.$store.commit("setUserDashPage", 'profile');
        var replaceDigits = function() {
            var map = ["&\#1776;","&\#1777;","&\#1778;","&\#1779;","&\#1780;","&\#1781;","&\#1782;","&\#1783;","&\#1784;","&\#1785;"]
            var elements = document.getElementsByClassName("number");
            for (const e of elements) {
            e.innerHTML = e.innerHTML.replace(/\d(?=[^<>]*(<|$))/g, function($0) { return map[$0]});
            }
        }
        replaceDigits();
        // get data
        const cities = (await this.$axios.get('/cities.json')).data;
        const data = (await this.$axios.get('/api/auth/users')).data.user_info;
        const grades = (await this.$axios.get('/api/grades')).data;
        const provinces = []
        for (let i = 0; i < cities.length; i++) {
            provinces.push(Object.assign({}, {id: i, name: cities[i].name, cities: cities[i].cities }))
        }
        this.grades = grades;
        this.provinces = provinces;
        this.dd1Selected = (grades.filter(x => x.id === data.current_grade))[0]
        this.first_name = data.first_name;
        this.last_name = data.last_name;
        this.full_name = data.full_name;
        this.username = data.username;
        this.email = data.email;
        this.shaba_num = data.shaba_num;
        this.dd2Selected = data.province;
        data.province ? this.cities = (provinces.filter(x => x.name === data.province ))[0].cities: '';
        this.dd3Selected = data.city;
        this.profile_pic = '';
        this.profile_pic_thumb = data.profile_pic_thumb;
        this.default_profile_pic = data.default_profile_pic;
        this.current_category = data.current_category;
    },
    methods: {
        async logout() {
        this.isProfOpen = false;
        await this.$auth.logout('local');
        this.$router.push('/')
        },
        showError(str) {
         this.$toast.error(str)
        },
        opener(id) {
            if (id === 3 && !this.dd2Selected) {
                this.$toast.info(" ابتدا استان را انتخاب کنید ")
            } else {
                this.ddOpen === id ? this.ddOpen = 0 : this.ddOpen = id;
            }
        },
        toBase64(file) {
          return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
          })
        },
        async hiddenChange(e) {
            var output = document.getElementById('prof-thumb');
            output.src = URL.createObjectURL(event.target.files[0]);
            output.onload = function() {
                URL.revokeObjectURL(output.src) // free memory
            }
            const base = await this.toBase64(e.target.files[0]);
            this.profile_pic = base.replace("data", "ext:mp3#data")
        },
        ProfHandler(e) {
            e.preventDefault();
            if (process.client) {
                document.getElementById('hidden-input').click();
            }
        },
        dd1Handler(item) {
            this.dd1Selected = item;
            this.ddOpen = 0;
        },
        dd2Handler(item) {
            this.dd3Selected = '';
            this.dd2Selected = item.name;
            this.ddOpen = 0;
            const cities = [];
            for (let i = 0; i < item.cities.length; i++) {
                cities.push(Object.assign({}, {id: i, name: item.cities[i].name}))
            }
            this.cities = cities;
        },
        dd3Handler(item) {
            this.dd3Selected = item.name;
            this.ddOpen = 0;
        },
        renewPass() {
            let errors = []
            this.old_password ? this.old_password : errors.push('لطفا رمز فعلی را وارد کنید');
            this.new_password ? this.new_password : errors.push('لطفا رمز پیشنهادی را وارد کنید');
            if (errors.length >= 1) {
                errors.map(x => this.showError(x));
                return ''
            }
            this.$axios.post(`/api/auth/users/${this.$auth.user.id}/setpassword/`, {
                old_password: this.old_password,
                new_password: this.new_password
            }).then((res) => {
                this.openModal = false
                this.$toast.success('پیشنهاد ارسال شد')
            }).catch((e) => {
                this.openModal = false
                this.showError("تغییر رمز با موفقیت انجام نشد.")
            })
        },
        sendChanges() {
            const obj = {
                first_name: this.first_name,
                last_name: this.last_name,
                full_name: this.first_name + ' ' + this.last_name,
                shaba_num: this.shaba_num,
                username: this.username,
                email: this.email,
                current_category: this.current_category,
                province: this.dd2Selected,
                city: this.dd3Selected
            }
            this.current_grade ? Object.assign(obj, {current_grade: this.dd1Selected.id}) : '';
            this.profile_pic ? Object.assign(obj, {profile_pic: this.profile_pic}) : '';
            this.$axios.put(`/api/auth/users/${this.$auth.user.id}`, obj).then((res) => {
                this.$toast.success("حساب کاربری شما به روز رسانی شد")
                this.first_name= res.data.first_name;
                this.last_name= res.data.last_name;
                this.full_name= res.data.first_name + ' ' + res.data.last_name;
                this.current_category= res.data.current_category;
                this.current_grade= res.data.current_grade;
                }).catch((e) => {
                this.showError('مشکلی پیش آمده است')
            })
        }
    },
    data() {
        return {
            items: [],
            openModal: false,
            new_password: '',
            old_password: '',
            shaba_num: '',
            first_name: '',
            last_name: '',
            full_name: '',
            username: '',
            profile_pic_thumb: '',
            default_profile_pic: '',
            email: '',
            current_category: '',
            grades: [],
            provinces: [],
            cities: [],
            ddOpen: 0,
            dd1Selected: '',
            dd2Selected: '',
            dd3Selected: ''
        }
    },
    auth: true,
    layout: 'dashboard/user'
}
</script>

<style>

.bg-image {
    background-color: #1251a4;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='88' viewBox='0 0 88 88'%3E%3Cg fill='%2307122e' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M29.42 29.41c.36-.36.58-.85.58-1.4V0h-4v26H0v4h28c.55 0 1.05-.22 1.41-.58h.01zm0 29.18c.36.36.58.86.58 1.4V88h-4V62H0v-4h28c.56 0 1.05.22 1.41.58zm29.16 0c-.36.36-.58.85-.58 1.4V88h4V62h26v-4H60c-.55 0-1.05.22-1.41.58h-.01zM62 26V0h-4v28c0 .55.22 1.05.58 1.41.37.37.86.59 1.41.59H88v-4H62zM18 36c0-1.1.9-2 2-2h10a2 2 0 1 1 0 4H20a2 2 0 0 1-2-2zm0 16c0-1.1.9-2 2-2h10a2 2 0 1 1 0 4H20a2 2 0 0 1-2-2zm16-26a2 2 0 0 1 2-2 2 2 0 0 1 2 2v4a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-4zm16 0a2 2 0 0 1 2-2 2 2 0 0 1 2 2v4a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-4zM34 58a2 2 0 0 1 2-2 2 2 0 0 1 2 2v4a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-4zm16 0a2 2 0 0 1 2-2 2 2 0 0 1 2 2v4a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-4zM34 78a2 2 0 0 1 2-2 2 2 0 0 1 2 2v6a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-6zm16 0a2 2 0 0 1 2-2 2 2 0 0 1 2 2v6a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-6zM34 4a2 2 0 0 1 2-2 2 2 0 0 1 2 2v6a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4zm16 0a2 2 0 0 1 2-2 2 2 0 0 1 2 2v6a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4zm-8 82a2 2 0 1 1 4 0v2h-4v-2zm0-68a2 2 0 1 1 4 0v10a2 2 0 1 1-4 0V18zM66 4a2 2 0 1 1 4 0v8a2 2 0 1 1-4 0V4zm0 72a2 2 0 1 1 4 0v8a2 2 0 1 1-4 0v-8zm-48 0a2 2 0 1 1 4 0v8a2 2 0 1 1-4 0v-8zm0-72a2 2 0 1 1 4 0v8a2 2 0 1 1-4 0V4zm24-4h4v2a2 2 0 1 1-4 0V0zm0 60a2 2 0 1 1 4 0v10a2 2 0 1 1-4 0V60zm14-24c0-1.1.9-2 2-2h10a2 2 0 1 1 0 4H58a2 2 0 0 1-2-2zm0 16c0-1.1.9-2 2-2h10a2 2 0 1 1 0 4H58a2 2 0 0 1-2-2zm-28-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8 26a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm16 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM36 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm16 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-8-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 68a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm16-34a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm16-12a2 2 0 1 0 0 4 6 6 0 1 1 0 12 2 2 0 1 0 0 4 10 10 0 1 0 0-20zm-64 0a2 2 0 1 1 0 4 6 6 0 1 0 0 12 2 2 0 1 1 0 4 10 10 0 1 1 0-20zm56-12a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 48a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-48 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0-48a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm24 32a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-4a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm36-36a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM10 44c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4h-8a2 2 0 0 1-2-2zm56 0c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4h-8a2 2 0 0 1-2-2zm8 24c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4h-8a2 2 0 0 1-2-2zM3 68c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4H5a2 2 0 0 1-2-2zm0-48c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4H5a2 2 0 0 1-2-2zm71 0c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4h-8a2 2 0 0 1-2-2zm6 66a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM8 86a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0-68A6 6 0 1 1 8 2a6 6 0 0 1 0 12zm0-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm36 36a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'/%3E%3C/g%3E%3C/svg%3E");
}

.form-input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: #fff;
    border-color: #d2d6dc;
    border-width: 1px;
    border-radius: .375rem;
    padding: .5rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
}

/* .top-100 {
    top: 100%
} */

.bottom-100 {
    bottom: 100%
}

.max-h-select {
    max-height: 300px;
}

.unselecting {
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.unselecting::selection {
    background-color:transparent;
}

.unselecting::-moz-selection {
    background-color:transparent;
}

input:focus,
select:focus,
textarea:focus,
button:focus {
    outline: none;
}

</style>