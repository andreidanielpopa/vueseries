import { createWebHistory, createRouter } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import SerieComponent from "./components/SerieComponent.vue";
import PersonajesComponent from "./components/PersonajesComponent.vue";
import CreatePersonaje from "./components/CreatePersonaje.vue";
import ModificarPersonaje from "./components/ModificarPersonaje.vue";

const myRoutes = [
    {
        path: '/', component: HomeComponent
    },
    {
        path: '/serie/:id', component: SerieComponent
    },
    {
        path: '/personajes/:id', component: PersonajesComponent
    },
    {
        path: '/create', component: CreatePersonaje
    },
    {
        path: '/modificar', component: ModificarPersonaje
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;