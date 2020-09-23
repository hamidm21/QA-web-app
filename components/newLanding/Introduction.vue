<template>
  <div class="prof-sec bg-white mt-5 pt-20 pb-20" style="direction:ltr;">
    <div class="container flex-col">
      <div class="flex flex-row justify-center items-center" style="height: 60%;">
        <div class="hidden pt-4 pl-4 sm:flex justify-start items-center" style="marginRight:5%">
          <img style="width: 100%;" src="../../assets/halyab/AI-09.jpg" alt="تصویر معرفی" />
        </div>
        <div class="sm:w-2/3" style="marginTop:50px">
          <h6
            style="direction: rtl;  wordSpacing: 2px;"
            class="flex justify-center text-2xl mt-3 mb-5 font-bold items-center text-center text-xl"
            href="#"
          >کیــفیت بــالا ، مدیریــت زمــان ، هزیــنه کمتــر!!</h6>
          <p style="direction: rtl;" class="text-center mt- w-75 pl-2 pr-2">
            برای درخواست معلم خصوصی آنلاین و پروژه های درسی و دانشجویی
            <br />می توانید در پلتفرم حل یاب ، مدرسین تایید شده را پیدا کرده
            <br />و با تضمین کیفیت خدمات با اطمینان پروژه خود را ثبت کنید
          </p>
          <div class="mt-5 text-center statusdiv">
            <nuxt-link to="/auth/register">
              <button
                type="button"
                class="bg-black shadow px-4 py-3 text-xl hover:font-bold text-white rounded focus:outline-none focus:shadow-outline"
              >ثبـت نـام در حل یـاب</button>
            </nuxt-link>
            <nuxt-link to="/auth/login">
              <button
                style="color:#00a0bd"
                type="button"
                class="mt-3 px-3 pt-2 text-xl font-bold rounded focus:outline-none focus:shadow-outline"
              >ورود به حساب کاربری</button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.prof-sec {
  min-height: 100vh;
  width: 100vw;
  max-width: 100%;
}
.statusdiv {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>