<template>
    <div id="my_single">
        <a href="../">◄ Go back to main page.</a>
        <h1>{{ bugData ? capitalizeString(bugData.name) : 'Loading...' }}</h1>
        <div>
            <div>
                <ul>
                    <li><strong>Index:</strong> {{ bugData ? bugData.id : '' }}</li>
                    <li><strong>Price:</strong> {{ bugData ? bugData.price : '' }} bells</li>
                    <li><strong>Price when sold to Flick:</strong> {{ bugData ? bugData['price-flick'] : '' }} bells</li>
                    <li><strong>Catchphrase:</strong> {{  bugData ? bugData['catch-phrase'] : '' }}</li>
                    <li><strong>Museum phrase:</strong> {{ bugData ? bugData['museum-phrase'] : '' }}</li>
                </ul>
            </div>
            <img :src="bugData ? bugData.image_uri : ''" />
        </div>
    </div>
</template>

<script scoped>
import {getBugDataByName} from '@/services/api/acnhAPI.js'
    export default {
        name: 'CreatureSingle',
        data() {
            return {
            bugData: null
            }
        },
        methods: {
            async retrieveBugsData() {
            const bugName = this.$route.params.name
            this.bugData = await getBugDataByName(bugName)
            console.log(this.bugData)
            },
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
        },
        created() {
            this.retrieveBugsData()
        }
    }
</script>

<style scoped>
    #my_single {
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
        background-color: white;
        border-radius: 25px;
        margin: 25px;
        height: 90%;
    }
    #my_single div {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: row;
        text-align: left;
    }

    #my_single div div {
        width:50%;
    }
    img {
        width: 300px;
        height: auto;
    }
    a {
        padding-top: 30px;
        padding-left: 30px;
        text-align: left;
    }
    a:hover {
        text-decoration: underline;
    }
</style>