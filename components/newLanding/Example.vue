<template>
  <div class="div1">
    <div class="div2">
      <h2 class="text-lg pt-5 px-10 sm:pt-20 text-center w-full">
        در این قسمت ، می توانید پروژه ها و سوالات دیگران
        را مشاهده فرمایید و
        <br class="hidden sm:block" />روند پاسخگویی به آن ها را بررسی کنید
      </h2>
      <div class="mt-5 text-center statusdiv">
        <nuxt-link to="/allque">
          <button
            style="backgroundColor:#4c7fa7;"
            type="button"
            class="shadow px-10 py-2 hover:font-bold text-white rounded focus:outline-none focus:shadow-outline"
          > مشــاهده پروژه ها</button>
        </nuxt-link>
      </div>
      <div class="text-center mt-5 mb-5 flex justify-center items-center" style="width:100%">
        <img style="width: 44%" src="~/assets/img/questions.svg" alt="سوالات" />
      </div>
    </div>
  </div>
</template>
<style >
.div1 {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.div2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}
</style>