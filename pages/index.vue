<template>
  <div>
    <Intro />
    <Service />
    <App />
    <Fea />
    <Res />
    <Exp />
    <Footer />
    <!-- <Service />
    <App />
    <Fea />
    <Res />
    <Exp />
    <Footer />-->
  </div>
</template>

<script>
import Intro from "../components/newLanding/Introduction";
import Res from "../components/newLanding/Resume";
import Exp from "../components/newLanding/Example";
import App from "../components/newLanding/App";
import Footer from "../components/newLanding/Footer";
import Service from "../components/newLanding/Services";
import Fea from "../components/newLanding/Features";

export default {
  components: {
    Intro,
    Res,
    Exp,
    Footer,
    Service,
    App,
    Fea,
  },
  auth: false,
  layout: "landing",
};
</script>

<style>
</style>
