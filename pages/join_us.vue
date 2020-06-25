<template>
  <div>
    <JoinUsForm v-bind:catId="catId" />
    <Footer />
  </div>
</template>

<script>
import JoinUsForm from '~/components/web/join_us_form.vue'
import Footer from '~/components/landing/footer.vue'

export default {
  async asyncData({$axios}) {
    const res = await $axios.get("/api/cuscats/");
    return {
      catId: res.data.results.filter(x => x.name == "درخواست همکاری")[0].id
    }
  },
  data() {
    return {
      catId: ''
    }
  },
  components: {
    JoinUsForm,
    Footer,
  },
  auth: false,
  layout: "landing"
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/


</style>
