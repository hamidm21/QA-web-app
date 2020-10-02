<template>
  <div
    class="w-full ml-auto mr-auto text-center pt-3 pb-0 cont"
  >
    <animated-number
      class="font-bold m text-4xl"
      :formatValue="formatToPrice"
      :value="value"
      :duration="8000"
    />
    <p class="text-md pb-2">تعداد پروژه های حل شده در حل یاب تا کنون:</p>
  </div>
</template>
<script>
import AnimatedNumber from "animated-number-vue";
import axios from "axios";

export default {
  components: {
    AnimatedNumber,
  },
  data() {
    return {
      value: 1048,
    };
  },
  methods: {
    formatToPrice(value) {
      return `${value.toFixed(0)}`;
    },
    getCount() {
      return axios.get("https://halyab.com/api/q_done").then((res) => {
        const count = res.data;
        console.log(count);
      });
    },
  },
};
</script>
<style >
.cont {
  background-color: rgb(245, 245, 245);
  display: flex;
  flex-direction: column;
  justify-content: center;
  direction: rtl;
}
.m {
  color: #6c8aec;
}
</style>