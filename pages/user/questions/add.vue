<template>
  <div
    class="user-dash sm:pr-250 h-full sm:h-full flex flex-col"
    style="direction: rtl"
  >
    <div class="p-0 sm:p-10">
      <div
        class="flex flex-col rounded-md bg-white rouended-md w-full shadow-md"
      >
        <div class="w-full flex justify-start items-center">
          <h3 class="p-4">اضافه کردن پروژه</h3>
        </div>
        <hr class="w-full" />
        <div>
          <div class="p-2 flex w-full justify-center">
            <form class="flex flex-col w-full sm:w-3/5 h-full" action="">
              <div class="flex flex-col w-full p-2">
                <div class="flex w-full justify-between items-center p-2">
                  <h3>نوع پروژه</h3>
                  <div>
                    <input
                      v-show="false"
                      type="text"
                      list="qtype"
                      name="qtype"
                      class="form-input"
                    />
                    <div class="flex-auto flex flex-col items-center">
                      <div class="flex flex-col items-center relative">
                        <div class="w-full">
                          <div
                            @click="opener(1)"
                            class="my-2 bg-white p-1 flex border rounded"
                            style="border-color: #d2d6dc"
                          >
                            <input
                              v-bind:value="dd1Selected.name"
                              placeholder=""
                              disabled
                              class="p-1 px-2 appearance-none outline-none w-full bg-white text-gray-800 unselecting"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
              <div class="flex flex-col w-full p-2">
                <div class="w-full flex justify-between items-center p-2">
                  <div class="relative right-0">
                    <h3>عنوان پروژه</h3>
                  </div>
                  <div>
                    <input
                      v-model="subject"
                      id="subject"
                      name="subject"
                      class="form-input block w-full pr-7 pl-12 sm:text-sm sm:leading-5"
                      placeholder="سوال ریاضیات"
                    />
                  </div>
                </div>
                <hr />
              </div>
              <div class="flex flex-col w-full p-2">
                <div class="w-full flex justify-between items-center p-2">
                  <h3>توضیحات</h3>
                  <div>
                    <textarea
                      v-model="desc"
                      class="form-input"
                      name="desc"
                      id="desc"
                      cols="20"
                      rows="3"
                    >
                    </textarea>
                  </div>
                </div>
                <hr />
              </div>
              <div class="flex flex-col w-full p-2">
                <div class="w-full flex justify-between items-center p-2">
                  <div class="relative right-0">
                    <h3>قیمت پیشنهادی</h3>
                  </div>
                  <div>
                    <input
                      v-model="max_cost"
                      type="number"
                      id="price"
                      class="form-input block w-full pr-7 pl-12 sm:text-sm sm:leading-5"
                      placeholder="10000"
                    />
                    <small> به تومان </small>
                  </div>
                </div>
                <hr />
              </div>
              <div class="flex flex-col w-full p-2">
                <h3>پیوست</h3>
                <div class="w-full flex justify-center items-center p-2">
                  <Uploader />
                </div>
                <hr />
              </div>
              <div class="flex flex-col w-full p-2">
                <div class="w-full flex justify-between items-center p-2">
                  <div class="w-full">
                    <div class="relative right-0">
                      <h3>اطلاعات تکمیلی</h3>
                    </div>
                    <div class="flex flex-col pt-4 pb-2 w-full">
                      <div
                        class="flex flex-wrap w-full justify-between items-center"
                      >
                        <div v-show="dd2Active" class="flex-col items-center">
                          <small>مقطع تحصیلی</small>
                          <div class="flex flex-col items-center relative">
                            <div class="w-full">
                              <div
                                @click="opener(2)"
                                class="my-2 bg-white p-1 flex border rounded"
                                style="border-color: #d2d6dc"
                              >
                                <input
                                  v-bind:value="dd2Selected.name"
                                  placeholder="مقطع تحصیلی"
                                  disabled
                                  class="p-1 px-2 appearance-none outline-none w-full bg-white text-gray-800 unselecting"
                                />
                                <div
                                  class="text-gray-300 w-8 py-1 pl-2 pr-1 border-r flex justify-center items-center border-gray-200"
                                >
                                  <div
                                    class="flex justify-center items-center cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="100%"
                                      height="100%"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      stroke-width="2"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      class="feather feather-chevron-up w-4 h-4"
                                      v-bind:style="
                                        ddOpen === 2
                                          ? 'transform: rotate(0deg);'
                                          : 'transform: rotate(180deg);'
                                      "
                                    >
                                      <polyline
                                        points="18 15 12 9 6 15"
                                      ></polyline>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <transition
                              enter-active-class="transition ease-out duration-100"
                              enter-class="transform opacity-0 scale-95"
                              enter-to-class="transform opacity-100 scale-100"
                              leave-active-class="transition ease-in duration-75"
                              leave-class="transform opacity-100 scale-100"
                              leave-to-class="transform opacity-0 scale-95"
                            >
                              <div
                                v-show="ddOpen === 2"
                                class="absolute shadow-md top-100 z-40 w-full lef-0 rounded max-h-select overflow-y-auto"
                              >
                                <div class="flex flex-col w-full">
                                  <div
                                    @click="dd2Handler(item)"
                                    v-for="item in dd2"
                                    v-bind:key="item.id"
                                    class="cursor-pointer w-full border-gray-100 border-b hover:bg-teal-100"
                                  >
                                    <div
                                      class="flex w-full items-center p-2 pl-2 border-transparent bg-white border-l-2 relative hover:bg-primary hover:text-teal-100"
                                      v-bind:class="
                                        dd2Selected === item
                                          ? 'border-primary'
                                          : ''
                                      "
                                    >
                                      <div class="w-full items-center flex">
                                        <div class="mx-2 leading-6">
                                          {{ item.name }}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </transition>
                          </div>
                        </div>
                        <div v-show="dd3Active" class="flex-col items-center">
                          <small>رشته تحصیلی</small>
                          <div class="flex flex-col items-center relative">
                            <div class="w-full">
                              <div
                                @click="opener(3)"
                                class="my-2 bg-white p-1 flex border rounded"
                                style="border-color: #d2d6dc"
                              >
                                <input
                                  v-bind:value="dd3Selected.name"
                                  placeholder="پروژه درسی"
                                  disabled
                                  class="p-1 px-2 appearance-none outline-none w-full bg-white text-gray-800 unselecting"
                                />
                                <div
                                  class="text-gray-300 w-8 py-1 pl-2 pr-1 border-r flex justify-center items-center border-gray-200"
                                >
                                  <div
                                    class="flex justify-center items-center cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="100%"
                                      height="100%"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      stroke-width="2"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      class="feather feather-chevron-up w-4 h-4"
                                      v-bind:style="
                                        ddOpen === 3
                                          ? 'transform: rotate(0deg);'
                                          : 'transform: rotate(180deg);'
                                      "
                                    >
                                      <polyline
                                        points="18 15 12 9 6 15"
                                      ></polyline>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <transition
                              enter-active-class="transition ease-out duration-100"
                              enter-class="transform opacity-0 scale-95"
                              enter-to-class="transform opacity-100 scale-100"
                              leave-active-class="transition ease-in duration-75"
                              leave-class="transform opacity-100 scale-100"
                              leave-to-class="transform opacity-0 scale-95"
                            >
                              <div
                                v-show="ddOpen === 3"
                                class="absolute shadow-md top-100 z-40 w-full lef-0 rounded max-h-select overflow-y-auto"
                              >
                                <div class="flex flex-col w-full">
                                  <div
                                    @click="dd3Handler(item)"
                                    v-for="item in dd3"
                                    v-bind:key="item.id"
                                    class="cursor-pointer w-full border-gray-100 border-b hover:bg-teal-100"
                                  >
                                    <div
                                      class="flex w-full items-center p-2 pl-2 border-transparent bg-white border-l-2 relative hover:bg-primary hover:text-teal-100"
                                      v-bind:class="
                                        dd3Selected === item
                                          ? 'border-primary'
                                          : ''
                                      "
                                    >
                                      <div class="w-full items-center flex">
                                        <div class="mx-2 leading-6">
                                          {{ item.name }}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </transition>
                          </div>
                        </div>
                      </div>
                      <div
                        class="flex flex-wrap w-full justify-between items-center"
                      >
                        <div v-show="dd4Active" class="flex-col items-center">
                          <small>عنوان درس</small>
                          <div class="flex flex-col items-center relative">
                            <div class="w-full">
                              <div
                                @click="opener(4)"
                                class="my-2 bg-white p-1 flex border rounded"
                                style="border-color: #d2d6dc"
                              >
                                <input
                                  v-bind:value="dd4Selected.name"
                                  placeholder="پروژه درسی"
                                  disabled
                                  class="p-1 px-2 appearance-none outline-none w-full bg-white text-gray-800 unselecting"
                                />
                                <div
                                  class="text-gray-300 w-8 py-1 pl-2 pr-1 border-r flex justify-center items-center border-gray-200"
                                >
                                  <div
                                    class="flex justify-center items-center cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="100%"
                                      height="100%"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      stroke-width="2"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      class="feather feather-chevron-up w-4 h-4"
                                      v-bind:style="
                                        ddOpen === 4
                                          ? 'transform: rotate(0deg);'
                                          : 'transform: rotate(180deg);'
                                      "
                                    >
                                      <polyline
                                        points="18 15 12 9 6 15"
                                      ></polyline>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <transition
                              enter-active-class="transition ease-out duration-100"
                              enter-class="transform opacity-0 scale-95"
                              enter-to-class="transform opacity-100 scale-100"
                              leave-active-class="transition ease-in duration-75"
                              leave-class="transform opacity-100 scale-100"
                              leave-to-class="transform opacity-0 scale-95"
                            >
                              <div
                                v-show="ddOpen === 4"
                                class="absolute shadow-md top-100 z-40 w-full lef-0 rounded max-h-select overflow-y-auto"
                              >
                                <div class="flex flex-col w-full">
                                  <div
                                    @click="
                                      dd4Selected = item;
                                      opener(0);
                                    "
                                    v-for="item in dd4"
                                    v-bind:key="item.id"
                                    class="cursor-pointer w-full border-gray-100 border-b hover:bg-teal-100"
                                  >
                                    <div
                                      class="flex w-full items-center p-2 pl-2 border-transparent bg-white border-l-2 relative hover:bg-primary hover:text-teal-100"
                                      v-bind:class="
                                        dd4Selected === item
                                          ? 'border-primary'
                                          : ''
                                      "
                                    >
                                      <div class="w-full items-center flex">
                                        <div class="mx-2 leading-6">
                                          {{ item.name }}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </transition>
                          </div>
                        </div>
                        <div class="flex-col items-center">
                          <small>تاریخ پایان پرسش</small>
                          <Picker
                            v-bind:ddOpen="this.ddOpen"
                            v-bind:opener="this.opener"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
              <div class="flex flex-col w-full p-2 justify-center items-center">
                <div class="flex w-1/2 justify-center items-center">
                  <div
                    @click="submitProject()"
                    class="flex justify-center items-center bg-green w-full text-white font-bold p-2 m-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
                    style="
                      box-shadow: 5px 5px 14px -6px rgba(23, 198, 152, 0.9);
                    "
                  >
                    ثبت پروژه
                  </div>
                </div>
              </div>
            </form>
               
          </div>

           <div
                  class=" w-full p-4 justify-center  text-red "
                >
                  <p v-if="this.$route.query.type === `0` " class="font-bold text-center ">
                    کاربر گرامی لطفا توجه داشته باشید مدت زمان کلاس آنلاین
                    90 دقیقه می باشد.
                  </p>
                </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import Picker from "~/components/dashboard/date_picker";
