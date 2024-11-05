<template>
  <div>
    <h1>PersonajesComponent</h1>
    <router-link class="btn btn-info" :to="'/serie/' + id"
      >Volver a la serie</router-link
    >
    <table class="table">
        <thead>
            <tr>
                <th>Personaje</th>
                <th>Imagen</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="personaje in personajes" :key="personaje">
                <th>{{ personaje.nombre }}</th>
                <th><img :src="personaje.imagen" alt="" style="width: 200px;height: 150px;"> </th>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import SeriesService from "./../services/SeriesService";
const service = new SeriesService();
export default {
  name: "PersonajesComponent",
  data() {
    return {
      id: 0,
      personajes: [],
    };
  },
  mounted() {
    let id = this.$route.params.id;

    this.id = id;

    service.findPersonajes(id).then((result) => {
      this.personajes = result;
    });
  },
};
</script>

<style>
</style>