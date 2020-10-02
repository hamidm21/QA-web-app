<template>
  <div>
    <Intro />
    <Cou />
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
import Cou from "../components/newLanding/counter";
import Intro from "../components/newLanding/Introduction";
import Res from "../components/newLanding/Resume";
import Exp from "../components/newLanding/Example";
import App from "../components/newLanding/App";
import Footer from "../components/newLanding/Footer";
import Service from "../components/newLanding/Services";
import Fea from "../components/newLanding/Features";

export default {
  components: {
    Cou,
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
