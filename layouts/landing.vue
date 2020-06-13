<template>
  <div>
    <div class="landing-head">
      <header class="lg:px-16 px-6 bg-white flex flex-wrap items-center shadow-sm lg:py-0 py-2">
        <div class="flex-1 flex justify-between items-center">
          <div v-if="!$auth.loggedIn">
            <nuxt-link to="/auth/login">
              <button class="bg-white border border-gray-500 hover:bg-blue-600 text-primary font-bold py-2 px-4 rounded">
              ورود
              </button>
            </nuxt-link>
            <nuxt-link to="/auth/register">
              <button class="bg-primary hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              ثبت نام
              </button>
          </nuxt-link>
          </div>
          <div v-else class="flex justify-center items-center">
            <img @click="isProfOpen = !isProfOpen" class="rounded-full w-10 h-10 border-2 border-transparent hover:border-primary" v-bind:src="$auth.user ? $auth.user.profile_pic_thumb ? $auth.user.profile_pic_thumb : $auth.user.default_profile_pic : '' " v-bind:alt="$auth.user ? $auth.user.full_name ? $auth.user.full_name : 'کاربر بدون نام' : '' ">
          </div>
                <transition
                  enter-active-class="transition ease-out duration-100"
                  enter-class="transform opacity-0 scale-95"
                  enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75"
                  leave-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95"
                >
                <div v-show="isProfOpen" class="origin-bottom-right absolute left-1-5 sm:left-4 top-5 sm:top-4 mt-2 w-48 rounded-md shadow-lg" style="direction: rtl; z-index:100">
                      <div class="rounded-md bg-white shadow-xs">
                        <div class="py-1">
                          <div class="flex flex-col p-2">
                            <div class="flex">
                              <img class="rounded-full w-10 h-10 border-2 border-transparent" v-bind:src="$auth.user ? $auth.user.profile_pic_thumb ? $auth.user.profile_pic_thumb : $auth.user.default_profile_pic : '' " v-bind:alt="$auth.user ? $auth.user.full_name ? $auth.user.full_name : 'کاربر بدون نام' : '' ">
                              <div class="flex flex-col justify-center items-start">
                                <p class="px-2">
                                  {{ $auth.user ? $auth.user.full_name ? $auth.user.full_name : 'کاربر بدون نام' : '' }}
                                </p>
                                <p class="px-2 text-sm text-gray-700">
                                  {{ $auth.user ? $auth.user.username : ''}}
                                </p>
                              </div>
                            </div>
                          </div>
                          <hr>
                          <nuxt-link to="/user/dashboard" class="flex items-center justify-start w-full px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
                            <img class="pl-2 w-6" src="~/assets/icons/icon-home.svg" alt="پیشخوان" style="filter: invert(0.6);">
                            پیشخوان
                          </nuxt-link>
                          <nuxt-link to="/user/profile" class="flex items-center justify-start w-full px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
                            <img class="pl-2 w-6" src="~/assets/icons/icon-user.svg" alt="پروفایل" style="filter: invert(0.6);">
                            حساب کاربری
                          </nuxt-link>
                          <nuxt-link to="/user/questions" class="flex items-center justify-start w-full px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
                            <img class="pl-2 w-6" src="~/assets/icons/icon-file-plus.svg" alt="پروژه های من" style="filter: invert(0.6);">
                            پروژه های من 
                          </nuxt-link>
                          <nuxt-link to="/user/finance" class="flex items-center justify-start w-full px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
                            <img class="pl-2 w-6" src="~/assets/icons/icon-refresh.svg" alt="افزایش اعتبار" style="filter: invert(0.6);">
                            افزایش اعتبار 
                          </nuxt-link>
                          <hr>
                          <div @click="logout()" class="flex text-red items-center justify-start w-full text-right px-4 py-2 text-sm leading-5 cursor-pointer hover:bg-gray-200 focus:outline-none focus:bg-gray-100">
                            <img class="pl-2 w-1/6" src="~/assets/icons/logout.svg" alt="خروج" >
                            خروج از حساب
                          </div>
                        </div>
                      </div>
                    </div>
                </transition>
          <!-- <a href="#">
          <img src="~/assets/img/halyab_icon.png" alt="icon" class="w-10" style="border-radius: 50%;">
        </a> -->
      </div>
      <label @click="openMenu = true" for="menu-toggle" class="pointer-cursor lg:hidden block"><svg class="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></label>
      <!-- responsive menu -->
        <transition
            enter-class="ease-out duration-300"
            enter-active-class="opacity-0"
            enter-to-class="opacity-100"
            leave-class="ease-in duration-200"
            leave-active-class="opacity-100"
            leave-to-class="opacity-0"
        >
            <div v-if="openMenu" class="fixed inset-x-0 px-4 pt-4 top-0 sm:flex" style="direction: rtl; z-index:99;">
            <div class="fixed inset-0 transition-opacity">
                <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
                <transition
                enter-class="ease-out duration-300"
                enter-active-class="opacity-0 translate-y-4"
                enter-to-class="opacity-100 translate-y-0"
                leave-class="ease-in duration-200"
                leave-active-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 translate-y-4"
                >
                    <div v-show="openMenu" class="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                        <div class="bg-white px-4 pt-5 pb-4">
                        <div>
                            <div class="flex flex-col w-full mt-3 text-center relative">
                              <div @click="openMenu = false" class="flex justify-center items-center w-12 h-12 cursor-pointer absolute ">
                                <img src="~/assets/icons/icon-x.svg" alt="خروج">
                              </div>
                              <div class="flex w-full justify-center items-center">
                                <img class="w-32" src="~/assets/icons/full-logo.png" alt="icon">
                              </div>
                              <hr>
                            <div @click="openMenu = false" class="w-full flex flex-col leading-10 justify-center items-center mt-4">
                              <div @click="menuSelect('/')">
                                <div>
                                  خانه
                                </div>
                              </div>
                                <hr class="w-full">
                              <div @click="menuSelect('/join_us')">
                                <div>
                                  پیوستن به ما
                                </div>
                              </div>
                                <hr class="w-full">
                              <div @click="menuSelect('/contact_us')">
                                <div>
                                  تماس با ما
                                </div>
                              </div>
                                <hr class="w-full">
                                <div @click="menuSelect('/about_us')">
                                <div>
                                  درباره ما
                                </div>
                              </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </transition>
            </div>
        </transition>
      <input class="hidden" type="checkbox" id="menu-toggle" />
      <div class="hidden justify-end sm:flex sm:items-center sm:w-auto w-full" id="menu">
        <nav>
          <ul class="sm:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
            <li><nuxt-link to="/join_us" class="p-3 py-3 block border-b-2 border-transparent hover:border-primary"> پیوستن به ما </nuxt-link></li>
            <li><nuxt-link to="/about_us" class="p-3 py-3 block border-b-2 border-transparent hover:border-primary">درباره ما</nuxt-link></li>
            <li><nuxt-link to="/contact_us" class="p-3 py-3 block border-b-2 border-transparent hover:border-primary">تماس با ما</nuxt-link></li>
          </ul>
        </nav>
          <div class="flex">
            <nuxt-link to="/">
              <img class="w-32" src="~/assets/icons/full-logo.png" alt="icon">
            </nuxt-link>
          </div>
      </div>
      </header>
    </div>
    <hr>
    <nuxt />
  </div>
</template>

<script>
export default {
  methods: {
    async logout() {
      this.isProfOpen = false;
      await this.$auth.logout('local');
    },
    menuSelect(to) {
      this.openMenu = false;
      this.$router.push(to)
    }
  },
  data() {
    return {
      isProfOpen: false,
      openMenu: false
    }
  }
}
</script>

<style>

.landing-head {
    width: 100vw;
    max-width: 100%;
    direction: ltr;
}

</style>