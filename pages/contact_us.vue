<template>
  <div class="home">
    <Hero />
    <ContactUsForm />
    <Footer />
  </div>
</template>

<script>
import Hero from '~/components/landing/hero_section.vue'
import ContactUsForm from '~/components/web/contact_us_form.vue'
import Footer from '~/components/landing/footer.vue'

export default {
  components: {
    ContactUsForm,
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
