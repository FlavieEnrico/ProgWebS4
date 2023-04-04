<template>
  <div class="my-app">
    <AppHeader/>
    <div class="collection">
      <div class="collection-options">
				<input type="text" v-model="search" placeholder="Find a critter">
        <button v-if="search" @click="cleanSearch">X</button>
        <label for="bug-sort">Order by : </label>
				<select v-model="bugsSortType" id="bug-sort">
          <option value="AZName">Names from A to Z</option>
          <option value="ZAName">Names from Z to A</option>
				</select>
        
      </div>
      <div class="card" v-for="(bug, index) in bugsOrganizedData" :key="index">
        <CreatureCard 
        :name="bug['name']" 
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
  computed: {
		bugsOrganizedData: function() {
  const field = ["AZName", "ZAName"].includes(this.bugsSortType) ? "name" : "name"
  const reversed = ["ZAName", "ZAName"].includes(this.bugsSortType) ? -1 : 1
  return this.bugsData
    .filter((a) => a.name.toLowerCase().includes(this.search.toLowerCase()))
    .sort((a, b) => a[field].localeCompare(b[field]) * reversed)
}
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
  height: 90%;
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
