<template>
  <v-card
    class="mx-auto"
    max-width="344"
    elevation="14"
    style="margin-left: 1rem !important; margin-bottom: 1rem;"
  >
    <v-img
      :src="product.image_url"
      height="200px"
    >
    </v-img>

    <v-card-title>
      {{ product.productName }}
    </v-card-title>

    <v-card-subtitle>
      Price: {{ product.price }} €
    </v-card-subtitle>
    <v-expand-transition>
      <v-card-text
        v-if="showDescription"
      >
        {{ product.productDescription }}
      </v-card-text>
    </v-expand-transition>

    <v-card-actions>
      <v-btn
        text
        color="teal accent-4"
        @click="showDescription = !showDescription"
      >
        {{ showDescription ? 'Hide' : 'Show more' }} description
      </v-btn>
    </v-card-actions>

  </v-card>
</template>

<script>
export default {
  name: 'Product',
  props: {
    product: {
      required: true,
    },
  },

  data() {
    return {
      showDescription: false,
    };
  },
};
</script>
