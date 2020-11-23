<template>
  <div class="register w-full sm:w-auto">
    <div class="sm:w-auto  w-full sm:h-auto h-full">
      <form
        style="backgroundColor:#17C69B;"
        @keydown.enter="authRegister()"
        class=" shadow-lg rounded-lg flex w-max-md justify-center m-4 border"
      >
        <div class="px-8 pt-6 mb-4">
          <nuxt-link to="/">
            <img
              src="~/assets/icons/arrow-right-solid.svg"
              alt="back"
              class="w-2"
            />
          </nuxt-link>
          <div class="flex justify-center items-center">
            <img
              src="~/assets/img/halyab_icon.png"
              alt="icon"
              class="w-10"
            
              style="border-radius: 50%"
            />
          </div>
          <div class="flex items-center justify-center py-8">
            <h1 class="font-bold text-gray-200 text-size-20">فرم ثبت نام</h1>
          </div>
          <div class="mb-4">
            <label class="flex text-white text-sm font-bold mb-2" for="row">
              شماره همراه
            </label>
            <input
              v-model="register.cell_phone"
              class="shadow text-black appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="text"
              placeholder="شماره همراه"
              required
            />
          </div>
          <div class="mb-4">
            <label class="flex text-white text-sm font-bold mb-2" for="row">
              رمز عبور
            </label>
            <input
              v-model="register.password"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="pass"
              type="password"
              placeholder="رمز عبور"
              required
            />
          </div>
          <div class="mb-6">
            <label
              class="flex text-white text-sm font-bold mb-2"
              for="column"
            >
              تکرار رمز عبور
            </label>
            <input
              v-model="register.retyped"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="column"
              type="password"
              placeholder="تکرار رمز عبور"
              required
            />
          </div>
          <div class="flex items-center justify-center">
            <button
              @click="authRegister"
              type="button"
              class=" text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
              style="
                backgroundColor: #132a3e;
              "
            >
              ثبت نام
            </button>
          </div>
          <div class="block items-center justify-center p-2">
            <nuxt-link to="/auth/login" class="text-white">
              قبلا ثبت نام کردی ؟
            </nuxt-link>
          </div>
        </div>
        <div
          class="hidden text-bold items-center justify-center md:flex md:flex-col md:max-w-md"
          style="
            color: white;
            border-top-left-radius: inherit;
            border-bottom-left-radius: inherit;
            backgroundColor: #fff;
            width: 80vh;
          "
        >
          <div>
            <div class="h_iframe-aparat_embed_frame rounded-lg	">
              <span style="display: block"></span>
              <iframe
                class="rounded	"
                style="width: 100%; height: 40vh;marginTop:-19%;"
                src="https://www.aparat.com/video/video/embed/videohash/SdTBl/vt/frame"
                allowFullScreen="true"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
              >
              </iframe>
            </div>
            <div class="block items-center justify-center mt-5 text-black">
              <h1 style="" class="text-lg text-right px-2 font-bold text-black ">با حل یاب آسان،ارزان،سریع جوابتو بگیر!!!!</h1>
              <p class="mt-5 text-base text-right px-2" >
               حل یاب پلتفرمی آموزشی است برای یافتن مدرسین برتر و قابل اعتماد در هر ساعت از شبانه روز
               <br>
               بر اساس بودجه شما و با تضمین کیفیت بالای آموزشی به صورت مناقصه ای !!!
              </p>
            </div>
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
  components: {},
  data() {
    return {
      register: {
        cell_phone: "",
        password: "",
        retyped: "",
      },
    };
  },
  methods: {
    showError(str) {
      this.$toast.error(str);
    },
    authRegister() {
      const errors = [];
      this.register.cell_phone ? "" : errors.push("شماره خود را وارد کنید");
      this.register.password ? "" : errors.push("رمز عبور خود را وارد کنید");
      this.register.retyped
        ? ""
        : errors.push("تکرار رمز عبور خود را وارد کنید");
      if (errors.length >= 1) {
        errors.map((x) => this.showError(x));
        return "";
      }
      if (this.register.retyped === this.register.password) {
        this.$axios
          .post("/api/auth/register/", this.register)
          .then((res) => {
            this.$store.commit("setRegisterInfo", this.register);
            this.$router.push("/auth/activation/" + this.register.cell_phone);
          })
          .catch((e) => {
            if (e.response.data.already_registered) {
              this.$toast.error("حساب کاربری با این شماره قبلا ثبت شده است");
            } else {
              this.$toast.error("در فرایند ثبت نام مشکلی پیش آمده است");
            }
          });
      } else {
        this.$toast.error("گذرواژه وارد شده با تکرار آن مطابقت ندارد");
      }
    },
  },
  auth: false,
  layout: "landing",
};
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