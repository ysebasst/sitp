import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    api: {},
    urlApi:
      "https://gis.transmilenio.gov.co/arcgis/rest/services/Zonal/consulta_rutas_zonales/MapServer/1/query?where=1%3D1&outFields=*&outSR=4326&f=json",
  },
  mutations: {
    setApi(state, payload) {
      state.api = payload;
      localStorage.setItem("api", JSON.stringify(payload));
    },
  },
  actions: {
    getApi({ commit }) {
      if (localStorage.getItem("api")) {
        commit("setApi", JSON.parse(localStorage.getItem("api")));
      }
    },
    async fetchData({ commit }) {
      const res = await fetch(this.state.urlApi);
      const data = await res.json();
      data.features.sort(function(a, b) {
        if (
          a.attributes.codigo_definitivo_ruta_zonal >
          b.attributes.codigo_definitivo_ruta_zonal
        ) {
          return 1;
        }
        if (
          a.attributes.codigo_definitivo_ruta_zonal <
          b.attributes.codigo_definitivo_ruta_zonal
        ) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
      commit("setApi", data);
    },
  },
  modules: {},
});
