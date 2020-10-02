<template>
  <div
    style="direction: rtl"
    class="leading-normal tracking-normal text-white gradient"
  >
    <!--Hero-->
    <div class="pt-20">
      <div
        class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center"
      >
        <!--Left Col-->
        <div
          class="flex flex-col w-full pr-8 pl-8 md:w-1/2 justify-center items-start text-center md:text-left"
        >
          <h1 class="my-4 text-2xl mr-10 text-black font-bold leading-tight">
            کیــفیت بــالا ، مدیریــت زمــان ، هزیــنه کمتــر!!
          </h1>
          <p class="leading-normal mr-10 text-center text-black mb-8">
            برای درخواســت معلم خصوصی آنــلاین و پروژه های درسی و دانشجویی
            <br />می توانید در پلتفرم حل یاب ، مدرسین تایید شده را پیدا کرده و
            با تضمین <br />کیفیت خدمات با اطمینان پروژه خود را ثبت کنید
          </p>
          <div class="mt-5 statusdiv ml-auto mr-auto">
            <nuxt-link to="/auth/register">
              <button
                type="button"
                class="bg-black shadow-lg rounded-lg hover:underline px-4 py-2 text-sm hover:font-bold text-white rounded focus:outline-none focus:shadow-outline"
              >
                ثبـت نـام در حل یـاب
              </button>
            </nuxt-link>
            <div class="sss">
              <nuxt-link to="/auth/login">
                <button
                  style="color: #00a0bd"
                  type="button"
                  class="mt-3 px-3 pt-2 font-bold rounded focus:outline-none focus:shadow-outline"
                >
                  ورود به حساب کاربری
                </button>
              </nuxt-link>
            </div>
          </div>
        </div>
        <!--Right Col-->
        <div class="w-full md:w-1/2 py-6 text-center">
          <img
            class="w-full md:w-5/5 z-50"
            src="../../assets/halyab/AI-09.jpg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.statusdiv {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}
.sss {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>