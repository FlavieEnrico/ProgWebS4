<template>
  <div class="my-app">
    <AppHeader/>
    <div class="collection">
      <div class="collection-options">
				<input type="text" v-model="search" placeholder="Chercher une bébête">
        <button v-if="search" @click="cleanSearch">X</button>
        <label for="bug-sort">Trier par : </label>
				<select v-model="bugsSortType" id="bug-sort">
          <option value="AZName">Noms de A à Z</option>
          <option value="ZAName">Noms de Z à A</option>
				</select>
        
      </div>
      <div class="card" v-for="(bug, index) in bugsData" :key="index">
        <CreatureCard 
        :name="bug['name']['name-EUfr']" 
        :picture="bug['icon_uri']"
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
        bugsData: [],
        search: "",
        bugsSortType: "AZName"
    }
  },
  created: function() {
    this.retrieveBugsData()
  },
  methods: {
      async retrieveBugsData() {
        this.bugsData = await getBugsData();
        console.log(this.bugsData);
      },
      cleanSearch: function() {
      this.search = ""
		}	
  }
}
</script>

<style>
html {
  background-color: palegoldenrod;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.collection {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  background-color: white;
  border-radius: 25px;
  margin:25px;
}

.collection-options {
  width:100%;
  margin: 20px;
}

.card {
  width: 15%;
  box-shadow: 0px 0px 10px lightgrey;
  border-radius: 25px;
  margin: 20px;
  padding: 10px;
}
</style>
