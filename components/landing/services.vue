<template>
  <div class="feature-sec bg-white" style="marginTop:-100px">
    <div class="container flex-col">
      <div class="flex flex-row justify-center items-center text-center" style="height: 40%;">
        <h2
          class="text-primary text-xl sm:text-4xl font-bold  flex align-center justify-center"
        > خدمات</h2>
        <img class="w-1/2" src="~/assets/icons/full-logo.png" alt="لوگوی حل یاب" />
      </div>
      <div class="row mt-2">
        <div class="column">
          <div class="card">
            <img class="ml-auto mr-auto pt-10 w-1/3" src="../../assets/newLanding/icons-07.png" alt />
            <h3 class="pb-5 pt-5">حل سوال درسی</h3>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img class="ml-auto mr-auto pt-8 w-1/3" src="../../assets/newLanding/icons-08.png" alt />
            <h3 class="pb-5 pt-5">درخواست کلاس آنلاین</h3>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img class="ml-auto mr-auto pt-10 w-1/3" src="../../assets/newLanding/icons-09.png" alt />
            <h3 class="pb-5 pt-5">ترجمه متون</h3>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="column">
          <div class="card">
            <img class="ml-auto mr-auto pt-10 w-1/3" src="../../assets/newLanding/icons-06.png" alt />
            <h3 class="pb-5 pt-5">درخواست تایپ</h3>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img class="ml-auto mr-auto pt-8 w-1/3" src="../../assets/newLanding/icons-10.png" alt />
            <h3 class="pb-5 pt-5">مشاوره مقاله نویسی</h3>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img class="m-auto w-1/3 pt-4" src="../../assets/newLanding/icons-12.png" alt />
            <h3 class="pb-5 pt-5">مشاوره پایان نامه</h3>
          </div>
        </div>
      </div>
      <p
        class="text-center font-bold mt-5"
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
  width: 15%;
  padding: 2px 2px;
}

.row {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: -100px;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}

.card {
  box-shadow: 2px 2px 10px rgba(20, 17, 17, 0.2);
  border-radius: 8px;
  text-align: center;
  background-color: #fff;
}
</style>