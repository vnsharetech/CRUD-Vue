import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default {
  namespaced: true,
  state: {
    products: [],
  },
  mutations: {
    setProducts: (state: any, data: any) => {
      state.products = data;
    },
    deleteProduct: (state: any, index: any) => {
      state.products.splice(index, 1);
    },
    addNewProduct: (state: any, item: any) => {
      state.products.unshift(item);
    },
    updateProduct: (state: any, data: any) => {
      Object.assign(state.products[data.index], data.editedItem);
    },
  },
  actions: {
    setProducts: (context: any) => {
      const products = [
        {
          name: "Frozen Yogurt",
          categories: 159,
          price: 3,
        },
        {
          name: "Ice cream sandwich",
          categories: 237,
          price: 1,
        },
        {
          name: "Eclair",
          categories: 262,
          price: 4,
        },
        {
          name: "Cupcake",
          categories: 305,
          price: 8,
        },
        {
          name: "Gingerbread",
          categories: 356,
          price: 7,
        },
        {
          name: "Jelly bean",
          categories: 375,
          price: 4,
        },
        {
          name: "Lollipop",
          categories: 392,
          price: 3,
        },
        {
          name: "Honeycomb",
          categories: 408,
          price: 5,
        },
        {
          name: "Donut",
          categories: 452,
          price: 10,
        },
        {
          name: "KitKat",
          categories: 518,
          price: 2,
        },
      ];
      context.commit("setProducts", products);
    },
    deleteProduct: (context: any, index: any) => {
      context.commit("deleteProduct", index);
    },
    addNewProduct: (context: any, item: any) => {
      context.commit("addNewProduct", item);
    },
    updateProduct: (context: any, data: any) => {
      context.commit("updateProduct", data);
    },
  },
  modules: {},
};
