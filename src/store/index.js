import Vue from 'vue';
import Vuex from 'vuex';
import { getAllProducts } from '../api/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
  },
  mutations: {
    SET_PRODUCTS(state, data) {
      state.products = data;
    },
  },
  actions: {
    initProductsAction({ commit }) {
      getAllProducts().then((response) => {
        commit('SET_PRODUCTS', response.data);
      }).catch((err) => {
        console.log(err);
      });
    },
  },
  getters: {
    products: (state) => state.products,
  },
});
