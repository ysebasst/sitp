<template>
  <div id="rutas">
    <!-- <h1>Rutas</h1> -->
    <section class="grid">
      <button @click="fetchData" class="btn">Actualizar</button>
      <div
        v-for="item of getAlimentadores.features"
        :key="item.id"
        class="card"
      >
        <router-link to=""
          ><div class="card-header">
            <span
              class="numRuta"
              :style="
                `background-color: ${getColor(item.attributes.tipo_ruta_zonal)}`
              "
              >{{ item.attributes.codigo_definitivo_ruta_zonal }}</span
            >
            <span>{{ item.attributes.denominacion_ruta_zonal }}</span>
          </div></router-link
        >
        <div class="card-body">
          <p>
            <b>Origen: </b><span>{{ item.attributes.origen_ruta_zonal }}</span>
          </p>
          <p>
            <b>Destino: </b
            ><span>{{ item.attributes.destino_ruta_zonal }}</span>
          </p>
          <p>
            <b>Operadores: </b
            ><span>{{ item.attributes.operador_ruta_zonal }}</span>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      tipoRuta: [
        "#000",
        "#000",
        "#BB302D",
        "#00608B",
        "#376530",
        "#CF7632",
        "#6D1D2D",
      ],
    };
  },
  created() {
    this.getApi();
    console.log("api", this.api);
    console.log(this.$route);
  },
  computed: {
    ...mapState(["api"]),
    getAlimentadores() {
      const alimentadores = {};
      if (this.api.features) {
        alimentadores["features"] = this.api.features.filter(
          (item) => item.attributes.tipo_ruta_zonal === 3
        );
      }
      return alimentadores;
    },
  },
  methods: {
    ...mapActions(["getApi", "fetchData"]),
    getColor(n) {
      return this.tipoRuta[n];
    },
  },
};
</script>

<style lang="scss" scoped>
#rutas {
  padding: 0 0.5rem;
  max-width: 768px;
  margin: 0 auto;
}
h1 {
  text-align: center;
}
a {
  text-decoration: none;
  color: var(--textPrimay);
}
.numRuta {
  padding: 0.5rem;
  border-radius: 0.5rem;
  margin-right: 0.5rem;
}
.btn {
  background-color: var(--bgSecondary);
  color: var(--textPrimay);
  padding: 0.5rem 1rem;
  border: var(--border);
  border-radius: 0.5rem;
  cursor: pointer;
  outline: none;
  display: block;
  width: 100%;
}
.grid {
  display: grid;
  gap: 0.5rem;
}
.card {
  background-color: var(--bgPrimary);
  border-radius: 0.5rem;
  border: var(--border);
  overflow: hidden;
  &-header {
    background-color: var(--bgSecondary);
    padding: 1rem;
    display: flex;
    align-items: center;
  }
  &-body {
    padding: 1rem;
    p {
      margin-bottom: 0.5rem;
    }
  }
}
</style>
