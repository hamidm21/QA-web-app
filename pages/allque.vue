<template>
  <div>
    <Allque />
    <AllqueNews v-bind:items="this.items" v-bind:page="pagination.page" v-bind:pages="pagination.pages" v-bind:changePage="changePage" />
    <Footer />
  </div>
</template>

<script>
import Allque from '~/components/web/allque.vue'
import AllqueNews from '~/components/web/allque_news.vue'
import Footer from '~/components/landing/footer.vue'

export default {
    data() {
      return {
        items: [],
        pagination: {
          page: 0,
          pages: 0
        }
      }
    },
    async asyncData({ $axios }) {
        const s_res = await $axios.get("/api/questionsUnAuth?page=1");
        const items = s_res.data.results
        return {
            items,
            pagination: {
                page: 1,
                pages: Math.floor(s_res.data.count / 25)
            }
        }
    },
    methods: {
        goToQuestion(id) {
            this.$router.push(`/user/questionsUnAuth/${id}`)
        },
        async changePage(page) {
            const s_res = await this.$axios.get(`/api/questionsUnAuth?page=${page}`);
            this.items = s_res.data.results,
            this.pagination = {
                page: page,
                pages: Math.floor(s_res.data.count / 25) 
            }
        }
    },
    components: {
      Allque,
      AllqueNews,
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
