<template>
  <div class="activation w-full sm:w-auto">
        <div class="sm:w-auto w-full">
        <form @keydown.enter="authActivation" class="bg-white shadow-lg rounded-lg flex w-max-md justify-center m-4 border">
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
                  کد فعالسازی
                </h1>
              </div>
                <small>
                    کد فعالسازی به شماره شما ارسال شده است
                </small>
              <div class="my-4">
              <label class="flex text-gray-700 text-sm font-bold mb-2" for="row">
                  کد دریافت شده 
              </label>
              <input v-model="activation.activation_code" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="activation" type="number" placeholder="کد دریافت شده" required/>
              </div>
              <div class="flex items-center justify-center">
              <button @click="authActivation" type="button" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline" style="box-shadow: 0 4px 14px 0 rgba(0,118,255,0.39);">
                  ارسال
              </button>
              </div>
              <div class="block items-center justify-center py-10">
                <div v-if="!$store.state.activation.resend">
                    <span class="text-gray-600">
                        ارسال مجدد کد در <span> {{$store.state.activation.time}} </span> دقیقه
                    </span>
                </div>
                <div v-else>
                    <button @click="authResend" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline" style="box-shadow: 0 4px 14px 0 rgba(0,118,255,0.39);">
                        ارسال مجدد پیامک
                    </button>
                </div>
              </div>
            </div>
            <div class="hidden bg-blue-600 text-bold items-center justify-center md:flex md:flex-col md:max-w-md" style="box-shadow: 0 4px 14px 0 rgba(0,118,255,0.39); color:white; border-top-left-radius: inherit; border-bottom-left-radius: inherit;">
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
  mounted: function() {
      this.startTimer(5)
  },
  data: function() {
    return {
        activation: {
            cell_phone: '',
            activation_code: '',
        },
    }
  },
  methods: {
    showError(str) {
         this.$toast.error(str)
    },
    authActivation() {
      const errors = []
        this.activation.activation_code ? '' : errors.push('کد فعالسازی خود را وارد کنید');
         if (errors.length >= 1) {
               errors.map(x => this.showError(x));
               return ''
         }
        this.$axios.post("/api/auth/activate/", {
            cell_phone: this.$route.params.id,
            activation_code: this.activation.activation_code
        })
        .then((res) => {
            this.$auth.setUserToken(res.access) 
            .then((res) => {
                this.$router.push("/user/dashboard")
            });
        })
        .catch((e) => {
            if (e.response.data.wrong_code) {
                this.$toast.error("کد وارد شده اشتباه است لطفا مجددا تلاش کنید")
            } else {
                this.$toast.error("مشکلی در فرایند فعالسازی پیش آمده")
            }
        })
    },
    authResend() {
        this.$axios.post("/api/auth/activate/resend/", {
            cell_phone: this.$route.params.id,
        })
        .then((res) => {
            this.$store.commit("toggleResend");
            this.startTimer(2 * 60);
            this.$toast.success("پیامک جدیدی برای شماره شما ارسال شد.");
        })
        .catch((e) => {
            this.$toast.error("مشکلی در ارسال پیامک جدید ایجاد شد.")
        })
    },
    startTimer(duration) {
        let timer = duration, minutes, seconds;
        const store = this.$store;
        const interval = setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            if (process.client) {
                store.commit("setTime", minutes + ":" + seconds);
            }

            if (--timer < 0) {
                clearInterval(interval)
                store.commit("toggleResend");
            }
        }, 1000);
    },
  },
  components: {
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