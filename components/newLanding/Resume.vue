<template>
  <div
    style="direction:rtl:height:30vh;backgroundColor:rgb(245,245,245);"
    class="leading-normal tracking-normal text-white gradient"
  >
    <!--Hero-->
    <div class="pt-24">
      <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <!--Left Col-->
        <div
          class="flex flex-col w-full pr-8 pl-8 md:w-1/2 justify-center items-center text-center md:text-left"
        >
          <p class="leading-normal text-center text-black mb-8">
            برای مشارکت در حل مسائل و پروژه های کاربران حل یاب ،
            <br />می توانید رزومه ی خود را برای ما ارسال فرمایید
          </p>
          <div class="mt-5 mb-20 ml-auto mr-auto ">
            <nuxt-link to="/join_us">
              <button
                style="backgroundColor:#132a3e;"
                type="button"
                class="shadow ml-auto mr-auto px-10 py-2 hover:font-bold text-white rounded focus:outline-none focus:shadow-outline"
              >ارســال رزومه</button>
            </nuxt-link>
          </div>
        </div>
        <!--Right Col-->
        <div class="w-full md:w-1/2 std   text-center">
          <img style="marginTop:-10%" class="w-full md:w-3/5 z-50" src="../../assets/halyab/AI-10.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.std {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>