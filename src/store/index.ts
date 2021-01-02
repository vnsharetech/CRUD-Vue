import Vue from "vue";
import Vuex from "vuex";
import ProductStore from "./product-store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ProductStore: ProductStore
  },
});
