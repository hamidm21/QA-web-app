<template>
    <div class="app-sec bg-white flex items-center justify-center">
    <div class="mx-auto max-w-6xl px-6 py-12" style="width: inherit">
   <div class="flex flex-col md:flex-row shadow justify-center bg-blue-700 rounded">
      <div class="xl:w-1/2 max-w-md my-5 mx-5 flex flex-col justify-center ">
         <div class="text-bold md:text-5xl  text-white  ">به ما ملحق شوید !</div>
         <p class="text-xl text-base text-white mt-4 hidden sm:block">سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
      </div>
      <div class="md:w-1/2 flex justify-start my-5 md:justify-end w-full md:w-1/2 ">
         <form class="rounded flex-auto max-w-sm bg-gray-100 p-10 pb-20 shadow-2xl">
            <div class="w-full">
               <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"><span class="text-red-400 mr-1">*</span> نام شما</div>
               <div class="my-2 bg-white p-1 flex border border-gray-200 rounded">
                  <input placeholder="نام" v-model="name" class="p-1 px-2 appearance-none outline-none w-full text-gray-800">
               </div>
            </div>
            <div class="w-full">
               <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"><span class="text-red-400 mr-1">*</span> مدرک شما </div>
               <div class="my-2 bg-white p-1 flex border border-gray-200 rounded">
                  <input placeholder="مدرک" v-model="degree" class="p-1 px-2 appearance-none outline-none w-full text-gray-800">
               </div>
            </div>
            <div class="w-full">
               <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"><span class="text-red-400 mr-1">*</span> ایمیل شما</div>
               <div class="my-2 bg-white p-1 flex border border-gray-200 rounded">
                  <input placeholder="ایمیل" v-model="email" class="p-1 px-2 appearance-none outline-none w-full text-gray-800">
               </div>
            </div>
            <div>
               <Uploader />
            </div>
            <div class="mt-6 relative">
               <div @click="send()" class="shadow-md font-medium py-2 px-4 text-green-100 text-white text-bold text-2xl cursor-pointer bg-blue-600 rounded text-lg tr-mt   text-center w-full">
                  ارسال
               </div>
            </div>
         </form>
      </div>
   </div>
</div>
</div>
</template>

<script>
import Uploader from '~/components/dashboard/upload_file'

export default {   
   data() {
      return {
         name: '',
         email: '',
         degree: ''
      }
   },
   methods: {
      showError(str) {
         this.$toast.error(str)
      },
      send() {
         const errors = []
         let obj = {
               name: this.name ? this.name : errors.push('نام خود را وارد کنید'),
               degree: this.degree ? this.degree : errors.push('مدرک خود را وارد کنید'),
               email: this.email ? this.email : errors.push('ایمیل خود را وارد کنید'),
               pic: this.$store.state.question.add.Files[0] ? this.$store.state.question.add.Files[0].base : errors.push('حداقل یک پیوست باید اضافه شود')
         }
         if (errors.length >= 1) {
               errors.map(x => this.showError(x));
               return ''
         }
         this.$axios.post("/api/UnAuthcusmsgs/", {
            category: this.$props.catId,
            message: ` ** ارسال رزومه اساتید **\n
            نام : ${this.name}\n
            مدرک‌ : ${this.degree}\n
            ایمیل : ${this.email}\n
            `,
            pic: obj.pic
         }).then((res) => {
            this.$toast.success("پیام شما ارسال شد.")
            this.name = ''
            this.degree = ''
            this.email = ''
            this.$store.commit("removeAllFiles")
         }).catch((e) => {
            this.$toast.error("پیام با موفقیت ارسال نشد.")
         })
      }
   },
   props: [
      "catId"
   ],
   components: {
      Uploader
   }
}
</script>
<style>

.app-sec {
    direction: rtl;
    min-height: 100vh;
    width: 100vw;
    max-width: 100%;
}


</style>