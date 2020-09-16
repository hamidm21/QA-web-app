<template>
  <div class="prof-sec bg-white">
    <div class="container flex-col">
      <div class="flex flex-row justify-center items-center" style="height: 60%;">
        <div class="hidden pt-2 sm:flex justify-start items-center " style="marginRight:3%">
          <img style="width: 95%;" src="../../assets/img/AI-09.jpg" alt="ارسال رزومه استاد" />
        </div>
       <div class="sm:w-2/3 " style="marginTop:-100px">
        <h6
          style="direction: rtl;"
          class="flex justify-center font-bold items-center text-center text-xl"
          href="#"
        >کیفیت بالا ، مدیریت زمان ، هزینه کمتر!!</h6>
        <p style="direction: rtl;" class="text-center mt- w-75 ml-auto mr-auto">
          برای درخواست معلم خصوصی آنلاین و پروژه های درسی و دانشجویی
          <br />می توانید در پلتفرم حل یاب ، مدرسین تایید شده را پیدا کرده
          <br />و با تضمین کیفیت خدمات با اطمینان پروژه خود را ثبت کنید
        </p>
        <div class="mt-5 ">
          <nuxt-link to="/auth/login">
            <button
              type="button"
              class="bg-white shadow mr-1 hover:font-bold text-primary border border-primary py-2 px-3 rounded focus:outline-none focus:shadow-outline"
            >ورود به حساب کاربری</button>
          </nuxt-link>
          <nuxt-link to="/auth/register">
            <button
              type="button"
              class="bg-primary ml-1 hover:font-bold text-white border py-2 px-6 rounded focus:outline-none focus:shadow-outline"
            >ثبت نام در حل یاب</button>
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
  margin-top: -60px;
  
}
</style>