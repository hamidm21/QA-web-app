<template>
  <div class="login w-full sm:w-auto">
        <div class="sm:w-auto w-full">
        <form @keydown.enter="authLogin()" class="bg-white shadow-lg rounded-lg flex w-max-md justify-center m-4 border">
            <div class="px-8 pt-6 mb-4">
              <div>
                <nuxt-link to="/">
                  <img src="~/assets/icons/arrow-right-solid.svg" alt="back" class="w-4">
                </nuxt-link>
              </div>
              <div class="flex justify-center items-center">
                <img src="~/assets/img/halyab_icon.png" alt="icon" class="w-10" style="border-radius: 50%;">
              </div>
              <div class="flex items-center justify-center py-8">
                <h1 class="font-bold text-size-20">
                  فرم ورود
                </h1>
              </div>
              <div class="mb-4">
              <label class="flex text-gray-700 text-sm font-bold mb-2" for="row">
                  شماره همراه
              </label>
              <input v-model="login.username" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="text" placeholder="شماره همراه" required/>
              </div>
              <div class="mb-4">
              <label class="flex text-gray-700 text-sm font-bold mb-2" for="row">
                  رمز عبور
              </label>
              <input v-model="login.password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="pass" type="password" placeholder="رمز عبور" required/>
              </div>
              <div class="flex items-center justify-center">
              <button @click="authLogin" type="button" class="  text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline" style="box-shadow: 0 4px 14px 0 rgba(0,118,255,0.39);backgroundColor:#132a3e">
                  ورود
              </button>
              </div>
              <div class="block items-center justify-center pt-8">
                <nuxt-link to="/auth/register" class="text-gray-600">
                  تا حالا ثبت نام نکردی ؟
                </nuxt-link>
              </div>
                <div class="block items-center justify-center p-4">
                <nuxt-link to="/auth/forgot" class="text-gray-600">
                    رمزت رو فراموشی کردی ؟
                </nuxt-link>
              </div>
            </div>
            <div class="hidden text-bold items-center justify-center md:flex md:flex-col md:max-w-md" style="box-shadow: 0 4px 14px 0 rgba(0,118,255,0.39); color:white; border-top-left-radius: inherit; border-bottom-left-radius: inherit;backgroundColor:#132a3e">
              <img class="p-4" src="~/assets/img/register.svg" style="width: 50%;" alt="auth-logo">
              <div class="block items-center justify-center pb-2">
                <h1 class="font-bold" style="font-size: xx-large;">
                    ورود به حل یاب
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
  auth: false,
  data() {
    return {
      login: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    showError(str) {
         this.$toast.error(str)
    },
    authLogin() {
      const errors = []
        this.login.username ? '' : errors.push('شماره خود را وارد کنید');
        this.login.password ? '' : errors.push('رمز عبور خود را وارد کنید');
         if (errors.length >= 1) {
               errors.map(x => this.showError(x));
               return ''
         }
      this.$auth.loginWith('local', {data: this.login})
      .then((res) => {
        this.$auth.setToken('local', 'Bearer ' + res.data.access)
        this.$auth.setRefreshToken('local', res.data.refresh)
        this.$router.push("/user/dashboard")
      })
      .catch((e) => {
        this.showError("ورود با موفقـیت انجام نشد")
      })
    }
  },
  components: {
  },
  layout: "landing"
}
</script>


<style>

.login {
  margin: 0 auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  direction: rtl;
}

</style>>