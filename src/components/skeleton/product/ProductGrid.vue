<template>
  <v-container>
    <v-row v-if="isLoading" class="pt-10" dense>
      <h4 class="text-overline">Loading...</h4>
    </v-row>
    <v-row v-else-if="products.length === 0" class="pt-10" dense>
      <h4 class="text-overline">No products found.</h4>
    </v-row>
    <v-row v-else>
      <v-container>
        <h4 class="text-overline">Total products: {{ products.length }}.</h4>
        <v-row>
          <ProductPreview
            v-for="product in products"
            :product="product"
            :key="product._id"
          />
        </v-row>
      </v-container>

      <v-row>
        <v-col cols="12">
          <v-pagination :length="1" disabled></v-pagination>
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import ProductPreview from "./ProductPreview.vue";

export default {
  name: "ProductGrid",
  components: { ProductPreview },
  data: () => ({}),
  props: {
    products: {
      type: [Array, String],
      required: true,
    },
  },
  computed: {
    ...mapGetters("product", ["isLoading"]),
  },
};
</script>

<style scoped></style>