import Uploader from "~/components/dashboard/upload_file";

export default {
  mounted: function () {
    this.$store.commit("setUserDashPage", "questions");
    const item = this.dd1[this.$route.query.type];
    this.dd1Selected = item;
    this.dd1Selected = item;
    console.log(item.name === "تایپ" || item.name === "ترجمه");
    if (item.name === "تایپ" || item.name === "ترجمه") {
      this.dd2Active = false;
      this.dd3Active = false;
      this.dd4Active = false;
    } else {
      this.dd2Active = true;
      this.dd3Active = true;
      this.dd4Active = true;
    }
    this.ddOpen = 0;
  },

  async asyncData({ $axios }) {
    const s_res = await $axios.get("/api/initdata");
    return {
      categories: s_res.data.categories,
      catless: s_res.data.catless_sub_cats,
      dd1: s_res.data.question_types,
      dd2: s_res.data.halyab_grades,
    };
  },
  methods: {
    opener(id) {
      if (id === 3 && this.dd2Selected === "") {
        this.$toast.info(" ابتدا مقطع تحصیلی را انتخاب کنید ");
      } else if (
        id === 4 &&
        !this.dd2Selected.category_less &&
        this.dd3Selected === ""
      ) {
        this.$toast.info(" ابتدا رشته تحصیلی را انتخاب کنید ");
      } else if (
        id === 4 &&
        this.dd2Selected.category_less &&
        this.dd2Selected === ""
      ) {
        this.$toast.info(" ابتدا مقطع تحصیلی را انتخاب کنید ");
      } else {
        this.ddOpen === id ? (this.ddOpen = 0) : (this.ddOpen = id);
      }
    },
    dd2Handler(item) {
      this.dd3Selected = "";
      this.dd4Selected = "";
      this.dd5Selected = "";
      this.dd2Selected = item;
      this.ddOpen = 0;
      this.dd3Active = !item.category_less;
      function isInCat(x) {
        return JSON.stringify(x.id) === JSON.stringify(item.id);
      }
      if (!item.category_less) {
        this.dd3 = this.categories.filter((category) =>
          category.grades.some(isInCat)
        );
      } else {
        this.dd4 = this.catless.filter((catless) =>
          catless.grades.some(isInCat)
        );
      }
    },
    dd3Handler(item) {
      this.dd4Selected = "";
      this.dd3Selected = item;
      this.ddOpen = 0;
      this.dd4 = item.sub_cats.map((sub) => ({ id: sub.id, name: sub.name }));
    },
    showError(str) {
      this.$toast.error(str);
    },
    submitProject() {
      const errors = [];
      const Files = this.$store.state.question.add.Files;
      let obj = {
        q_type: this.dd1Selected
          ? this.dd1Selected.id
          : errors.push("نوع سوال را مشخص کنید"),
        subject: this.subject
          ? this.subject
          : errors.push("موضوع پروژه باید انتخاب شود"),
        desc: this.desc ? this.desc : errors.push("توضیحات را وارد کنید"),
        pic_1: this.$store.state.question.add.Files[0]
          ? this.$store.state.question.add.Files[0].base
          : errors.push("حداقل یک پیوست باید اضافه شود"),
        max_cost:
          this.max_cost !== 0
            ? this.max_cost
            : errors.push("لطفا عنوان درس را مشخص کنید"),
        max_allowed_time: this.$store.state.question.add.selectedDate
          ? this.$store.state.question.add.selectedDate
          : errors.push("لطفا تاریخ پایان پرسش را مشخص کنید"),
      };
      this.dd2Active
        ? Object.assign(obj, {
            grade: this.dd2Selected
              ? this.dd2Selected.id
              : errors.push("لطفا مقطع را مشخص کنید"),
          })
        : "";
      this.dd3Active
        ? Object.assign(obj, {
            category: this.dd2Selected.category_less
              ? ""
              : this.dd3Selected
              ? this.dd3Selected.id
              : errors.push("لطفا رشته را مشخص کنید"),
          })
        : "";
      this.dd4Active
        ? Object.assign(obj, {
            sub_category: this.dd4Selected
              ? this.dd4Selected.id
              : errors.push("لطفا عنوان درس را مشخص کنید"),
          })
        : "";
      if (errors.length >= 1) {
        errors.map((x) => this.showError(x));
        return "";
      }
      let counter = 1;
      if (Files.length > 1) {
        for (const file of Files) {
          Object.assign(obj, { [`pic_${counter}`]: file.base });
          counter = counter + 1;
        }
      }
      this.$axios
        .post("/api/questions/", obj)
        .then((res) => {
          this.$router.push("/user/questions");
        })
        .catch((e) => {
          this.$toast.error("مشکلی در ثبت پروژه پیش آمده است.");
        });
    },
  },
  data() {
    return {
      subject: "",
      desc: "",
      max_cost: 0,
      categories: [],
      catless: [],
      ddOpen: 0,
      dd1: [],
      dd1Selected: "",
      dd2Active: true,
      dd2: [],
      dd2Selected: "",
      dd3Active: true,
      dd3: [],
      dd3Selected: "",
      dd4Active: true,
      dd4Enable: false,
      dd4: [],
      dd4Selected: "",
      dd5: [],
      dd5Selected: "",
    };
  },
  components: {
    Picker,
    Uploader,
  },
  auth: true,
  layout: "dashboard/user",
};
</script>

<style>
.form-input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: #fff;
  border-color: #d2d6dc;
  border-width: 1px;
  border-radius: 0.375rem;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
}

.top-100 {
  top: 100%;
}

.bottom-100 {
  bottom: 100%;
}

.max-h-select {
  max-height: 300px;
}

.unselecting {
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.unselecting::selection {
  background-color: transparent;
}

.unselecting::-moz-selection {
  background-color: transparent;
}

input:focus,
select:focus,
textarea:focus,
button:focus {
  outline: none;
}
</style>
