<template>
    <div class="creatureCard">
        <img class="picture" :src="picture">
        <div>
        <a href="" class="name">{{capitalizeString(name) || 'Unknown name'}}</a>
        </div>  
    </div>
</template>

<script>
    export default {
        name: 'CreatureCard',
        props: {
            name: {type: String, default:""},
            picture: {type:String, default:""}
        },
        methods: {
            capitalizeString(str) {
            // split the string into an array of words
            let words = str.split(" ");
        
            // iterate through each word and capitalize the first letter
            for (let i = 0; i < words.length; i++) {
            let word = words[i];
            words[i] = word.charAt(0).toUpperCase() + word.slice(1);
            }
        
            // join the words back together into a single string
            return words.join(" ");
            }
        }
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;900&display=swap');
    .picture {
        width:50%;
    }
    .creatureCard {
        text-align: center;
    }
</style>