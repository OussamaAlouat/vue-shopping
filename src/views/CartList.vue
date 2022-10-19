<template>
  <div>
    <h1>List</h1>

    <v-card
      max-width="400"
      class="mx-auto"
    >
      <v-container>
        <v-row dense>
          <v-col
            v-for="cart of shoppingCart"
            :key="cart.product.id"
            cols="12"
          >
            <v-card>
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title
                    class="headline"
                    v-text="cart.product.productName"
                  />
                  <v-card-subtitle v-text="cart.product.productName" />
                </div>

                <v-avatar
                  class="ma-3"
                  size="110"
                  tile
                >
                  <v-img :src="cart.product.image_url" />
                </v-avatar>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ShoppingList',
  computed: {
    ...mapGetters(['shoppingCart']),
  },
};
</script>

<style>

</style>
