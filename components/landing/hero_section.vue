<template>
    <div class="hero-sec bg-primary">
        <div class="container">
            <div class="hidden sm:flex sm:w-full">
                <img src="~/assets/img/problem_solving.svg" alt="حل مشکل">
            </div>
            <div class="flex flex-col justify-start align-center text-white w-full h-1/2 sm:width-1/2 sm:height-1/2">
                <h1 class="font-bold text-2xl sm:text-3xl">
                    با حل یاب هیچ سوالی بی پاسخ نمیمونه !
                </h1>
                <h2 class="font-bold text-xl sm:text-2xl py-4">
                    اولین سامانه حل سوال آنلاین
                </h2>
                <h3 class="mt-10 p-2 text-md sm:text-lg">
                    برای ثبت سوال یا پروژه خود و بازدید از سوالات دیگران حساب
                    <br class="hidden sm:block">
                    کاربری خود را بسازید یا به حساب خود وارد شوید
                </h3>
                <div class="flex flex-row align-center justify-center" style="padding-top: 15%">
                    <nuxt-link to="/auth/register">
                        <div class="flex justify-center items-center bg-primary border border-white font-bold rounded m-2 mt-6 sm:m-8 w-40 h-16 sm:w-56 sm:h-20">
                            ثبت نام در حل یاب
                        </div>
                    </nuxt-link>
                    <nuxt-link to="/auth/login">
                        <div class="flex justify-center items-center bg-white rounded text-primary font-bold m-2 mt-6 sm:m-8 w-40 h-16 sm:w-56 sm:h-20">
                            ورود به حساب کاربری
                        </div>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style>

.hero-sec {
    min-height: 100vh;
    width: 100vw;
    max-width: 100%;
}

.container {
  margin: 0 auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  direction: rtl;
}

</style>