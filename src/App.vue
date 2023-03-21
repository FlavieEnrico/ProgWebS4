<template>
  <div class="my-app">
    <AppHeader/>
    <div>
      <div v-for="(bug, index) in bugsData" :key="index">
        <CreatureCard 
        :name="bug['name']['name-EUfr']" 
        :picture="bug['image_uri']"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CreatureCard from './components/Creature.vue'
import AppHeader from './components/AppHeader.vue'
import {getBugsData} from '@/services/api/acnhAPI.js'


export default {
  name: 'App',
  components: {
    CreatureCard,
    AppHeader,
  },
  data() {
    return {
        bugsData: []
    }
  },
  created: function() {
    this.retrieveBugsData()
  },
  methods: {
      async retrieveBugsData() {
        this.bugsData = await getBugsData();
        console.log(this.bugsData);
      }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
