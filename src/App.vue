<template>
  <v-app>
    <div id="app">
      <products-list
        style="width: 70%;"
      />
      <cart-list
        style="width: 30%;"
      />
    </div>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';
import ProductsList from './views/ProductsList.vue';
import CartList from './views/CartList.vue';

export default {
  name: 'App',

  components: {
    ProductsList,
    CartList,
  },

  created() {
    this.initProductsAction();
  },

  methods: {
    ...mapActions(['initProductsAction']),
  },
};
</script>
<style scoped>
  #app {
    display: flex;
    flex-direction: row !important;
    margin-top: 1rem;
  }
</style>
