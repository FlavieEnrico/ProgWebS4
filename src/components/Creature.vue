<template>
    <div class="creature-card">
        <img class="picture" :src="picture">
        <div>
        <a href="" class="name">{{name || 'Unknown name'}}</a>
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
    }
</script>

<style scoped>
    .picture {
        width:10em;
        height:10em;
    }
    .creature-card {
        text-align: center;
    }
</style>