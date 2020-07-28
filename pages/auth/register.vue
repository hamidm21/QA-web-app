<template>
  <div class="register w-full sm:w-auto">
    <div class="sm:w-auto w-full sm:h-auto h-full">
      <form @keydown.enter="authRegister()" class="bg-white shadow-lg rounded-lg flex w-max-md justify-center m-4 border">
          <div class="px-8 pt-6 mb-4">
            <nuxt-link to="/">
              <img src="~/assets/icons/arrow-right-solid.svg" alt="back" class="w-4">
            </nuxt-link>
            <div class="flex justify-center items-center">
              <img src="~/assets/img/halyab_icon.png" alt="icon" class="w-10" style="border-radius: 50%;">
            </div>
            <div class="flex items-center justify-center py-8">
              <h1 class="font-bold text-size-20">
                فرم ثبت نام
              </h1>
            </div>
            <div class="mb-4">
            <label class="flex text-gray-700 text-sm font-bold mb-2" for="row">
                شماره همراه
            </label>
            <input v-model="register.cell_phone" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="text" placeholder="شماره همراه" required/>
            </div>
            <div class="mb-4">
            <label class="flex text-gray-700 text-sm font-bold mb-2" for="row">
                رمز عبور
            </label>
            <input v-model="register.password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="pass" type="password" placeholder="رمز عبور" required/>
            </div>
            <div class="mb-6">
            <label class="flex text-gray-700 text-sm font-bold mb-2" for="column">
                تکرار رمز عبور
            </label>
            <input v-model="register.retyped" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="column" type="password" placeholder="تکرار رمز عبور" required/>
            </div>
            <div class="flex items-center justify-center">
            <button @click="authRegister" type="button" class="bg-primary hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline" style="box-shadow: 0 4px 14px 0 rgba(0,118,255,0.39);">
                ثبت نام
            </button>
            </div>
            <div class="block items-center justify-center p-4">
              <nuxt-link to="/auth/login" class="text-gray-600">
                قبلا ثبت نام کردی ؟
              </nuxt-link>
            </div>
          </div>
          <div class="hidden bg-primary text-bold items-center justify-center md:flex md:flex-col md:max-w-md" style="box-shadow: 0 4px 14px 0 rgba(0,118,255,0.39); color:white; border-top-left-radius: inherit; border-bottom-left-radius: inherit;">
            <img class="p-4" src="~/assets/img/register.svg" style="width: 50%;" alt="auth-logo">
            <div class="block items-center justify-center pb-2">
              <h1 class="font-bold" style="font-size: xx-large;">
                ثبت نام در حل یاب
              </h1>
            </div>
            <div class="block items-center justify-center p-2">
              <p>
                دسترسی به اساتید مجرب سایت حل یاب
              </p>
            </div>
          </div>
      </form>
    </div> 
  </div>
</template>

<script>

export default {
  async asyncData({ $axios }) {
    //   const response = await $axios.post("http://rest.3tour.ir/trips/getRecent");
    //   return {trip: response.data.trips[0]}
  },
  components: {
  },
  data() {
    return {
      register: {
        cell_phone: '',
        password: '',
        retyped: ''
      }
    }
  },
  methods: {
    showError(str) {
      this.$toast.error(str)
    },
    authRegister() {
      const errors = []
        this.register.cell_phone ? '' : errors.push('شماره خود را وارد کنید');
        this.register.password ? '' : errors.push('رمز عبور خود را وارد کنید');
        this.register.retyped ? '' : errors.push('تکرار رمز عبور خود را وارد کنید');
         if (errors.length >= 1) {
               errors.map(x => this.showError(x));
               return ''
         }
      if (this.register.retyped === this.register.password) {
        this.$axios.post("/api/auth/register/", this.register)
        .then((res) => {
          this.$store.commit("setRegisterInfo", this.register);
          this.$router.push("/auth/activation/" + this.register.cell_phone)
        })
        .catch((e) => {
          if (e.response.data.already_registered) {
            this.$toast.error("حساب کاربری با این شماره قبلا ثبت شده است")
          } else {
            this.$toast.error("در فرایند ثبت نام مشکلی پیش آمده است")
          }
        })
      } else {
        this.$toast.error("گذرواژه وارد شده با تکرار آن مطابقت ندارد");
      }
    }
  },
  auth: false,
  layout: "landing"
}
</script>


<style>

.register {
  margin: 0 auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  direction: rtl;
}

</style>>