<template>
    <div class="user-dash sm:pr-250 h-full sm:h-full flex flex-col">
        <div class="p-10 w-full h-full flex justify-center items-center">
            <div class="flex flex-col rounded-lg bg-white rouended-md w-r35 shadow-lg">
                <div class="w-full flex flex-col justify-start items-end" >
                    <div class="bg-primary w-full h-32 rounded rounded-b-none flex justify-start relative">
                        <img class="rounded-full w-32 h-32 shadow-2xl border-4 right-30 bottom-30n sm:right-18 sm:top-60 sm:bottom-0 absolute" v-bind:src="$auth.user.profile_pic_thumb ? $auth.user.profile_pic_thumb : $auth.user.default_profile_pic " v-bind:alt="$auth.user.full_name ? $auth.user.full_name : 'کاربر بدون نام' " >
                    </div>
                    <div class="flex flex-col sm:flex-row w-full h-full justify-between items-center sm:items-end">
                        <div class="flex flex-col justify-center items-center h-full">
                            <h3 class="pt-16 font-bold h-full">
                            {{
                                $auth.user.full_name
                            }}
                            </h3>
                            <small class="flex w-full justify-center items-center pt-1">
                                {{
                                    $auth.user.username
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
                                <h3 class="p-4">
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
                                                <div @click="renewPass()" class="inline-flex justify-center w-full rounded-md border border-primary px-4 py-2 bg-red-600 text-primary leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:border-primary focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                                                تایید
                                                </div>
                                            </span>
                                            <span class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                                                <div @click="triggerModal()" class="inline-flex justify-center w-full rounded-md border border-red px-4 py-2 bg-white text-red leading-6 font-medium shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5">
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
    mounted: function () {
        this.$store.commit("setUserDashPage", 'profile');
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
        renewPass() {
            let errors = []
            this.old_password ? this.old_password : errors.push('لطفا رمز فعلی را وارد کنید');
            this.new_password ? this.new_password : errors.push('لطفا رمز پیشنهادی را وارد کنید');
            if (errors.length >= 1) {
                errors.map(x => this.showError(x));
                return ''
            }
            this.$axios.post(`/api/auth/users/${this.$auth.user.id}/setpassword`, {
                old_password: this.old_password,
                new_password: this.new_password
            }).then((res) => {
                this.openModal = false
                this.$toast.success('پیشنهاد ارسال شد')
            }).catch((e) => {
                this.openModal = false
                this.showError("تغییر رمز با موفقیت انجام نشد.")
            })
        }
    },
    data() {
        return {
            items: [],
            openModal: false,
            new_password: '',
            old_password: '',
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

.top-100 {
    top: 100%
}

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