<template>
  <div class="home">
    <AboutUs />
    <Footer />
  </div>
</template>

<script>
import AboutUs from '~/components/web/about_us.vue'
import Footer from '~/components/landing/footer.vue'

export default {
  components: {
    AboutUs,
    Footer
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
