<template>
  <div class="activation w-full sm:w-auto">
        <div class="sm:w-auto w-full">
        <form @keydown.enter="forgotSend()" style="backgroundColor:#fff;" class=" shadow-lg rounded-lg flex w-max-md justify-center m-4 border">
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
                <h1 class="font-bold text-black text-size-20">
                  بازیابی رمز عبور
                </h1>
              </div>
                <small class="text-gray-700">
                    رمز جدید به شماره شما ارسال می شود
                </small>
              <div class="my-4">
              <label class="flex text-gray-700 text-sm font-bold mb-2" for="row">
                  شماره تماس 
              </label>
              <input v-model="forgot.cell_phone" class="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="activation" type="number" placeholder="شماره شما" required/>
              </div>
              <div class="flex items-center justify-center">
              <button @click="forgotSend()" type="button" class="text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline" style="backgroundColor:#132A3E;">
                  ارسال
              </button>
              </div>
            </div>
            <div class="hidden  text-bold items-center justify-center md:flex md:flex-col md:max-w-md" style="box-shadow: 0 4px 14px 0 rgba(0,118,255,0.39); color:white; border-top-left-radius: inherit; border-bottom-left-radius: inherit;backgroundColor:#132A3E;">
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
  data: function() {
    return {
        forgot: {
            cell_phone: '',
        },
    }
  },
  methods: {
    showError(str) {
         this.$toast.error(str)
    },
    forgotSend() {
      const errors = []
        this.forgot.cell_phone ? '' : errors.push('شماره همراه خود را وارد کنید');
         if (errors.length >= 1) {
               errors.map(x => this.showError(x));
               return ''
         }
        this.$axios.post("/api/auth/forgot/", {
            cell_phone: this.forgot.cell_phone,
        })
        .then((res) => {
            this.$toast.success("رمز به شماره شما ارسال شد.")
            this.$router.push("/auth/login")
        })
        .catch((e) => {
            showError("مشکلی پیش آمده")
        })
    },
  },
  layout: "landing"
}
</script>


<style>

.activation {
  margin: 0 auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  direction: rtl;
}

</style>>