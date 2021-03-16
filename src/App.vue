<template>
  <v-app>
    <products-list></products-list>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';
import ProductsList from './views/ProductsList.vue';

export default {
  name: 'App',

  components: {
    ProductsList,
  },

  data: () => ({
    //
  }),
  created() {
    this.initProductsAction();
  },

  methods: {
    ...mapActions(['initProductsAction']),
  },
};
</script>
