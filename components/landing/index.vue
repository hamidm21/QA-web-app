<template>
  <div >
    <Hero />
    <Feature />
    <App />
    <Prof />
    <Exp />
    <Footer />
  </div>
</template>

<script>
import Hero from '~/components/landing/hero_section.vue'
import Feature from '~/components/landing/feature_section.vue'
import App from '~/components/landing/app_section.vue'
import Prof from '~/components/landing/professor_section.vue'
import Exp from '~/components/landing/examples.vue'
import Footer from '~/components/landing/footer.vue'

export default {
  components: {
    Hero,
    Feature,
    App,
    Prof,
    Exp,
    Footer
  },
  auth: false,
  layout: "landing"
}
</script>

<style>

</style>
