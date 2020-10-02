<template>
  <div class="bg pb-10">
    <div class="mos"></div>
    <div class="w-1/2 ml-auto mr-auto">
      <div class="flex flex-wrap -m-3">
        <h2
          class="text-3xl mb-16 mt-16 font-bold text-white mt-5 pt-5 pb-5 sm:pt-20 text-center w-full"
        >
          خدمات حل یاب
        </h2>

        <div class="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3">
          <div class="rounded-lg overflow-hidden flex-1 flex flex-col">
            <nuxt-link to="/user/questions/add?type=1">
              <div class="p-4 flex-1 flex flex-col" style="">
                <img
                  class="w-16 sm:w-1/3 md:1/4 lg:w-1/3 xl:w-1/3 ml-auto mr-auto sm:h-auto h-16"
                  src="../../assets/halyab/icon-04.png"
                  alt
                />

                <p
                  href="#"
                  class="border-grey-light text-center mt-5 pt-2 text-lg text-white text-grey hover:text-red uppercase no-underline tracking-wide"
                  style=""
                >
                  مشاوره پایان نامه
                </p>
              </div>
            </nuxt-link>
          </div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3">
          <div class="rounded-lg overflow-hidden flex-1 flex flex-col">
            <nuxt-link to="/user/questions/add?type=4">
              <div class="p-4 flex-1 flex flex-col" style="">
                <img
                  class="w-16 sm:w-1/2 md:1/4 lg:w-1/3 xl:w-1/2 ml-auto mr-auto sm:w-1/2 sm:h-auto h-16"
                  src="../../assets/halyab/icon-03.png"
                  alt
                />

                <p
                  href="#"
                  class="border-grey-light text-center mt-5 pt-2 text-lg text-white text-grey hover:text-red uppercase no-underline tracking-wide"
                  style=""
                >
                  حل سوال درسی
                </p>
              </div>
            </nuxt-link>
          </div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3">
          <div class="rounded-lg overflow-hidden flex-1 flex flex-col">
            <nuxt-link to="/user/questions/add?type=0">
              <div class="p-4 flex-1 flex flex-col" style="">
                <img
                  class="w-16 sm:w-1/2 md:1/4 lg:w-1/3 xl:w-1/2 ml-auto mr-auto sm:w-1/2 sm:h-auto h-16"
                  src="../../assets/halyab/icon-05.png"
                  alt
                />

                <p
                  href="#"
                  class="border-grey-light text-center mt-5 pt-2 text-lg text-white text-grey hover:text-red uppercase no-underline tracking-wide"
                  style=""
                >
                  درخواست کلاس آنلاین
                </p>
              </div>
            </nuxt-link>
          </div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3">
          <div class="rounded-lg overflow-hidden flex-1 flex flex-col">
            <nuxt-link to="/user/questions/add?type=2">
              <div class="p-4 flex-1 flex flex-col" style="">
                <img
                  class="w-16 sm:w-1/2 md:1/4 lg:w-1/3 xl:w-1/2 ml-auto mr-auto sm:w-1/2 sm:h-auto h-16"
                  src="../../assets/halyab/icon-01.png"
                  alt
                />

                <p
                  href="#"
                  class="border-grey-light text-center mt-5 pt-2 text-xl text-white text-grey hover:text-red uppercase no-underline tracking-wide"
                  style=""
                >
                  درخواست تایپ
                </p>
              </div>
            </nuxt-link>
          </div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3">
          <div class="rounded-lg overflow-hidden flex-1 flex flex-col">
            <nuxt-link to="/user/questions/add?type=3">
              <div class="p-4 flex-1 flex flex-col" style="">
                <img
                  class="w-16 sm:w-1/2 md:1/4 lg:w-1/3 xl:w-1/2 ml-auto mr-auto sm:w-1/2 sm:h-auto h-16"
                  src="../../assets/halyab/icon-02.png"
                  alt
                />

                <p
                  href="#"
                  class="border-grey-light text-center mt-6 pt-2 text-lg text-white text-grey hover:text-red uppercase no-underline tracking-wide"
                  style=""
                >
                  ترجمه متون
                </p>
              </div>
            </nuxt-link>
          </div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3">
          <div class="rounded-lg overflow-hidden flex-1 flex flex-col">
            <nuxt-link to="/user/questions/add?type=1">
              <div class="p-4 flex-1 flex flex-col" style="">
                <img
                  class="w-16 sm:w-1/2 md:1/4 lg:w-1/3 xl:w-1/2 ml-auto mr-auto sm:w-1/2 sm:h-auto h-16"
                  src="../../assets/halyab/icon-06.png"
                  alt
                />

                <p
                  href="#"
                  class="border-grey-light text-center mt-5 pt-2 text-lg text-white text-grey hover:text-red uppercase no-underline tracking-wide"
                  style=""
                >
                  مشاوره مقاله نویسی
                </p>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div class="ml-auto btndiv mr-auto mt-10">
      <nuxt-link to="/user/questions/addProject">
        <button
          type="button"
          class="bg-white rounded-md mr-auto mt-1 px-16 py-2 mb-4 text-black"
        >
          + ثبت پروژه
        </button>
      </nuxt-link>
    </div>
    <div class="mos2"></div>
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
  border-right: 98.7vmax solid rgb(245, 245, 245);
  border-bottom: 40px solid rgb(65, 75, 160);
}
.mos2 {
  position: absolute;
  width: 0;
  height: 0;
  margin-top: 10px;
  border-right: 98.7vmax solid rgb(65, 75, 160);
  border-bottom: 30px solid rgb(231, 231, 231);
}
.btndiv {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>