<template>
  <div class="w-full ml-auto mr-auto text-center pt-3 pb-0 cont">
    <animated-number
      class="font-bold mrc text-4xl"
      :formatValue="formatToPrice"
      :value="value"
      :duration="8000"
      :v-bind="getCount()"
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
      value: 1,
    };
  },
  methods: {
    formatToPrice(value) {
      return `${value.toFixed(0)}`;
    },
    async getCount() {
      const count = await this.$axios.get("/api/q_done");
      const number = count.data.count_done_questions;
      this.value = number;
      console.log(this.value);
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
.mrc {
  color: #132a3e;
}
</style>