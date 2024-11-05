<template>
  <div>
    <h1>CreatePersonaje</h1>
    <h2 style="color: blue">{{ mensaje }}</h2>

    <form
      v-on:submit.prevent="insertPersonaje()"
      style="width: 500px; margin: 0 auto"
    >
      <label>Nombre</label>
      <input type="text" v-model="personaje.nombre" class="form-control" />

      <label>Imagen</label>
      <input type="text" v-model="personaje.imagen" class="form-control" />

      <label>Serie</label>
      <select type="text" v-model="personaje.idSerie" class="form-control">
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
  name: "CreatePersonaje",
  data() {
    return {
      mensaje: "",
      series: [],
      personaje: {
        idPersonaje: 0,
        nombre: "",
        imagen: "",
        idSerie: 0,
      },
    };
  },
  mounted() {
    service.getSeries().then((result) => {
      this.series = result;
    });
  },
  methods: {
    insertPersonaje() {
      service.createPersonaje(this.personaje).then((result) => {
        this.mensaje = "Personaje creado" + result;
      });
    },
  },
};
</script>

<style>
</style>