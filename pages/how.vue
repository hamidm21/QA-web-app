<template>
  <div class="home mt-16">
    <div class="flex flex-col w-full justify-center items-center">
      <div class="flex justify-center items-center w-full mt-2">
        <p class="text-xl font-bold">چگونه کار میکند ؟</p>
        <img
          class
          src="~/assets/icons/full-logo.png"
          style="width: 80px; height: 50px"
        />
      </div>
      <p class="text-center mt-2">
        .حل یاب در حل سوالات و انجام پروژه ها به شما کمک می کند
      </p>
    </div>

    <div class="div1  mt-4 mb-5  w-1/2  ml-auto w-full">
      <hr
        class="border-b-1 border-gray-200 mt-auto mb-auto hidden sm:flex w-32"
      />

      <div class=" border-2 border-gray-200 p-2  w-auto rounded">
        <button
          class=" bg-blue-900 py-2 px-2 mx-auto sm:mx-5   hover:text-gray-400 rounded  text-white font-semibold   border-b-2  border-blue-900"
          @click="showDaneshjoo()"
          @mouseenter="showDaneshjoo()"
        >
          دانش آموز
        </button>
        <button
          class=" bg-red  mx-auto  hover:text-gray-400 rounded  sm:mx-5 p-1  py-2 text-white hover:rounded font-semibold hover:text-white  border-2  border-red"
          @click="showVideo()"
          @mouseenter="showVideo()"
        >
          آموزش ویدیویی
        </button>
        <button
          class="bg-blue-900 p-2 hover:text-gray-400 rounded mx-auto sm:mx-5  font-semibold text-white  border-b-2  border-blue-900"
          @click="showOstad()"
          @mouseenter="showOstad()"
        >
          استـاد
        </button>
      </div>
      <hr
        class="border-b-1 border-gray-200 mt-auto mb-auto hidden sm:flex w-32"
      />
    </div>
    <div class="flex justify-center" v-if="shows === 3">
      <div class="w-3/4 flex flex-col mt-5">
        <h1
          class="div1 bg-transparent bg-blue-900 font-semibold text-white py-2 px-4 border-b-2 border-blue-900"
        >
          راهنمای دانش آموزان
        </h1>
        <div
          class="flex flex-col sm:flex-row justify-between items-center w-full my-10"
        >
          <div class="flex sm:w-1/2 justify-center items-center">
            <img src="../assets/img/ostad/1.jpg" />
          </div>
          <div class="sm:w-1/2">
            <!-- <h1></h1> -->
            <h4
              style="direction: rtl"
              class="flex justify-center mt-5 items-center text-center text-xl"
              href="#"
            >
              <span
                class="flex text-white text-sm font-bold justify-center items-center mx-1 bg-blue-900 w-6 h-6 rounded-full"
                >1</span
              >در حل یاب ثبت نام کنید .
            </h4>
            <p style="direction: rtl" class="text-center mt-2">
              اگر قبلا ثبت نام کرده اید به اکانت خود وارد شوید
              <br />در این مرحله با وارد کردن شماره تلفن همراه خود و رمز عبور ،
              <br />در حل یاب ثبت نام کنید
            </p>
          </div>
        </div>

        <div
          class="flex flex-col-reverse sm:flex-row justify-between items-center w-full my-10"
        >
          <div class="sm:w-1/2">
            <h6
              style="direction: rtl"
              class="flex justify-center mt-5 items-center text-center text-xl"
              href="#"
            >
              <span
                class="flex text-white text-sm font-bold justify-center items-center mx-1 bg-blue-900 w-6 h-6 rounded-full"
                >2</span
              >پروژه خود را قرار دهید .
            </h6>
            <p
              style="direction: rtl"
              class="text-center mt-2 w-75 ml-auto mr-auto"
            >
              عنوان و جزئیات پروژه ی خود را در فیلد های مشخص شده قرار دهید
              <br />در این مرحله ، نوع پروژه ، عنوان پروژه ، توضیحات مربوط به
              پروژه قیمت پیشنهادی ، پیوست کردن فایل های مربوطه ، و اطلاعات
              تکمیلی (مقطع تحصیلی ، رشته تحصیلی ، عنوان درس و تاریخ پایان پروژه)
              را در فیلدهای مشخص شده وارد کنید و پروژه ی خود را ثبت کنید
              <br />همچنین پس از ثبت پروژه می توانید پروژه ی خود را ویرایش کنید
              یا آن را لغو کنید
            </p>
          </div>
          <div class="flex sm:w-1/2 justify-center items-center">
            <img src="../assets/img/ostad/2.jpg" />
          </div>
        </div>

        <div
          class="flex flex-col sm:flex-row justify-between items-center w-full my-10"
        >
          <div class="flex sm:w-1/2 justify-center items-center">
            <img src="../assets/img/ostad/3.jpg" />
          </div>
          <div class="sm:w-1/2">
            <h6
              style="direction: rtl"
              class="flex justify-center mt-5 items-center text-center text-xl"
              href="#"
            >
              <span
                class="flex text-white text-sm font-bold justify-center items-center mx-1 bg-blue-900 w-6 h-6 rounded-full"
                >3</span
              >بهترین پیشنهاد ممکن را انتخاب کنید .
            </h6>
            <p
              style="direction: rtl"
              class="text-center mt-2 w-75 ml-auto mr-auto"
            >
              پس از انتخاب پیشنهاد مورد نظر خود ، می توانید هزینه ی آن را از
              طریق کیف پول حل یاب یا درگاه اینترنتی پرداخت کنید
              <br />در این مرحله با وارد کردن شماره تلفن همراه خود و رمز عبور ،
              <br />پس از پرداخت هزینه ی انجام پروژه ، کارشناسی که برای انجام
              پروژه پیشنهاد داده است ، در زمان معین شده ، پروژه ی شما را انجام
              می دهد و پاسخ خود را در قسمت پاسخ ها دریافت می کنید
            </p>
          </div>
        </div>

        <div
          class="flex flex-col-reverse sm:flex-row justify-between items-center w-full my-10"
        >
          <div class="sm:w-1/2">
            <h6
              style="direction: rtl"
              class="flex justify-center mt-5 items-center text-center text-xl"
              href="#"
            >
              <span
                class="flex text-white text-sm font-bold justify-center items-center mx-1 bg-blue-900 w-6 h-6 rounded-full"
                >4</span
              >پروژه ی خود را پایان دهید.
            </h6>
            <p
              style="direction: rtl"
              class="text-center w-75 mt-2 ml-auto mr-auto"
            >
              پروژه ی خود را پس از دریافت جواب پایان دهید
              <br />در این مرحله ، پس از اینکه حل سوال یا پروژه ی خود را از
              استادی که پیشنهاد او را قبول کرده اید ، دریافت کردید ، بر روی دکمه
              ی تایید حل پرسش کلیک کردید ، می توانید به پاسخ دریافتی خود امتیاز
              دهید و پاسخ دریافتی را تایید کرده و به پروژه ی خود پایان دهید
              <br />همچنین پس از ثبت پروژه می توانید پروژه ی خود را ویرایش کنید
              یا آن را لغو کنید
            </p>
          </div>
          <div class="flex sm:w-1/2 justify-center items-center">
            <img src="../assets/img/ostad/4.jpg" />
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center" v-if="shows === 2">
      <div class="w-3/4 flex flex-col mt-5">
        <h1
          class="div1 bg-transparent bg-blue-900 font-semibold text-white py-2 px-4 border-b-2 border-blue-900"
        >
          راهنمای استاد
        </h1>
        <div
          class="flex flex-col sm:flex-row justify-between items-center w-full my-10"
        >
          <div class="flex sm:w-1/2 justify-center items-center">
            <img src="../assets/img/daneshjoo/1.jpg" />
          </div>
          <div class="sm:w-1/2">
            <h4
              style="direction: rtl"
              class="flex justify-center mt-5 items-center text-center text-xl"
              href="#"
            >
              <span
                class="flex text-white text-sm font-bold justify-center items-center mx-1 bg-blue-900 w-6 h-6 rounded-full"
                >1</span
              >
              به حل یاب ملحق شوید
            </h4>
            <p style="direction: rtl" class="text-center mt-2">
              .اگر قبلا به عضویت درآمده اید ، به حساب کاربری خود وارد شوید
              <br />در این مرحله با وارد کردن نام ، مدرک و ایمیل و پیوست کردن
              مدرک خود ، برای به عضویت حل یاب درآمدن بررسی می شوید
            </p>
          </div>
        </div>

        <div
          class="flex flex-col-reverse sm:flex-row justify-between items-center w-full my-10"
        >
          <div class="sm:w-1/2">
            <h6
              style="direction: rtl"
              class="flex justify-center mt-5 items-center text-center text-xl"
              href="#"
            >
              <span
                class="flex text-white text-sm font-bold justify-center items-center mx-1 bg-blue-900 w-6 h-6 rounded-full"
                >2</span
              >
              پروژه ای برای انجام انتخاب کنید
            </h6>
            <p
              style="direction: rtl"
              class="text-center mt-2 w-75 ml-auto mr-auto"
            >
              شما می توانید با مراجعه به صفحه ی پروژه های دیگران ، لیست پروژه
              های موجود را ببینید
              <br />در این مرحله ، می توانید پروژه هایی که در انجام آن ها مسلط
              هستید را از لیست پروژه های موجود انتخاب کنید و پیشنهاد خود برای
              انجام آن ها را ارسال کنید
            </p>
          </div>
          <div class="flex sm:w-1/2 justify-center items-center">
            <img src="../assets/img/daneshjoo/2.jpg" />
          </div>
        </div>

        <div
          class="flex flex-col sm:flex-row justify-between items-center w-full my-10"
        >
          <div class="flex sm:w-1/2 justify-center items-center">
            <img src="../assets/img/daneshjoo/3.jpg" />
          </div>
          <div class="sm:w-1/2">
            <h6
              style="direction: rtl"
              class="flex justify-center mt-5 items-center text-center text-xl"
              href="#"
            >
              <span
                class="flex text-white text-sm font-bold justify-center items-center mx-1 bg-blue-900 w-6 h-6 rounded-full"
                >3</span
              >پیشنهاد خود را ارسال کنید.
            </h6>
            <p
              style="direction: rtl"
              class="text-center mt-2 w-75 ml-auto mr-auto"
            >
              پیشنهادتان برای انجام پروژه ای که مد نظرتان است را ارسال کنید و
              منتظر پذیرش پیشنهاد از سوی طراح سوال یا پروژه بمانید
              <br />در این مرحله ، قیمت پیشنهادی ، تاریخ انجام پروژه یا پایان
              پرسش ، و در صورت لزوم ، توضیحات مربوط به پیشنهاد خود را در فیلد
              های مورد نظر وارد کنید
            </p>
          </div>
        </div>

        <div
          class="flex flex-col-reverse sm:flex-row justify-between items-center w-full my-10"
        >
          <div class="sm:w-1/2">
            <h6
              style="direction: rtl"
              class="flex justify-center mt-5 items-center text-center text-xl"
              href="#"
            >
              <span
                class="flex text-white text-sm font-bold justify-center items-center mx-1 bg-blue-900 w-6 h-6 rounded-full"
                >4</span
              >وظایف خود را مشاهده کنید .
            </h6>
            <p
              style="direction: rtl"
              class="text-center w-75 mt-2 ml-auto mr-auto"
            >
              پس از پذیرش پیشنهادتان ، پروژه ای که می بایست انجام دهید در قسمت
              وظایف من قرار می گیرد
              <br />در این مرحله ، پس از رفتن به قسمت وظایف من ، می بایست بر روی
              پروژه ای که می بایست انجام دهید کلیک کرد و صفحه ی پروژه ی مد نظر
              برای شما باز خواهد شد
            </p>
          </div>
          <div class="flex sm:w-1/2 justify-center items-center">
            <img src="../assets/img/daneshjoo/4.jpg" />
          </div>
        </div>
        <div
          class="flex flex-col sm:flex-row justify-between items-center w-full my-10"
        >
          <div class="flex sm:w-1/2 justify-center items-center">
            <img src="../assets/img/daneshjoo/5.jpg" />
          </div>
          <div class="sm:w-1/2">
            <h4
              style="direction: rtl"
              class="flex justify-center mt-5 items-center text-center text-xl"
              href="#"
            >
              <span
                class="flex text-white text-sm font-bold justify-center items-center mx-1 bg-blue-900 w-6 h-6 rounded-full"
                >5</span
              >پاسخ پروژه را ارسال کنید .
            </h4>
            <p style="direction: rtl" class="text-center mt-2">
              در قسمت پاسخ ها با طراح سوال یا پروژه ارتباط برقرار کنید و انجام
              پروژه یا جواب سوال را در این قسمت وارد کنید.
              <br />در این مرحله ، با رفتن به قسمت پاسخ ها می توانید با طراح
              سوال یا پروژه ارتباط برقرار کنید و جواب سوال را به صورت دلخواه خود
              (شامل هرگونه فرمت فایل) در این قسمت قرار دهید <br />پس از اطمینان
              از دریافت جواب از سوی طراح پروژه ، با کلیک بر روی دکمه ی پایان
              پروژه ، به پروژه خاتمه می دهید
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-center w-full" v-if="shows === 1">
      <div
        class="w-full text-center flex flex-row mt-5 justify-center ml-auto mr-auto "
      >
        <hr
          class="border-b-1 border-gray-500 mt-auto mb-auto hidden sm:flex w-32"
        />
        <h1 class="font-bold  text-lg mx-2">ویدیو آموزش کار با حل یاب</h1>
        <hr
          class="border-b-1 border-gray-500 mt-auto mb-auto hidden sm:flex w-32"
        />
      </div>
      <div
        class="flex py-5 px-5 sm:px-20 flex-col sm:flex-row justify-center   w-full mt-5  h-auto "
      >
        <div
          class="w-full  sm:mx-3 border-2 border-balck  sm:w-2/4  h-64  bg-blue-900 sm:mt-auto sm:mb-auto my-5"
        >
          <div class="h_iframe-aparat_embed_frame rounded-lg	">
            <span style="display: block"></span>
            <iframe
              src="https://www.aparat.com/video/video/embed/videohash/9Fy8p/vt/frame"
              class="rounded	w-full h-64"
              allowFullScreen="true"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
            >
            </iframe>
          </div>
        </div>
        <div
          class="w-full sm:mx-3  sm:w-2/4  h-64  bg-blue-900 sm:mt-auto sm:mb-auto my-5"
        >
          <div class="h_iframe-aparat_embed_frame rounded-lg	">
            <span style="display: block"></span>
            <iframe
              src="https://www.aparat.com/video/video/embed/videohash/1WVJR/vt/frame"
              class="rounded	w-full h-64"
              allowFullScreen="true"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
            >
            </iframe>
          </div>
        </div>
        <div
          class="w-full sm:mx-3  sm:w-2/4  h-64 bg-blue-900 sm:mt-auto sm:mb-auto my-5"
        >
          <div class="h_iframe-aparat_embed_frame rounded-lg	">
            <span style="display: block"></span>
            <iframe
              class="rounded	w-full h-64"
              src="https://www.aparat.com/video/video/embed/videohash/UBX6K/vt/frame"
              allowFullScreen="true"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
            >
            </iframe>
          </div>
        </div>
      </div>
      <div
        class="flex py-5 px-5 sm:px-20 flex-col sm:flex-row justify-center   w-full  mb-10 h-auto "
      >
        <div
          class="w-full  sm:mx-3 border-2 border-balck  sm:w-2/6  h-64  bg-blue-900 sm:mt-auto sm:mb-auto my-5"
        >
          <div class="h_iframe-aparat_embed_frame rounded-lg	">
            <span style="display: block"></span>
            <iframe
              src="https://www.aparat.com/video/video/embed/videohash/QxHXJ/vt/frame"
              class="rounded	w-full h-64"
              allowFullScreen="true"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
            >
            </iframe>
          </div>
        </div>
        <div
          class="w-full sm:mx-3  sm:w-2/6  h-64  bg-blue-900 sm:mt-auto sm:mb-auto my-5"
        >
          <div class="h_iframe-aparat_embed_frame rounded-lg	">
            <span style="display: block"></span>
            <iframe
              src="https://www.aparat.com/video/video/embed/videohash/PFm2k/vt/frame"
              class="rounded	w-full h-64"
              allowFullScreen="true"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
            >
            </iframe>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <p
      class="flex justify-center items-center text-center sm:text-xl mt-10 mb-5"
    >
      .هم اکنون ، پروژه ی خود را در حل یاب قرار دهید
    </p>
    <div class="text-center">
      <nuxt-link to="/auth/register">
        <button
          type="button"
          style="backgroundColor: #17c69b"
          class="rounded-md px-8 py-2 shadow-md mb-4 text-white hover:shadow-xl"
        >
          + ثبت پروژه
        </button>
      </nuxt-link>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "~/components/landing/footer.vue";

export default {
  components: {
    Footer
  },
  auth: false,
  layout: "landing",
  data() {
    return {
      shows: 1,
      bg1: "backgroundcolor :red",
      bg2: "backgroundcolor :black"
    };
  },
  methods: {
    showDaneshjoo() {
      this.shows = 3;
      this.bg1 = "red";
      this.bg2 = "black";
    },
    showOstad() {
      this.shows = 2;
      this.bg1 = "black";
      this.bg2 = "red";
    },
    showVideo() {
      this.shows = 1;
      this.bg1 = "black";
      this.bg2 = "red";
    }
  }
};
</script>
<style>
.div1 {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.div2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
