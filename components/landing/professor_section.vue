<template>
  <div class="prof-sec bg-white "  style="marginTop:20px" >
    <div class="container flex-col">
      <div class="flex flex-row justify-center items-center text-center pb-6" style="height: 20%;">
        <h2
          class="text-primary text-xl sm:text-4xl font-bold flex align-center justify-center"
        >همکاری با</h2>
        <img class="w-1/2" src="~/assets/icons/full-logo.png" alt="لوگوی حل یاب" />
      </div>
      <div class="flex flex-row justify-center items-center" style="height: 60%;">
        <div class="hidden sm:flex justify-start items-center">
          <img style="width: 65%;" src="../../assets/newLanding/AI-10.png" alt="ارسال رزومه استاد" />
        </div>

        <div
          class="flex flex-col justify-between sm:justify-evenly items-center"
          style="width: 50%; height: 100%"
        >
          <h2 class="text-xl sm:pt-20 font-bold text-right items-start w-full flex">
            برای مشارکت در حل مسائل و پروژه های کاربران حل یاب ،
            <br />می توانید رزومه ی خود را برای ما ارسال فرمایید
          </h2>
          <div class="flex justify-start items-center w-full py-6 h-full sm:h-2/5">
            <div
              class="flex justify-center items-center bg-primary font-bold rounded text-white sm:my-8 w-40 h-16 sm:w-56 sm:h-20"
            >
              <nuxt-link class="font-bold" to="/join_us">ارسال رزومه</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr class="hidden sm:block sm:w-full" />
  </div>
</template>

<style>
.prof-sec {
  min-height: 100vh;
  width: 100vw;
  max-width: 100%;
}
</style>