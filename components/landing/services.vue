<template>
  <div class="feature-sec bg-white" style="marginTop:-100px">
    <div class="container flex-col">
      <div class="flex flex-row justify-center items-center text-center" style="height: 40%;">
        <h2
          class="text-primary text-xl sm:text-4xl font-bold flex align-center justify-center"
        >خدمات</h2>
        <img class="w-1/2" src="~/assets/icons/full-logo.png" alt="لوگوی حل یاب" />
      </div>
      <div class="row">
        <div class="column">
          <div class="card">
            <img class="ml-auto mr-auto pt-4 w-12" src="../../assets/newLanding/icons-07.png" alt />
            <h6 class="pb-5 pt-5 text-sm">حل سوال درسی</h6>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img class="ml-auto mr-auto pt-4 w-12" src="../../assets/newLanding/icons-06.png" alt />
            <h6 class="pb-5 pt-5 text-sm">درخواست تایپ</h6>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img class="ml-auto mr-auto pt-4 w-12" src="../../assets/newLanding/icons-09.png" alt />
            <h6 class="pb-5 pt-5 text-sm">ترجمه متون</h6>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="column">
          <div class="card">
            <img class="ml-auto mr-auto pt-4 w-12" src="../../assets/newLanding/icons-08.png" alt />
            <h6 class="pb-6 w-full pt-5 text-xs">
              درخواست کلاس
              آنلاین
            </h6>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img class="ml-auto mr-auto pt-4 w-12" src="../../assets/newLanding/icons-10.png" alt />
            <h6 class="pb-5 w-full pt-5 text-sm">
              مشاوره مقاله
              نویسی
            </h6>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img class="ml-auto mr-auto pt-4 w-8" src="../../assets/newLanding/icons-12.png" alt />
            <h6 class="pb-5 w-full pt-5 text-sm">
              مشاوره پایان
              نامه
            </h6>
          </div>
        </div>
      </div>
      <p
        class="text-center font-bold klas"
      >هـــم اکنـــون ، پـــروژه خود را در حل یـــاب قرار دهیـــــــد</p>
      <div class="text-center mt-5">
        <nuxt-link to="/auth/register">
          <button
            type="button"
            class="bg-green rounded-md px-16 py-2 shadow-md mb-4 text-white hover:shadow-xl"
          >+ ثبت پروژه</button>
        </nuxt-link>
      </div>
    </div>
    <hr class="hidden sm:block sm:w-full" />
  </div>
</template>

<style >
.column {
  float: left;
  width: 10%;
  padding: 2px 2px;
  margin-bottom: 3%;
}

.row {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

.nnn {
  font-size: px;
}
@media screen and (width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}

.klas {
  margin-top: 30px;
}

.card {
  box-shadow: 2px 2px 10px rgba(20, 17, 17, 0.2);
  border-radius: 8px;
  text-align: center;
  background-color: #fff;
  margin: 2%;
  margin-bottom: 7px;
}
</style>