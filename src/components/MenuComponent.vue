<template>
  <div>
    <nav
      class="navbar navbar-expand-sm navbar-dark bg-dark"
      aria-label="Third navbar example"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Series</a>

        <div class="collapse navbar-collapse" id="navbarsExample03">
          <ul class="navbar-nav me-auto mb-2 mb-sm-0">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/"
                >Home</router-link
              >
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/create"
                >Nuevo Personaje</router-link
              >
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/modificar"
                >Modificar Personaje</router-link
              >
            </li>

            <li class="nav-item dropdown">
              <span
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >Series</span
              >
              <ul class="dropdown-menu">
                <li v-for="serie in series" :key="serie">
                  <router-link class="dropdown-item" :to="'/serie/'+serie.idSerie">
                    {{ serie.nombre }}
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template> 
          
<script>
import SeriesService from "./../services/SeriesService";
const service = new SeriesService();
export default {
  name: "MenuComponent",

  data() {
    return {
      series: [],
    };
  },
  mounted() {
    service.getSeries().then((result) => {
      this.series = result;
    });
  },
};
</script> 