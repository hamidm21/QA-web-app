<template>
  <div class="div1 bg pb-20">
    <div class="div2" style="width:100%">
      <h2
        style="marginTop:-4%"
        class="text-xl font-bold text-white pt-5 pb-5 sm:pt-20 text-center w-full"
      >خدمات حل یاب</h2>

      <div class="div1">
        <div class="div1 sm:w-1/2">
          <div class="text-center pl-2 pr-2 div3 mt-5 mb-5 sm:flex justify-center items-center">
            <div class="div1 text-center">
              <img style="width:50%" src="../../assets/halyab/icon-01.png" alt />
            </div>
            <p class="text-sm pl-2 pt-5 text-white py-2">درخواست تایپ</p>
          </div>
          <div class="text-center div3 mt-5 pl-2 pr-2 mb-5 sm:flex justify-center items-center">
            <div class="div1 text-center">
              <img style="width:50%" src="../../assets/halyab/icon-02.png" alt />
            </div>
            <p class="text-sm pl-2 pt-5 text-white py-2">ترجمه متون</p>
          </div>
          <div class="text-center div3 mt-5 pl-2 pr-2 mb-5 sm:flex justify-center items-center">
            <div class="div1 text-center">
              <img style="width:50%" src="../../assets/halyab/icon-03.png" alt />
            </div>
            <p class="text-sm pl-2 pt-5 text-white py-2">حل سوال درسی</p>
          </div>
        </div>
      </div>
      <div class="div1">
        <div class="div1 sm:w-1/2">
          <div class="text-center div3 mt-5 mb-5 sm:flex pl-2 pr-2 justify-center items-center">
            <div class="div1 text-center">
              <img style="width:50%" src="../../assets/halyab/icon-06.png" alt />
            </div>
            <p class="text-sm text-white pl-2 pt-5 py-2">
              مشاوره
              <br />مقاله نویسی
            </p>
          </div>
          <div class="text-center div3 mt-5 mb-5 sm:flex justify-center pl-2 pr-2 items-center">
            <div class="div1 text-center">
              <img style="width:50%" src="../../assets/halyab/icon-05.png" alt />
            </div>
            <p class="text-sm pl-2 pt-5 text-white py-2">
              درخواست
              <br />کلاس آنلاین
            </p>
          </div>
          <div class="text-center div3 mt-5 mb-5 sm:flex justify-center pl-2 pr-2 items-center">
            <div class="div1 text-center text-white">
              <img style="width:40%" src="../../assets/halyab/icon-04.png" alt />
            </div>
            <p class="text-sm pl-2 pt-5 py-2 text-white">
              مشاوره
              <br />پایان نامه
            </p>
          </div>
        </div>
      </div>
      <div class="text-center mt-1">
        <nuxt-link to="/auth/register">
          <button
            type="button"
            class="bg-white rounded-md px-16 py-2 shadow-md mb-4 text-black hover:shadow-xl"
          >+ ثبت پروژه</button>
        </nuxt-link>
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
}
.div3 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30%;
  margin-left: 2%;
  margin-right: 2%;
}
.bg {
  background-image: url(../../assets/halyab/bg.png);
}
</style>