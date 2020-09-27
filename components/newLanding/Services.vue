<template>
  <div class="bg pb-10">
    <div class="mos"></div>
    <div class="w-1/2 ml-auto mr-auto">
      <div class="flex flex-wrap -m-3">
        <h2
          class="text-3xl mb-16 mt-16 font-bold text-white mt-5 pt-5 pb-5 sm:pt-20 text-center w-full"
        >خدمات حل یاب</h2>

        <div class="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3">
          <div class="rounded-lg overflow-hidden flex-1 flex flex-col">
            <div class="p-4 flex-1 flex flex-col" style="
">
              <img
                class="w-8 ml-auto mr-auto sm:w-1/2 sm:h-auto h-8"
                src="../../assets/halyab/icon-01.png"
                alt
              />

              <p
                href="#"
                class="border-grey-light text-center mt-5 pt-2 text-xl text-white text-grey hover:text-red uppercase no-underline tracking-wide"
                style="
"
              >درخواست تایپ</p>
            </div>
          </div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3">
          <div class="rounded-lg overflow-hidden flex-1 flex flex-col">
            <div class="p-4 flex-1 flex flex-col" style="
">
              <img
                class="w-8 ml-auto mr-auto sm:w-1/2 sm:h-auto h-8"
                src="../../assets/halyab/icon-02.png"
                alt
              />

              <p
                href="#"
                class="border-grey-light text-center mt-5 pt-2 text-lg text-white text-grey hover:text-red uppercase no-underline tracking-wide"
                style="
"
              >ترجمه متون</p>
            </div>
          </div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3">
          <div class="rounded-lg overflow-hidden flex-1 flex flex-col">
            <div class="p-4 flex-1 flex flex-col" style="
">
              <img
                class="w-8 ml-auto mr-auto sm:w-1/2 sm:h-auto h-8"
                src="../../assets/halyab/icon-03.png"
                alt
              />

              <p
                href="#"
                class="border-grey-light text-center mt-5 pt-2 text-lg text-white text-grey hover:text-red uppercase no-underline tracking-wide"
                style="
"
              >حل سوال درسی</p>
            </div>
          </div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3">
          <div class="rounded-lg overflow-hidden flex-1 flex flex-col">
            <div class="p-4 flex-1 flex flex-col" style="
">
              <img
                class="w-8 ml-auto mr-auto sm:w-1/2 sm:h-auto h-8"
                src="../../assets/halyab/icon-06.png"
                alt
              />

              <p
                href="#"
                class="border-grey-light text-center mt-5 pt-2 text-lg text-white text-grey hover:text-red uppercase no-underline tracking-wide"
                style="
"
              >مشاوره مقاله نویسی</p>
            </div>
          </div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3">
          <div class="rounded-lg overflow-hidden flex-1 flex flex-col">
            <div class="p-4 flex-1 flex flex-col" style="
">
              <img
                class="w-8 ml-auto mr-auto sm:w-1/2 sm:h-auto h-8"
                src="../../assets/halyab/icon-05.png"
                alt
              />

              <p
                href="#"
                class="border-grey-light text-center mt-5 pt-2 text-lg text-white text-grey hover:text-red uppercase no-underline tracking-wide"
                style="
"
              >درخواست کلاس آنلاین</p>
            </div>
          </div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3">
          <div class="rounded-lg overflow-hidden flex-1 flex flex-col">
            <div class="p-4 flex-1 flex flex-col" style="
">
              <img
                class="w-8 ml-auto mr-auto sm:w-1/3 sm:h-auto h-8"
                src="../../assets/halyab/icon-04.png"
                alt
              />

              <p
                href="#"
                class="border-grey-light text-center mt-5 pt-2 text-lg text-white text-grey hover:text-red uppercase no-underline tracking-wide"
                style="
"
              >مشاوره پایان نامه</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ml-auto btndiv mr-auto mt-10">
      <nuxt-link to="/auth/register">
        <button
          type="button"
          class="bg-white rounded-md mr-auto mt-1 px-16 py-2 mb-4 text-black"
        >+ ثبت پروژه</button>
      </nuxt-link>
    </div>
  </div>
</template>
<style >
.bg {
  position: relative;
  overflow: hidden;
  background-color: rgb(65, 75, 160);
}
.mos {
  position: absolute;
  width: 0;
  height: 0;
  border-right: 10vmin solid rgb(65, 75, 160);
  border-right: 98.7vmax solid white;
  border-bottom: 40px solid rgb(65, 75, 160);
}
.btndiv {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>