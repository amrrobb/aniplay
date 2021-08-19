<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-transparent p-4 nav mb-4">
  <div class="container-fluid d-flex justify-conternt-evenly">
    <div class="d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center mx-3">
            <img src="../assets/logo.png" alt="" width="40px" height="40px" class="me-3"> 
            <p class="h3 m-0"><b>Aniplay</b></p>
        </div>
        

        <form class="d-flex mx-5 align-items-center" @submit.prevent="searchAnime">
            <input class="form-control col-6 mx-4" type="search" placeholder="Search anime title.." aria-label="Search" v-model="q">
            <!-- <button class='btn btn-sm' type="submit"> -->
                <span class="material-icons md-light" type="submit">search</span>
            <!-- </button> -->
        </form>
        
    </div>  

    <div class="me-3" >
      <ul class="navbar-nav mx-auto">
        <li class="nav-item mx-2">
          <router-link class="nav-link" to='/'>Home</router-link>
        </li>
        <li class="nav-item mx-2">
          <router-link class="nav-link" to='/bookmark' v-show="isLoggedIn"> Bookmark </router-link>
        </li>
        <li class="nav-item mx-2">
          <a class="nav-link"
            v-show="!isLoggedIn" v-google-signin-button="clientId"
          >Sign In</a>
        </li>
        <li class="nav-item mx-2">
          <a class="nav-link" 
            @click.prevent="logout"
          v-show="isLoggedIn">Sign Out</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'NavBar',
    data() {
      return {
        q: "",
        clientId: "704814998289-3j07t5s2n9deq2hhu0a48i3lqbdnrt7p.apps.googleusercontent.com",
      }
    },
    methods: {
      ...mapActions(['logout']),
      searchAnime() {
        let payload = {q: this.q}
        // console.log(payload);
        this.$store.dispatch('searchAnime', payload)
      },
      OnGoogleAuthSuccess (idToken) {
        // console.log(idToken)
        this.$store.dispatch('googleLogin', idToken)
      },
      OnGoogleAuthFail (error) {
          console.log(error)
      }
    }, 
    computed: {
      isLoggedIn () {
        return this.$store.state.isLoggedIn
      }
    },
    created () {
      if (localStorage.access_token) {
        this.$store.dispatch('loginCheck', true)
      } 
      else {
        this.$store.dispatch('loginCheck', false)

      }
    }
  }

</script>

<style>

</style>