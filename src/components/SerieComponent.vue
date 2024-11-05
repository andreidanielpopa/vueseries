<template>
  <div>
    <h1>SerieComponent</h1>
    <div class="card" style="width: 18rem">
      <img :src="serie.imagen" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ serie.nombre }}</h5>
        <p class="card-text">{{ serie.puntuacion }}</p>
        <router-link class="btn btn-info" :to="'/personajes/' + serie.idSerie"
          >Personajes</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import SeriesService from "./../services/SeriesService";
const service = new SeriesService();
export default {
  name: "SerieComponent",
  data() {
    return { serie: [] };
  },
  mounted() {
    let id = this.$route.params.id;

    service.findSerie(id).then((result) => {
      this.serie = result;
    });
  },
  watch: {
    "$route.params.id"(nextVal, oldVal) {
      if (nextVal != oldVal) {
        let id = this.$route.params.id;
        service.findSerie(id).then((result) => {
          this.serie = result;
        });
      }
    },
  },
};
</script>

<style>
</style>