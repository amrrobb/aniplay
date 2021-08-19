<template>
  <div id="search-page">
      <div class="mb-5">
        <h2 class="display-6">Search result</h2>
      </div>
      <div class="my-auto" v-if="!animeSearch.length">
        <h2 class="display-4">Sorry, cannot find what you search.</h2>
      </div>
      <div class="container">
        <div class="row row-cols-5 gy-4">
            <AnimeCard v-for="el in animeSearch" 
              :key="el.mal_id" :el="el"
            />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import AnimeCard from '../components/AnimeCard.vue'
export default {
    name: 'Search',
    components: {AnimeCard},
    computed: {
      ...mapState(['animeSearch'])

    }

}
</script>

<style>
#search-page {
  padding-bottom: 8%;
}
</style>