<template>
  <div class="app-sec bg-white">
    <div class="container flex-col">
      <div class="flex flex-row justify-center items-center text-center" style="height: 20%">
        <h2
          class="text-primary text-xl sm:text-4xl font-bold flex align-center justify-center"
        >اپلیکیشن</h2>
        <img class="w-1/2" src="~/assets/icons/full-logo.png" alt="لوگوی حل یاب" />
      </div>
      <div
        class="flex flex-row justify-center align-center text-center"
        style="width: 100%; height: 60%"
      >
        <div
          class="flex flex-col justify-between sm:justify-evenly items-center"
          style="width: 50%;"
        >
          <h2 class="text-xl pt-5 sm:pt-20 font-bold text-right items-start w-full flex pb-4">
            همین الان با اپلیکیشن حل یاب به راحتی بر روی تلفن همراه
            <br class="hidden sm:block" />سوال یا پروژه خود را به اساتید مجرب حل یاب بسپارید
          </h2>
          <div class="flex flex-col flex-wrap justify-start sm:items-start items-center">
            <a
              href="https://cafebazaar.ir/app/com.halyab.halyab"
              class="flex justify-start items-center pt-2"
            >
              <img
                class="w-full sm:w-2/5 p-1 cursor-pointer"
                style="object-fit: contain;"
                src="~/assets/img/bazzar.png"
                alt="کافه بازار"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.halyab.halyab"
              class="flex justify-start items-center pb-2"
            >
              <img
                class="w-full sm:w-2/5 p-1 cursor-pointer"
                style="object-fit: contain;"
                src="~/assets/img/google-play.png"
                alt="گوگل پلی"
              />
            </a>
            <a
              href
              class="py-4 px-10 sm:py-5 sm:px-20 border border-primary rounded-md text-primary cursor-pionter"
            >دانلود مستقیم</a>
          </div>
        </div>
        <div class="hidden sm:flex justify-end items-center pl-16" style="width: 50%;">
          <img style="width: 50%" src="~/assets/img/app.svg" alt="اسکرین شات اپلیکیشن" />
        </div>
      </div>
    </div>
    <hr class="hidden sm:block sm:w-full" />
  </div>
</template>

<style>
.app-sec {
  min-height: 100vh;
  width: 100vw;
  max-width: 100%;
}
</style>