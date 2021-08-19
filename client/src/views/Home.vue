<template>
  <div id="home-page">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div class="mb-5">
      <h2 class="display-6">Upcoming Anime</h2>
    </div>
    <div class="container">
      <div class="row row-cols-5 gy-4">
          <AnimeCard v-for="el in upcoming" 
            :key="el.mal_id" :el="el"
          />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapState} from 'vuex'
import AnimeCard from '../components/AnimeCard.vue'
export default {
  name: 'Home',
  components: {
    AnimeCard
  },
  computed: {
    ...mapState(['upcoming'])
  },
  created() {
    this.$store.dispatch('upcomingAnime')
  }
}
</script>

<style>
#home-page{
  padding-bottom: 8%;
}

</style>