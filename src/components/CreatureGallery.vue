<template>
    <div>
        <div class="collection">
        <OptionsCreature v-model:search="search" v-model:bugsSortType="bugsSortType"/>
        <div class="card" v-for="(bug, index) in bugsOrganizedData" :key="index">
            <router-link :to="`/${bug['file-name']}`">
            <CreatureCard 
            :name="bug['name']" 
            :picture="bug['icon_uri']"
            />
            </router-link>
        </div>
        <div v-if="bugsOrganizedData.length==0" class="if-no-bugs">
            No Match found.
        </div>
        </div>
    </div>
</template>

<script scoped>
import {getBugsData} from '@/services/api/acnhAPI.js'
import CreatureCard from './Creature.vue'
import OptionsCreature from './OptionsCreature.vue'

    export default {
        name: 'CreatureGallery',
        components: {
            CreatureCard,
            OptionsCreature,
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
                search: localStorage.getItem("search") || "",
                bugsSortType: localStorage.getItem("bugsSortType") || "AZName"
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
        }
    }
</script>

<style scoped>



.collection {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  background-color: white;
  border-radius: 25px;
  margin:25px;
  height: 90%;
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