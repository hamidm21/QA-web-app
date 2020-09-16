<template>
  <div>
    <Status />
    <Services />
    <Feature />
    <App />
    <Prof />
    <Exp />
    <Footer />
  </div>
</template>

<script>
import Status from "../components/landing/status";
import Hero from "../components/landing/hero_section.vue";
import Services from "../components/landing/services";
import Feature from "~/components/landing/feature_section.vue";
import App from "~/components/landing/app_section.vue";
import Prof from "~/components/landing/professor_section.vue";
import Exp from "~/components/landing/examples.vue";
import Footer from "~/components/landing/footer.vue";

export default {
  components: {
    Hero,
    Status,
    Services,
    Feature,
    App,
    Prof,
    Exp,
    Footer,
  },
  auth: false,
  layout: "landing",
};
</script>

<style>

</style>
