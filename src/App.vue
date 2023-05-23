<template>
  <div class="my-app">
    <AppHeader/>
    <router-view></router-view>
    <AppFooter/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'



export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter, 
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;900&display=swap');
html {
  background-color: palegoldenrod;
}

#app {
  font-family: 'Nunito', sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #313131;
  margin-top: 60px;
}

a {
  color:#313131;
  text-decoration: none;
}
</style>
