<template>
  <div id="app">
    <nav-bar/>
    <router-view/>

    <HFooter id="footer"/>
  </div>
</template>

<script>
import HFooter from 'vue-hacktiv8-footer'
import NavBar from './components/NavBar.vue'

export default {
  components: {
    HFooter, NavBar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600&display=swap');

#app {
  font-family: 'Baloo 2', cursive, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f5f5f5 !important;
}

body {
  /* background-image: linear-gradient(315deg, #458fac 10%, #9d00d6 100%); */
  /* background-image: linear-gradient(135deg, #330867 10% #3ed8d8 100%); */
  background-image: linear-gradient(205deg, #3b1965 10%, #9708CC 100%);
  min-height: 56rem;
  margin: 0%;
}

.nav {
  font-size: 1.5em;
  padding: 30px;
  font-weight: 400;
  color: #ffffff;

}

.nav a {
  font-weight: 400;
  color: #ffffff !important;
  opacity: 0.9 !important;

}

.nav a.router-link-exact-active {
  font-weight: 600;
  color: #ffffff;
  opacity: 1 !important;
}

#footer {
  position: absolute;
  border: transparent;
  display: flex;
  bottom: 0;
  width: 100%;
  background: transparent;
}
</style>
