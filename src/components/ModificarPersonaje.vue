<template>
  <div>
    <h1>ModificarPersonaje</h1>
    <h2 style="color: blue">{{ mensaje }}</h2>

    <form
      v-on:submit.prevent="insertPersonaje()"
      style="width: 500px; margin: 0 auto"
    >
      <label>Personaje</label>
      <select type="text" v-model="personaje.idPersonaje" class="form-control">
        <option v-for="personaje in personajes" :key="personaje" :value="personaje.idPersonaje">
          {{ personaje.nombre }}
        </option>
      </select>

      <label>Serie</label>
      <select type="text" v-model="serie.idSerie" class="form-control">
        <option v-for="serie in series" :key="serie" :value="serie.idSerie">
          {{ serie.nombre }}
        </option>
      </select>

      <br />
      <button class="btn btn-info">Create</button>
    </form>
  </div>
</template>

<script>
import SeriesService from "./../services/SeriesService";
const service = new SeriesService();
export default {
  name: "ModificarPersonaje",
  data() {
    return {
      mensaje: "",
      series: [],
      personajes: [],
    };
  },
  mounted() {
    service.getSeries().then((result) => {
      this.series = result;
    });

    service.getPersonajes().then((result) => {
      this.personajes = result;
    });
  },
};
</script>

<style>
</style>