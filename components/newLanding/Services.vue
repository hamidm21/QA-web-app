<template>
  <div class="div1 bg bg-primary pb-20">
    <div class="mos text-primary"></div>
    <div class="div2" style="width:100%">
      <h2
        style="marginTop:-4%"
        class="text-xl font-bold text-white mt-5 pt-5 pb-5 sm:pt-20 text-center w-full"
      >خدمات حل یاب</h2>

      <div class="div1">
        <div class="div1 sm:w-1/2">
          <div class="text-center pl-2 pr-2 div3 mt-5 mb-5 sm:flex justify-center items-center">
            <div class="div1 text-center">
              <img class="w-5 sm:w-1/2 sm:h-auto h-5" src="../../assets/halyab/icon-01.png" alt />
            </div>
            <p class="text-sm pl-2 pt-5 text-white py-2">درخواست تایپ</p>
          </div>
          <div class="text-center div3 mt-5 pl-2 pr-2 mb-5 sm:flex justify-center items-center">
            <div class="div1 text-center">
              <img class="w-5 sm:w-1/2 sm:h-auto h-5" src="../../assets/halyab/icon-02.png" alt />
            </div>
            <p class="text-sm pl-2 pt-5 text-white py-2">ترجمه متون</p>
          </div>
          <div class="text-center div3 mt-5 pl-2 pr-2 mb-5 sm:flex justify-center items-center">
            <div class="div1 text-center">
              <img class="w-5 sm:w-1/2 sm:h-auto h-5" src="../../assets/halyab/icon-03.png" alt />
            </div>
            <p class="sm:text-sm text-xs pl-2 pt-5 text-white py-2">حل سوال درسی</p>
          </div>
        </div>
      </div>
      <div class="div1">
        <div class="div1 sm:w-1/2">
          <div class="text-center div3 mt-5 mb-5 sm:flex pl-2 pr-2 justify-center items-center">
            <div class="div1 text-center">
              <img class="w-5 sm:w-1/2 sm:h-auto h-5" src="../../assets/halyab/icon-06.png" alt />
            </div>
            <p class="text-sm text-white pl-2 pt-5 py-2">
              مشاوره
              <br />مقاله نویسی
            </p>
          </div>
          <div class="text-center div3 mt-5 mb-5 sm:flex justify-center pl-2 pr-2 items-center">
            <div class="div1 text-center">
              <img class="w-5 sm:w-1/2 sm:h-auto h-5" src="../../assets/halyab/icon-05.png" alt />
            </div>
            <p class="text-sm pl-2 pt-5 text-white py-2">
              درخواست
              <br />کلاس آنلاین
            </p>
          </div>
          <div class="text-center div3 mt-5 mb-5 sm:flex justify-center pl-2 pr-2 items-center">
            <div class="div1 text-center text-white">
              <img class="w-5 sm:w-1/3 sm:h-auto h-5" src="../../assets/halyab/icon-04.png" alt />
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
            class="bg-white rounded-md px-16 py-2 shadow-md mb-4 text-black shadow-xl"
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
  width: 20%;
  margin-left: 2%;
  margin-right: 2%;
}
.bg {
  position: relative;
}
.mos {
  position: absolute;
  width: 0;
  height: 0;
  border-right: 10vmin solid white;
  border-right: 98.8vmax solid white;
  border-bottom: 40px solid;
}
</style>