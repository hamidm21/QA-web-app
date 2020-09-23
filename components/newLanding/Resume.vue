<template>
  <div class="prof-sec pt-10 pb-10">
    <div class="container flex-col">
      <div class="flex flex-row justify-center items-center">
        <div class="hidden w-1/2 sm:flex justify-start items-center">
          <img
            style="width: 80%;"
            class="mr-20"
            src="../../assets/halyab/AI-10.png"
            alt="تصویر معرفی"
          />
        </div>
        <div class="sm:w-2/3" style="marginTop:50px">
          <p style="direction: rtl;" class="text-center text-lg mt- w-75 ml-auto mr-auto">
            برای مشارکت در حل مسائل و پروژه های کاربران حل یاب ،
            <br />می توانید رزومه ی خود را برای ما ارسال فرمایید
          </p>
          <div class="mt-5 text-center statusdiv">
            <nuxt-link to="/join_us">
              <button
                type="button"
                class="bg-black shadow px-10 py-2 hover:font-bold text-white rounded focus:outline-none focus:shadow-outline"
              >ارســال رزومه</button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.prof-sec {
  min-height: auto;
  width: 100vw;
  max-width: 100%;
  direction: rtl;
  background-color: #e6e7e8;
}
.statusdiv {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>