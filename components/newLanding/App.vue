<template>
  <div class="rowdiv bg1" style="height:40vh">
    <div class="imgdiv hidden sm:flex justify-end items-center w-1/3">
      <img class="mt-16 z-0" src="../../assets/halyab/mobile-07.png" alt="عکس موبایل " />
    </div>

    <div class="textdiv sm:w-2/3 w-full">
      <p style="direction: rtl;" class="text-center mt-10 mt- w-75 ml-auto mr-auto">
        همین الان با اپلیکیشن حل یاب به راحتی بر روی تلفن همراه
        <br />سوال و پروژه خود را به اساتید مجرب حل یاب بسپارید
      </p>
      <div class="rowdiv2">
        <div class="rowdiv2  w-4/5 sm:w-2/5 mt-3">
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
      <div class="mt-5">
        <a
          href
          class="py-1 px-10 sm:py-2 hover:bg-black mb-5 hover:text-white sm:px-8 border border-black rounded-md text-black cursor-pionter"
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
  border-left: 10vmin solid transparent;
  border-left: 98.8vmax solid transparent;
  border-top: 20px solid rgb(65, 75, 160);
}
.bg1 {
  position: relative;
  background-color: rgb(231, 231, 231);
}
</style>