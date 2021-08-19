<template>
    <div class="mt-1 container p-2" style="width: 60%;" >
        <div class="d-flex justify-content-between px-5">
            <router-link :to="{path: '/'}" class="text-decoration-none text-white"> 
                <span class="material-icons display-6">
                arrow_back
                </span>
            </router-link>
            <div class="text-end d-flex align-items-center" v-if="isLoggedIn">
              <!-- <p>
                Remove from Bookmark
              </p>  -->
              <span class="material-icons display-4" v-show="!bookmark"
                @click.prevent="addBookmark(animeOne.mal_id, animeOne.image_url, animeOne.title)"
              >
                bookmark_border
              </span>
              <span class="material-icons display-4" v-show="bookmark"
                 @click.prevent="deleteBookmark(animeOne.mal_id)"
              >
                bookmark
              </span>
            </div>
        </div>       

        <div class="mb-4 p-2">
            <h3 class="h3"> {{ animeOne.title }} </h3>
        </div>


        <div class="d-flex justify-content-center px-5">
            <div class="mx-2">
                <img :src="animeOne.image_url"
                alt="Image"
                class="rounded"
                />
                <!-- style="width: 15em; height:12em;" -->

            </div>

            <div class=" ms-4 text-start">
                <div class="row gy-1 text-start h6">
                <dt class="h4">Synopsis</dt>
                <dd class="mb-4">{{animeOne.synopsis}}</dd>

                    <dt class="col-sm-3">Genres</dt>
                    <dd class="col-sm-8">{{genres}}</dd>

                    <dt class="col-sm-3">Rating</dt>
                    <dd class="col-sm-8">{{animeOne.rating}}</dd>

                    <dt class="col-sm-3">Episodes</dt>
                    <dd class="col-sm-8">{{animeOne.episodes || 'N/A'}}</dd>

                    <dt class="col-sm-3">Score</dt>
                    <dd class="col-sm-8">{{animeOne.score || 'N/A'}}</dd>

                    <dt class="col-sm-3">Status</dt>
                    <dd class="col-sm-8">{{animeOne.status}}</dd>
                    
                    <dt class="col-sm-3">Source</dt>
                    <dd class="col-sm-8">{{animeOne.source}}</dd>

                </div>
            </div>

        </div>

       <SocialMedia :animeOne="animeOne"/>

      <div class="episode-list">
        <button class="btn btn-outline-light btn-lg ms-2"
          @click.prevent="changePage()"
       >See Episode List</button>
       <router-view/>
      </div>
      
    </div>

</template>

<script>
// import swal from 'sweetalert2'
import {mapState} from 'vuex'
import SocialMedia from '../components/SocialMedia.vue'
export default {
  name: 'Detail',
  components: {SocialMedia},
  data() {
    return {
      bookmark: false
    }
  },
  computed: {
    ...mapState(['animeOne', 'bookmarkOne', 'isLoggedIn']),
    genres() {
      let genres = []
      if (this.animeOne.genres) {
        this.animeOne.genres.forEach(el => {
            genres.push(el.name)
        });
      }
      genres = genres.join(', ')
      return genres
    },
    bookmarked() {
      if (this.bookmarkOne) {
        this.bookmark = (this.bookmarkOne.mal_id == this.animeOne.mal_id) ? true : false
      } else {
        this.bookmark = false
      }
      return this.bookmark
    }
  },

  methods: {
      addBookmark(mal_id, image_url, title ) {
        this.bookmark = true
        let payload = {
          mal_id, image_url, title
        }
        this.$store.dispatch('addBookmark' , payload)
      },
      deleteBookmark(value) {
        this.bookmark = false
        this.$store.dispatch('deleteBookmark' , value)
      },
      changePage() {
        this.$router.push({name: 'Videos', params: {id: this.$route.params.id}}).catch(() => {})
      }
      
  },
  watch: {
    bookmarkOne (newVal) {
      if (newVal) {
        this.bookmark = true
      } 
    }
  },
  created() {
    let payload = {
      mal_id: this.$route.params.id
    }
    this.$store.dispatch('infoAnime', payload)
    this.$store.dispatch('findOneBookmark', this.$route.params.id)
  }
}
</script>

<style>
.episode-list {
  padding-bottom: 8% !important;
  margin-bottom: 5%;
}


</style>