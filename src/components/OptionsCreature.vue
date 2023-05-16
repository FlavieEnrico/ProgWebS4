<template>
    <div class="collection-options">
        <div>
          <input type="text" :value="search" @input="onSearchChanged" placeholder="Find a critter">
          <button v-if="search" @click="cleanSearch">X</button>
        </div>
        <div>
          <label for="bug-sort">Order by : </label>
          <select :value="bugsSortType" @input="onBugsSortTypeChanged" id="bug-sort">
            <option value="AZName">Names from A to Z</option>
            <option value="ZAName">Names from Z to A</option>
          </select>
        </div>
      </div>
</template>

<script>
export default {
    name: 'OptionsCreature',
    props: {
        search: String,
        bugsSortType: String
    },
    emits: ["update:search", "update:bugsSortType"],
    watch: {
        search: function(newSearch) {
            localStorage.setItem("search", newSearch)
        },
        bugsSortType: function(newBugsSortType) {
            localStorage.setItem("bugsSortType",newBugsSortType)
        }
    },
    methods: {
        cleanSearch: function() {
            this.$emit('update:search', "")
        },
        onSearchChanged(event) {
            this.$emit('update:search', event.target.value)
        },
        onBugsSortTypeChanged(event) {
            this.$emit('update:bugsSortType', event.target.value)
        },
    }
}
</script>

<style scoped>
</style>