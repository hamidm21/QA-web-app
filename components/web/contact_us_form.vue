<template>
  <div class="app-sec bg-white">
    <div class="container flex-col">
      <form
        action=""
        class="form bg-gray-50 rounded shadow-2xl p-6 my-10 relative"
      >
        <h3 class="text-2xl mb-5 text-gray-700 font-semibold block items-center justify-center p-2">
          با ما در تماس باشید
        </h3>

        <h4 class="text-gray-600 block items-center justify-center p-2" >
            از طریق راه های ارتباطی زیر می توانید با ما در ارتباط باشید 
        </h4>
          <h5 class="text-gray-600 block items-center justify-center p-2" >
            آدرس : لرستان - خرم آباد - ناصرخسرو - خیابان دانش جنوبی -کوچه دوم فرهنگیان 
        </h5>
          <h5 class="text-gray-600 block items-center justify-center p-2" >
            پلاک : 686966184
        </h5>
         <h5 class="text-gray-600 block items-center justify-center p-2" >
            شماره تلفن  : 06633229723
        </h5>
        <h5 class="text-gray-600 block items-center justify-center p-2" >
            شماره همراه   : 09169824458
        </h5>
       
        <div class="container flex-col">
      <form
        action=""
        class="form bg-gray-50 rounded shadow-2xl p-6 my-10 relative"
      >

        <p class="text-2xl mb-5 text-gray-700 font-semibold block items-center justify-center p-2">
          در این قسمت میتوانید با مدیریت سایت در ارتباط باشید.
        </p>
        <div class="flex space-x-5 mt-3">
          <input
            v-model="name"
            type="text"
            name=""
            id=""
            placeholder="نام و نام خانوادگی"
            class="border p-2 w-1/2"
          />
          <input
            v-model="subject"
            type="txt"
            name=""
            id=""
            placeholder="موضوع پیام"
            class="border p-2 w-1/2"
          />
        </div>
        <input
          v-model="email"
          type="email"
          placeholder="ایمیل شما"
          class="border p-2 w-full mt-3"
        />
        <textarea
          v-model="desc"
          name=""
          id=""
          cols="10"
          rows="3"
          placeholder="متن پیام خود را اینجا وارد نمایید"
          class="border p-2 mt-3 w-full"
        ></textarea>
        <div
          @click="send()"
          style="backgroundColor:#132a3e"
          class="w-full mt-6 text-center text-white font-semibold p-3"
        >
          ارسال
        </div>
      </form>
    </div>
   
    <hr class="hidden sm:block sm:w-full" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      desc: "",
    };
  },
  methods: {
    showError(str) {
      this.$toast.error(str);
    },
    send() {
      const errors = [];
      let obj = {
        name: this.name ? this.name : errors.push("نام خود را وارد کنید"),
        subject: this.subject
          ? this.subject
          : errors.push("موضوع پیام را وارد کنید"),
        desc: this.desc ? this.desc : errors.push("توضیحات خود را وارد کنید"),
        email: this.email ? this.email : errors.push("ایمیل خود را وارد کنید"),
      };
      if (errors.length >= 1) {
        errors.map((x) => this.showError(x));
        return "";
      }
      this.$axios
        .post("/api/UnAuthcusmsgs/", {
          category: this.$props.catId,
          message: ` ** ارسال تماس با ما **\n
            نام : ${this.name}\n
            موضوع : ${this.subject}\n
            توضیحات : ${this.desc}\n
            ایمیل : ${this.email}\n
            `,
        })
        .then((res) => {
          this.$toast.success("پیام شما ارسال شد.");
          this.name = "";
          this.desc = "";
          this.subject = "";
          this.email = "";
        })
        .catch((e) => {
          this.$toast.error("پیام با موفقیت ارسال نشد.");
        });
    },
  },
  props: ["catId"],
};
</script>

<style>
.app-sec {
  direction: rtl;
  min-height: 100vh;
  width: 100vw;
  max-width: 100%;
}
</style>
