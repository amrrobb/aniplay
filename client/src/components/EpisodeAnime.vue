<template>
  <div class="my-3" style="padding-bottom: 8%;">
    
    <div v-if='animeEpisodes[0]'>
      <div class="mt-3">
        <hr size="8" class="mt-3">
        <h4>List Episode</h4>
      </div>
        <table class="table text-white mt-3" >
        <thead>
            <tr>
            <th scope="col-1">#</th>
            <th scope="col">Episode</th>
            <th scope="col">Updated</th>
            <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>
            <EpisodeRow 
            v-for="(el,i) in animeEpisodes" :key="el.id" :el="el" :i="i"
            />
        </tbody>
        </table>
    </div>

    <div v-else-if="!animeEpisodes[0]">
        <h4>We dont have this Anime right now!</h4>
    </div>
</div>

</template>

<script>
import {mapState} from 'vuex'
import EpisodeRow from '../components/EpisodeRow.vue'
export default {
    name: 'EpisodeAnime',
    components: {EpisodeRow},
    computed: {
        ...mapState(['animeOne', 'animeEpisodes'])
    },
    created() {
        // console.log(this.animeOne.title);
        this.$store.dispatch('searchAnimeVideos', this.animeOne.title)
        this.$store.dispatch('findOneBookmark', this.$route.params.id)
    }
     
}
</script>

<style>

</style>