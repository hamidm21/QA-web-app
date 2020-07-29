<template>
  <div @click="closer($event)" class="user-layout">
    <div class="user-head flex shadow-md">
        <div class="w-full sm:px-16 px-6 bg-white flex flex-wrap items-center shadow-sm sm:py-0 py-2 relative">
            <div class="flex flex justify-between items-center py-2">
                <div class="flex justify-center items-center relative">
                    <img @click="isProfOpen = !isProfOpen; isNotifOpen = false" id="prof" class="rounded-full w-12 border-2 border-transparent hover:border-primary mx-1 cursor-pointer" v-bind:src="$auth.user.profile_pic_thumb ? $auth.user.profile_pic_thumb : $auth.user.default_profile_pic " v-bind:alt="$auth.user.full_name ? $auth.user.full_name : 'کاربر بدون نام' ">
                    <div @click="isNotifOpen = !isNotifOpen; isProfOpen = false" id="notification" class="flex justify-center items-center hover:shadow-md rounded-full w-12 h-12 border-transparent mx-1 cursor-pointer relative">
                      <div v-if="this.$store.state.dashboard.unReads >= 1" class="flex justify-center items-center bg-red absolute top-0 right-0 w-4 h-4 rounded-full text-white text-center text-xxs">
                        {{ this.$store.state.dashboard.unReads }}
                      </div>
                      <img id="notif" class="w-6 mx-4" src="~/assets/icons/bell-regular.svg" alt="نوتیفیکیشن">
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
                <div v-show="isProfOpen" class="origin-bottom-right absolute left-1-5 sm:left-4 top-5 sm:top-4 mt-2 w-48 rounded-md shadow-lg" style="direction: rtl;">
                      <div class="rounded-md bg-white shadow-xs">
                        <div class="py-1">
                          <div class="flex flex-col p-2">
                            <div class="flex">
                              <img class="rounded-full w-10 h-10 border-2 border-transparent" v-bind:src="$auth.user.profile_pic_thumb ? $auth.user.profile_pic_thumb : $auth.user.default_profile_pic " v-bind:alt="$auth.user.full_name ? $auth.user.full_name : 'کاربر بدون نام' ">
                              <div class="flex flex-col justify-center items-start">
                                <p class="px-2">
                                  {{ $auth.user.full_name ? $auth.user.full_name : 'کاربر بدون نام' }}
                                </p>
                                <p class="px-2 text-sm text-gray-700">
                                  {{ $auth.user.username }}
                                </p>
                              </div>
                            </div>
                          </div>
                          <hr>
                          <div @click="profSelect('/user/dashboard')" class="flex items-center justify-start w-full px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
                            <img class="pl-2 w-6" src="~/assets/icons/icon-home.svg" alt="پیشخوان" style="filter: invert(0.6);" >
                            پیشخوان
                          </div>
                          <div @click="profSelect('/user/profile')" class="flex items-center justify-start w-full px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
                            <img class="pl-2 w-6" src="~/assets/icons/icon-user.svg" alt="پروفایل" style="filter: invert(0.6);">
                            حساب کاربری
                          </div>
                          <div @click="profSelect('/user/questions')" class="flex items-center justify-start w-full px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
                            <img class="pl-2 w-6" src="~/assets/icons/icon-file-plus.svg" alt="پروژه های من" style="filter: invert(0.6);">
                            پروژه های من 
                          </div>
                          <div @click="profSelect('/user/trx')" class="flex items-center justify-start w-full px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
                            <img class="pl-2 w-6" src="~/assets/icons/icon-refresh.svg" alt="افزایش اعتبار" style="filter: invert(0.6);">
                            افزایش اعتبار 
                          </div>
                          <hr>
                            <div @click="logout()" class="flex text-red items-center justify-start w-full text-right px-4 py-2 text-sm leading-5 hover:bg-gray-200 focus:outline-none focus:bg-gray-100">
                              <img class="pl-2 w-1/6" src="~/assets/icons/logout.svg" alt="خروج" >
                              خروج از حساب
                            </div>
                        </div>
                      </div>
                    </div>
                </transition>
                <transition
                  enter-active-class="transition ease-out duration-100"
                  enter-class="transform opacity-0 scale-95"
                  enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75"
                  leave-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95"
                >
                <div v-show="isNotifOpen" class="origin-bottom-right absolute left-1-5 sm:left-8 top-5 sm:top-4 mt-2 w-64 rounded-md shadow-lg" style="direction: rtl;">
                      <div v-if="this.$store.state.dashboard.notifs.length > 0" class="w-full rounded-md bg-gray-100 shadow-md p-2">
                        <div @click="viewNotif(notif)" v-for="notif in this.$store.state.dashboard.notifs" v-bind:key="notif.id" class="flex flex-col bg-white p-2 rounded-md shadow-md my-1 hover:shadow-lg cursor-pointer">
                            <div class="flex justify-start items-center text-xs py-2">
                              <img class="w-4 mx-2" src="~/assets/icons/bell-regular.svg" alt="نوتیفیکیشن">
                              {{notif.jcreate_time}}
                            </div>
                            <div>
                              {{ notif.desc }}
                            </div>
                        </div>
                        <div class="flex justify-center items-center rounded-full w-8 h-8 cursor-pointer hover:shadow-md">
                          <img @click="viewAll()" class="w-5 my-2" src="~/assets/icons/icon-view.svg" alt="نوتیفیکیشن">
                        </div>
                      </div>
                      <div class="w-full rounded-md bg-gray-100 shadow-md p-4" v-else>
                        هیچ اطلاعیه جدیدی وجود ندارد !
                      </div>
                    </div>
                </transition>

        </div>
        <div @click="openMenu = true" class="absolute flex justify-center items-center right-0 sm:hidden mr-4 w-12 h-12 rounded-full hover:shadow-md cursor-pointer" >
          <img class="w-6 mx-4" src="~/assets/icons/icon-menu.svg" alt="نوتیفیکیشن">
        </div>
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
                              <div @click="menuSelect('/user/dashboard')">
                                <div class="flex">
                                  پیشخوان
                                </div>
                              </div>
                                <hr class="w-full">
                              <div @click="menuSelect('/user/questions')">
                                <div>
                                  پروژه های من
                                </div>
                              </div>
                                <hr class="w-full">
                              <div v-show="$auth.user.is_teacher" @click="menuSelect('/user/myTasks')">
                                <div>
                                  وظایف من
                                </div>
                              </div>
                                <hr v-show="$auth.user.is_teacher" class="w-full">
                              <div v-show="$auth.user.is_judge" @click="menuSelect('/user/judge')">
                                <div>
                                  داوری های من
                                </div>
                              </div>
                                <hr v-show="$auth.user.is_judge" class="w-full">
                              <div @click="menuSelect('/user/othersQuestions')">
                                <div>
                                  پروژه های دیگران
                                </div>
                              </div>
                                <hr class="w-full">
                              <div @click="menuSelect('/user/profile')">
                                <div>
                                  حساب کاربر
                                </div>
                              </div>
                                <hr class="w-full">
                              <div @click="menuSelect('/user/trx')">
                                <div>
                                  گردش حساب
                                </div>
                              </div>
                                <hr class="w-full">
                              <div @click="menuSelect('/user/teachers')">
                                <div>
                                  اساتید حل یاب
                                </div>
                              </div>
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
      </div>
      <div class="side-nav hidden sm:flex flex-col bg-primary" style="box-shadow: 0 4px 14px 0 rgba(0,118,255,0.39);">
          <div class="w-full h-fit flex justify-start items-center">
              <img class="w-4/5 mb-4 mt-1" src="~/assets/icons/full_white.png" alt="لوگو حل یاب">
          </div>
          <nav class="text-white">
              <ul>
                <nuxt-link to="/user/dashboard">
                  <li class="py-2 flex" v-bind:class="this.$store.state.user.dashboard.page === 'dashboard' ? 'bg-primedark rounded-md' : '' ">
                    <img class="w-4 mx-2" src="~/assets/icons/icon-home.svg" alt="پیشخوان" style="filter: invert(0.3)">
                      پیشخوان
                  </li>
                </nuxt-link>
                <nuxt-link to="/user/questions">
                  <li class="py-2 flex" v-bind:class="this.$store.state.user.dashboard.page === 'questions' ? 'bg-primedark rounded-md' : '' ">
                    <img class="w-4 mx-2" src="~/assets/icons/icon-file-plus.svg" alt="ثبت پروژه">
                      پروژه های من
                  </li>
                </nuxt-link>
                <nuxt-link v-show="$auth.user.is_teacher" to="/user/myTasks">
                  <li class="py-2 flex" v-bind:class="this.$store.state.user.dashboard.page === 'myTasks' ? 'bg-primedark rounded-md' : '' ">
                    <img class="w-5 mx-2" src="~/assets/icons/icon-briefcase.svg" alt="وظایف من" style="filter: invert(0.7)">
                      وظایف من
                  </li>
                </nuxt-link>
                <nuxt-link to="/user/othersQuestions">
                  <li class="py-2 flex" v-bind:class="this.$store.state.user.dashboard.page === 'others' ? 'bg-primedark rounded-md' : '' ">
                    <img class="w-5 mx-2" src="~/assets/icons/icon-group.svg" alt="پروژهای دیگران" style="filter: invert(0.7)">
                      پروژه های دیگران
                  </li>
                </nuxt-link>
                <nuxt-link v-show="$auth.user.is_judge" to="/user/judge">
                  <li class="py-2 flex" v-bind:class="this.$store.state.user.dashboard.page === 'judge' ? 'bg-primedark rounded-md' : '' ">
                    <img class="w-5 mx-1" src="~/assets/icons/icon-building.svg" alt="اساتید حل یاب" style="filter: invert(0.7)">
                    داوری های من
                  </li>
                </nuxt-link>
                <nuxt-link to="/user/profile">
                  <li class="py-2 flex" v-bind:class="this.$store.state.user.dashboard.page === 'profile' ? 'bg-primedark rounded-md' : '' ">
                    <img class="w-4 mx-2" src="~/assets/icons/icon-user.svg" alt="حساب کاربر">
                      حساب کاربر
                  </li>
                </nuxt-link>
                <nuxt-link to="/user/trx">
                  <li class="py-2 flex" v-bind:class="this.$store.state.user.dashboard.page === 'finance' ? 'bg-primedark rounded-md' : '' ">
                    <img class="w-4 mx-2" src="~/assets/icons/icon-refresh.svg" alt="گردش حساب">
                      گردش حساب
                  </li>
                </nuxt-link>
                <nuxt-link to="/user/teachers">
                  <li class="py-2 flex" v-bind:class="this.$store.state.user.dashboard.page === 'teachers' ? 'bg-primedark rounded-md' : '' ">
                    <img class="w-5 mx-1" src="~/assets/icons/icon-user-check.svg" alt="اساتید حل یاب" style="filter: invert(0.7)">
                    اساتید حل یاب
                  </li>
                </nuxt-link>
                <nuxt-link to="/contact_us">
                  <li class="py-2 flex" v-bind:class="this.$store.state.user.dashboard.page === 'contactUs' ? 'bg-primedark rounded-md' : '' ">
                    <img class="w-4 mx-2" src="~/assets/icons/icon-chat.svg" alt="تماس با ما">
                      تماس با ما
                  </li>
                </nuxt-link>
                  <nuxt-link to="/about_us">
                  <li class="py-2 flex" v-bind:class="this.$store.state.user.dashboard.page === 'aboutUs' ? 'bg-primedark rounded-md' : '' ">
                    <img class="w-4 mx-2" src="~/assets/icons/icon-exclamation.svg" alt="درباره ما">
                      درباره ما
                  </li>
                  </nuxt-link>
              </ul>
              <hr>
          </nav>
      </div>
    </div>
    <nuxt />
  </div>
