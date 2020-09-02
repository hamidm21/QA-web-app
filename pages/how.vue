<template>
  <div class="home mt-16">
    <div class="flex flex-col w-full justify-center items-center">
      <div class="flex justify-center items-center w-full mt-2">
        <p class="text-xl font-bold">چگونه کار میکند ؟</p>
        <img class src="~/assets/icons/full-logo.png" style="width: 80px; height: 50px;" />
      </div>
      <p class="text-center mt-2">.حل یاب در حل سوالات و انجام پروژه ها به شما کمک می کند</p>
    </div>

    <div class="div1 mt-4">
      <button
        class="bg-transparent btn1 hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border-b-2 border-black shadow"
        @click="showOstad()"
        @mouseenter="showOstad()"
      >استاد</button>
      <button
        class="bg-transparent hover:bg-red text-red font-semibold hover:text-white py-2 px-4 border-b-2 border-red shadow"
        @click="showDaneshjoo()"
        @mouseenter="showDaneshjoo()"
      >دانش آموز</button>
    </div>
    <div class="flex justify-center" v-if="shows === true">
      <div class="w-3/4 flex flex-col mt-5">
        <h1 class="div1 bg-transparent bg-red font-semibold text-white  py-2 px-4 border-b-2 border-red shadow">راهنمای دانش آموزان</h1>
        <div class="flex flex-col sm:flex-row justify-between items-center w-full my-10">
          <div class="flex sm:w-1/2 justify-center items-center">
            <img src="../assets/img/ostad/1.jpg" />
          </div>
          <div class="sm:w-1/2">
            <h4
              style="direction: rtl;"
              class="flex justify-center mt-5 items-center text-center text-xl"
              href="#"
            >
              <span
                class="flex text-white text-sm font-bold justify-center items-center mx-1 bg-red w-6 h-6 rounded-full"
              >1</span>در حل یاب ثبت
              نام کنید .
            </h4>
            <p style="direction: rtl;" class="text-center mt-2">
              اگر قبلا ثبت نام کرده اید به اکانت خود وارد شوید
              <br />در این مرحله با وارد کردن شماره تلفن همراه خود و رمز عبور ،
              <br />در حل یاب ثبت نام کنید
            </p>
          </div>
        </div>

        <div class="flex flex-col-reverse sm:flex-row justify-between items-center w-full my-10">
          <div class="sm:w-1/2">
            <h6
              style="direction: rtl;"
              class="flex justify-center mt-5 items-center text-center text-xl"
              href="#"
            >
              <span
                class="flex text-white text-sm font-bold justify-center items-center mx-1 bg-red w-6 h-6 rounded-full"
              >2</span>پروژه خود را
              قرار دهید .
            </h6>
            <p style="direction: rtl;" class="text-center mt-2 w-75 ml-auto mr-auto">
              عنوان و جزئیات پروژه ی خود را در فیلد های مشخص شده قرار دهید
              <br />در این مرحله ، نوع پروژه ، عنوان پروژه ، توضیحات مربوط به پروژه قیمت
              پیشنهادی ، پیوست کردن فایل های مربوطه ، و اطلاعات تکمیلی (مقطع
              تحصیلی ، رشته تحصیلی ، عنوان درس و تاریخ پایان پروژه) را در فیلدهای
              مشخص شده وارد کنید و پروژه ی خود را ثبت کنید
              <br />همچنین پس از ثبت پروژه می توانید پروژه ی خود را ویرایش کنید یا آن را
              لغو کنید
            </p>
          </div>
          <div class="flex sm:w-1/2 justify-center">
            <img src="../assets/img/ostad/2.jpg" />
          </div>
        </div>

        <div class="flex flex-col sm:flex-row justify-between items-center w-full my-10">
          <div class="flex sm:w-1/2 justify-center">
            <img src="../assets/img/ostad/3.jpg" />
          </div>
          <div class="sm:w-1/2">
            <h6
              style="direction: rtl;"
              class="flex justify-center mt-5 items-center text-center text-xl"
              href="#"
            >
              <span
                class="flex text-white text-sm font-bold justify-center items-center mx-1 bg-red w-6 h-6 rounded-full"
              >3</span>بهترین
              پیشنهاد ممکن را انتخاب کنید .
            </h6>
            <p style="direction: rtl;" class="text-center mt-2 w-75 ml-auto mr-auto">
              پس از انتخاب پیشنهاد مورد نظر خود ، می توانید هزینه ی آن را از طریق
              کیف پول حل یاب یا درگاه اینترنتی پرداخت کنید
              <br />در این مرحله با وارد کردن شماره تلفن همراه خود و رمز عبور ،
              <br />پس از پرداخت هزینه ی انجام پروژه ، کارشناسی که برای انجام پروژه
              پیشنهاد داده است ، در زمان معین شده ، پروژه ی شما را انجام می دهد و
              پاسخ خود را در قسمت پاسخ ها دریافت می کنید
            </p>
          </div>
        </div>

        <div class="flex flex-col-reverse sm:flex-row justify-between items-center w-full my-10">
          <div class="sm:w-1/2">
            <h6
              style="direction: rtl;"
              class="flex justify-center mt-5 items-center text-center text-xl"
              href="#"
            >
              <span
                class="flex text-white text-sm font-bold justify-center items-center mx-1 bg-red w-6 h-6 rounded-full"
              >4</span>پروژه ی
              خود را پایان دهید.
            </h6>
            <p style="direction: rtl;" class="text-center w-75 mt-2 ml-auto mr-auto">
              پروژه ی خود را پس از دریافت جواب پایان دهید
              <br />در این مرحله ، پس از اینکه حل سوال یا پروژه ی خود را از استادی که
              پیشنهاد او را قبول کرده اید ، دریافت کردید ، بر روی دکمه ی تایید
              حل پرسش کلیک کردید ، می توانید به پاسخ دریافتی خود امتیاز دهید و
              پاسخ دریافتی را تایید کرده و به پروژه ی خود پایان دهید
              <br />همچنین پس از ثبت پروژه می توانید پروژه ی خود را ویرایش کنید یا آن
              را لغو کنید
            </p>
          </div>
          <div class="flex sm:w-1/2 justify-center">
            <img src="../assets/img/ostad/4.jpg" />
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center" v-if="shows === false">
      <div class="w-3/4 flex flex-col mt-5">
        <h1 class="div1 bg-transparent btn1 bg-black text-white font-semibold  py-2 px-4 border-b-2 border-black shadow">راهنمای اساتید </h1>
        <div class="flex flex-col sm:flex-row justify-between items-center w-full my-10">
          <div class="flex sm:w-1/2 justify-center items-center">
            <img src="../assets/img/daneshjoo/1.jpg" />
          </div>
          <div class="sm:w-1/2">
            <h4
              style="direction: rtl;"
              class="flex justify-center mt-5 items-center text-center text-xl"
              href="#"
            >
              <span
                class="flex text-white text-sm font-bold justify-center items-center mx-1 bg-red w-6 h-6 rounded-full"
              >1</span>
              به حل یاب ملحق شوید
            </h4>
            <p style="direction: rtl;" class="text-center mt-2">
              .اگر قبلا به عضویت درآمده اید ، به حساب کاربری خود وارد شوید
              <br />در این مرحله با وارد کردن نام ، مدرک و ایمیل و پیوست کردن مدرک خود ، برای به عضویت حل یاب درآمدن بررسی می شوید
            </p>
          </div>
        </div>

        <div class="flex flex-col-reverse sm:flex-row justify-between items-center w-full my-10">
          <div class="sm:w-1/2">
            <h6
              style="direction: rtl;"
              class="flex justify-center mt-5 items-center text-center text-xl"
              href="#"
            >
              <span
                class="flex text-white text-sm font-bold justify-center items-center mx-1 bg-red w-6 h-6 rounded-full"
              >2</span>
             پروژه ای برای انجام انتخاب کنید
            </h6>
            <p style="direction: rtl;" class="text-center mt-2 w-75 ml-auto mr-auto">
              شما می توانید با مراجعه به صفحه ی پروژه های دیگران ، لیست پروژه های موجود را ببینید
              <br />در این مرحله ، می توانید پروژه هایی که در انجام آن ها مسلط هستید را از لیست پروژه های موجود انتخاب کنید و پیشنهاد خود برای انجام آن ها را ارسال کنید
            </p>
          </div>
          <div class="flex sm:w-1/2 justify-center">
            <img src="../assets/img/daneshjoo/2.jpg" />
          </div>
        </div>

        <div class="flex flex-col sm:flex-row justify-between items-center w-full my-10">
          <div class="flex sm:w-1/2 justify-center">
            <img src="../assets/img/daneshjoo/3.jpg" />
          </div>
          <div class="sm:w-1/2">
            <h6
              style="direction: rtl;"
              class="flex justify-center mt-5 items-center text-center text-xl"
              href="#"
            >
              <span
                class="flex text-white text-sm font-bold justify-center items-center mx-1 bg-red w-6 h-6 rounded-full"
              >3</span>پیشنهاد خود را ارسال کنید.
            </h6>
            <p style="direction: rtl;" class="text-center mt-2 w-75 ml-auto mr-auto">
              پیشنهادتان برای انجام پروژه ای که مد نظرتان است را ارسال کنید و منتظر پذیرش پیشنهاد از سوی طراح سوال یا پروژه بمانید
              <br />در این مرحله ، قیمت پیشنهادی ، تاریخ انجام پروژه یا پایان پرسش ، و در صورت لزوم ، توضیحات مربوط به پیشنهاد خود را در فیلد های مورد نظر وارد کنید
            </p>
          </div>
        </div>

        <div class="flex flex-col-reverse sm:flex-row justify-between items-center w-full my-10">
          <div class="sm:w-1/2">
            <h6
              style="direction: rtl;"
              class="flex justify-center mt-5 items-center text-center text-xl"
              href="#"
            >
              <span
                class="flex text-white text-sm font-bold justify-center items-center mx-1 bg-red w-6 h-6 rounded-full"
              >4</span>وظایف خود را مشاهده کنید .
            </h6>
            <p style="direction: rtl;" class="text-center w-75 mt-2 ml-auto mr-auto">
              پس از پذیرش پیشنهادتان ، پروژه ای که می بایست انجام دهید در قسمت وظایف من قرار می گیرد
              <br />در این مرحله ، پس از رفتن به قسمت وظایف من ، می بایست بر روی پروژه ای که می بایست انجام دهید کلیک کرد و صفحه ی پروژه ی مد نظر برای شما باز خواهد شد
            </p>
          </div>
          <div class="flex sm:w-1/2 justify-center">
            <img src="../assets/img/daneshjoo/4.jpg" />
          </div>
        </div>
        <div class="flex flex-col sm:flex-row justify-between items-center w-full my-10">
          <div class="flex sm:w-1/2 justify-center items-center">
            <img src="../assets/img/daneshjoo/5.jpg" />
          </div>
          <div class="sm:w-1/2">
            <h4
              style="direction: rtl;"
              class="flex justify-center mt-5 items-center text-center text-xl"
              href="#"
            >
              <span
                class="flex text-white text-sm font-bold justify-center items-center mx-1 bg-red w-6 h-6 rounded-full"
              >5</span>پاسخ پروژه را ارسال کنید .
            </h4>
            <p style="direction: rtl;" class="text-center mt-2">
              در قسمت پاسخ ها با طراح سوال یا پروژه ارتباط برقرار کنید و انجام پروژه یا جواب سوال را در این قسمت وارد کنید.
              <br />در این مرحله ، با رفتن به قسمت پاسخ ها می توانید با طراح سوال یا پروژه ارتباط برقرار کنید و جواب سوال را به صورت دلخواه خود (شامل هرگونه فرمت فایل) در این قسمت قرار دهید
              <br />پس از اطمینان از دریافت جواب از سوی طراح پروژه ، با کلیک بر روی دکمه ی پایان پروژه ، به پروژه خاتمه می دهید
            </p>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <p
      class="flex justify-center items-center text-center sm:text-xl mt-10 mb-5"
    >.هم اکنون ، پروژه ی خود را در حل یاب قرار دهید</p>
    <div class="text-center">
      <nuxt-link to="/auth/register">
        <button
          type="button"
          class="bg-green rounded-md p-2 shadow-md mb-4 text-white hover:shadow-xl"
        >+ ثبت پروژه</button>
      </nuxt-link>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "~/components/landing/footer.vue";

export default {
  components: {
    Footer,
  },
  auth: false,
  layout: "landing",
  data() {
    return {
      shows: true,
      bg1: "backgroundColor :red",
      bg2: "backgroundColor :black",
    };
  },
  methods: {
    showDaneshjoo() {
      this.shows = true;
      this.bg1 = "red";
      this.bg2 = "black";
    },
    showOstad() {
      this.shows = false;
      this.bg1 = "black";
      this.bg2 = "red";
    },
  },
};
</script>
<style >
.div1 {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>