import { createRouter, createWebHashHistory } from 'vue-router'

import CreatureGallery from "../components/CreatureGallery.vue"
import CreatureSingle from "../components/CreatureSingle.vue"

const routes = [
    { path: '/', component: CreatureGallery},
    { path: '/:name', component: CreatureSingle},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export {router}