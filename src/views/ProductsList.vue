<template>
  <v-container>
    <h2> List of products </h2>
    <div v-if="!products.length" class="spinner">
      <v-progress-circular
        indeterminate
        :width="7"
        :size="70"
        color="primary"
      >
      </v-progress-circular>
    </div>
    <v-row v-else>
      <div
        v-for="product of products" :key="product.id"
      >
        <product
          :product="product"
        />
      </div>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import Product from '../components/Product.vue';

export default {
  components: { Product },
  computed: {
    ...mapGetters(['products']),
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
}
h2 {
  margin-left: auto;
  margin-right: auto;
  width: 70%;
  margin-bottom: 1.5rem;
}
.spinner {
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
