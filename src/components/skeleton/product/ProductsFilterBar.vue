<template>
  <v-card flat>
    <v-card-title>Category</v-card-title>
    <v-list class="">
      <v-list-item-group>
        <v-list-item
          v-for="(category, _id) in categories"
          :key="_id"
          :to="'/category/' + category._id + '/' + category.slug"
        >
          <v-list-item-content>
            <v-list-item-title v-text="category.name"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>

    <v-card-title>Addition :</v-card-title>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header> Brand </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-radio-group v-model="brandsRadioGroup" dense>
            <v-radio
              v-for="(brand, _id) in brands"
              :key="_id"
              :value="brand.slug"
              :label="brand.name"
              off-icon="mdi-checkbox-blank-outline"
              on-icon="mdi-checkbox-outline"
            >
            </v-radio>
          </v-radio-group>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header> Range (Million) </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-range-slider
            max="5"
            min="0"
            v-model="range"
            step="0.5"
            thumb-label="always"
            @change="setRange"
            class="mt-5"
          ></v-range-slider>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card>
</template>

<script>
export default {
  name: "ProductsFilterBar",
  data: () => ({
    brandsRadioGroup: null,
  }),
  props: {
    categories: { type: Array, required: true },
    brands: { type: Array, required: true },
    range: { type: Array, required: true },
    setRange: Function,
  },
  watch: {
    async brandsRadioGroup() {
      let paramsList = {
        type: "brand",
        slug: this.brandsRadioGroup,
      };
      this.$store.dispatch("product/getProductsBySlug", paramsList);
    },
    $route() {
      this.brandsRadioGroup = null;
    },
  },
};
</script>
