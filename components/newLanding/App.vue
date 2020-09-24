<template>
  <div class="rowdiv bg" style="height:40vh">
    <div class="mos1"></div>
    <div class="imgdiv hidden sm:flex justify-end items-center w-1/3">
      <img class="mt-20 z-0" src="../../assets/halyab/mobile-07.png" alt="عکس موبایل " />
    </div>

    <div class="textdiv sm:w-2/3 w-full">
      <p style="direction: rtl;" class="text-center mt-10 mt- w-75 ml-auto mr-auto">
        همین الان با اپلیکیشن حل یاب به راحتی بر روی تلفن همراه
        <br />سوال و پروژه خود را به اساتید مجرب حل یاب بسپارید
      </p>
      <div class="rowdiv2 mt-5">
        <div class="rowdiv2 w-1/2 mt-3">
          <div>
            <a href="https://cafebazaar.ir/app/com.halyab.halyab">
              <img
                class="sm:w-5/6 p-1 cursor-pointer"
                src="~/assets/img/bazzar.png"
                alt="کافه بازار"
              />
            </a>
          </div>
          <div>
            <a href="https://play.google.com/store/apps/details?id=com.halyab.halyab">
              <img
                class="sm:w-5/6 p-1 cursor-pointer"
                src="~/assets/img/google-play.png"
                alt="کافه بازار"
              />
            </a>
          </div>
        </div>
      </div>
      <div class="mt-10">
        <a
          href
          class="py-3 px-10 sm:py-3 hover:bg-black hover:text-white sm:px-18 border border-black rounded-md text-black cursor-pionter"
        >دانلود مستقیم</a>
      </div>
    </div>
  </div>
</template>
<style >
.rowdiv {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  text-align: center;
  background-color: #e6e7e8;
}
.rowdiv2 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  text-align: center;
}
.mos1 {
  position: absolute;
  width: 0;
  height: 0;
  border-left: 98.8vmax solid transparent;
  border-top: 20px solid #1251a4;
}
.bg {
  position: relative;
}
</style>