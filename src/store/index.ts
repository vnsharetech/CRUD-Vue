import Vue from "vue";
import Vuex from "vuex";
import Product from "./product";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Product: Product
  },
});
