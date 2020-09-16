<template>
  <div class="app-sec bg-white" style="marginTop:-200px">
    <div class="container flex-col">
      <div
        class="flex flex-row justify-center align-center text-center"
        style="width: 100%; height: 60%"
      >
        <div
          class="flex flex-col justify-between sm:justify-evenly items-center"
          style="width: 50%;"
        >
          <h2 class="text-xl pt-5 sm:pt-20 font-bold text-right items-start w-full flex">
            در این قسمت ، می توانید پروژه ها و سوالات دیگران
            <br class="hidden sm:block" />را مشاهده فرمایید و روند پاسخگویی به آن ها را بررسی کنید
          </h2>
          <div class="flex justify-start items-center w-full py-6 h-full sm:h-2/5">
            <div
              class="flex justify-center items-center bg-primary font-bold rounded text-white sm:my-8 w-40 h-16 sm:w-56 sm:h-20"
            >
              <nuxt-link class="font-bold" to="/allque">مشاهده پروژه ها</nuxt-link>
            </div>
          </div>
        </div>
        <div class="hidden sm:flex justify-end items-center pl-16" style="width: 50%;">
          <img style="width: 100%" src="~/assets/img/questions.svg" alt="سوالات" />
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