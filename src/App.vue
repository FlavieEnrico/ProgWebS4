<template>
  <div class="my-app">
    <AppHeader/>
    <div class="collection">
      <div class="collection-options">
        <div>
          <input type="text" v-model="search" placeholder="Find a critter">
          <button v-if="search" @click="cleanSearch">X</button>
        </div>
        <div>
          <label for="bug-sort">Order by : </label>
          <select v-model="bugsSortType" id="bug-sort">
            <option value="AZName">Names from A to Z</option>
            <option value="ZAName">Names from Z to A</option>
          </select>
        </div>
      </div>
      <div class="card" v-for="(bug, index) in bugsOrganizedData" :key="index">
        <CreatureCard 
        :name="bug['name']" 
        :picture="bug['icon_uri']"
        />
      </div>
      <div v-if="bugsOrganizedData.length==0" class="if-no-bugs">
        No Match found.
      </div>
    </div>
    <AppFooter/>
  </div>
</template>

<script>
import CreatureCard from './components/Creature.vue'
import AppHeader from './components/AppHeader.vue'
import {getBugsData} from '@/services/api/acnhAPI.js'
import AppFooter from './components/AppFooter.vue'


export default {
  name: 'App',
  components: {
    CreatureCard,
    AppHeader,
    AppFooter, 
  },
  computed: {
		bugsOrganizedData: function() {
      const reversed = ["ZAName"].includes(this.bugsSortType) ? -1 : 1
      
      return this.bugsData
        .filter((a) => a.name.toLowerCase().includes(this.search.toLowerCase()))
        .sort((a, b) => a.name.localeCompare(b.name) * reversed)
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
  color: #2c3e50;
  margin-top: 60px;
}

a {
  color:#2c3e50;
  text-decoration: none;
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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.collection-options div * {
  margin: 10px;
}

.card {
  width: 15%;
  margin: 20px;
  padding: 10px;
  box-shadow: 0px 0px 10px lightgrey;
  border-radius: 25px;
  transition: box-shadow 0.5s;
}

.card:hover {
  text-decoration: underline;
  box-shadow: 0px 0px 10px #2c3e50;
}

.if-no-bugs {
  min-height: 200px;
  display: flex;
  align-items: center;
}

@media (max-width: 600px) {
  .card {
    width: 100%;
  }
}
</style>
