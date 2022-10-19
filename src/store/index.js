import Vue from 'vue';
import Vuex from 'vuex';
import { getAllProducts } from '../api/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    shoppingCart: [],
  },
  mutations: {
    SET_PRODUCTS(state, data) {
      state.products = data;
    },

    ADD_TO_SHOPPING_CART(state, data) {
      state.shoppingCart.push({
        product: data,
        amount: 1,
      });
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

    addToShoppingCart({ commit }, { product }) {
      commit('ADD_TO_SHOPPING_CART', product);
    },
  },
  getters: {
    products: (state) => state.products,
    shoppingCart: (state) => state.shoppingCart,
  },
});