</template>

<script>
export default {
  mounted() {
      var replaceDigits = function() {
        var map = ["&\#1776;","&\#1777;","&\#1778;","&\#1779;","&\#1780;","&\#1781;","&\#1782;","&\#1783;","&\#1784;","&\#1785;"]
        var elements = document.getElementsByClassName("number");
        for (const e of elements) {
          e.innerHTML = e.innerHTML.replace(/\d(?=[^<>]*(<|$))/g, function($0) { return map[$0]});
        }
      }
      replaceDigits()
    },
  middleware: 'auth',
  methods: {
    async logout() {
      this.isProfOpen = false;
      await this.$auth.logout('local');
      this.$router.push('/')
    },
    async viewNotif(notif) {
      await this.$axios.get(`/api/notifications/${notif.id}/setread`);
      this.isNotifOpen = false
      this.$store.commit("unSetNotifs", notif.id)
      this.$store.commit("setUnReadNotifs", this.$store.state.dashboard.unReads - 1)
      this.$router.push(`/user/questions/${notif.question.id}`)
    },
    async viewAll() {
      await this.$axios.get("/api/notifications/setallread");
      this.$store.commit("setNotifs", [])
      this.$store.commit("setUnReadNotifs", 0)
    },
    menuSelect(to) {
      this.openMenu = false;
      this.$router.push(to)
    },
    profSelect(to) {
      this.isProfOpen = false;
      this.$router.push(to)
    },
    closer(ev) {
      if (ev.target.id !== 'prof' && this.isProfOpen) {
        this.isProfOpen = false
      } else if (ev.target.id !== 'notification' && ev.target.id !== 'notif' && this.isNotifOpen) {
        this.isNotifOpen = false
      } else {
        return ''
      }
    }
  },
  async asyncData({ $axios }) {
      const n_res = await $axios.get("/api/notifications");
      return {
        notifNum: 0
      }
  },
  data() {
    return {
      isProfOpen: false,
      isNotifOpen: false,
      openMenu: false,
      notifNum: 0,
      notifs: []
    }
  }
}
</script>

<style>

.user-layout {
  height: 100%;
}

.user-head {
    width: 100vw;
    max-width: 100%;
    direction: ltr;
}

.side-nav {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    direction: rtl;
    display: block;
    overflow-y: auto;
    width: 100%;
    max-width: 250px;
    padding-right: 1rem;
    padding-left: 1rem;
}


html {
  height: 100%;
}

body {
  height: 100%;
}

#__nuxt {
  height: 100%;
}

#__layout {
  height: 100%;
}


</style>