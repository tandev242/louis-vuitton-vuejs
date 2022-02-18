<template>
  <div
    class="pa-2"
    :class="{
      'pa-0': $vuetify.breakpoint.xs,
      'px-8': $vuetify.breakpoint.sm,
      'px-10': $vuetify.breakpoint.md,
      'px-16': $vuetify.breakpoint.lgAndUp,
    }"
  >
    <Header />
    <PromoBanner />
    <SearchBar />
    <v-container fluid>
      <v-row>
        <v-col cols="2" class="hidden-sm-and-down">
          <ProductsFilterBar
            :categories="categories"
            :brands="brands"
            :range="range"
            :setRange="setRange"
          />
        </v-col>
        <v-col>
          <!-- Odabir kategorije i filtera ZA XS I SM -->
          <div class="hidden-md-and-up">
            <v-select label="Odaberite kategoriju" class="hidden-md-and-up"></v-select>
          </div>
          <v-container class="px-8">
            <v-btn block color="primary" class="hidden-md-and-up">
              <v-icon left>mdi-tune</v-icon>
              <v-spacer></v-spacer>
              Filtriraj
              <v-spacer></v-spacer>
            </v-btn>
          </v-container>
          <!-- XS I SM kraj -->

          <!-- Lista proizvoda -->
          <ProductGrid :products="filteredProducts" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Header from "@/components/layout/Header";
import SearchBar from "@/components/skeleton/SearchBar";
import PromoBanner from "@/components/skeleton/PromoBanner";
import ProductGrid from "@/components/skeleton/product/ProductGrid";
import ProductsFilterBar from "@/components/skeleton/product/ProductsFilterBar";

export default {
  name: "Collections",
  components: {
    Header,
    SearchBar,
    PromoBanner,
    ProductGrid,
    ProductsFilterBar,
  },
  data: () => ({
    filteredProducts: [],
    range: [0, 5],
  }),
  computed: {
    ...mapGetters("product", ["products", "brands", "categories"]),
  },
  watch: {
    products() {
      this.filteredProducts = this.products;
    },
    range() {
      this.filteredProducts = this.products.filter(
        (product) =>
          product.price >= this.range[0] * 1000000 &&
          product.price <= this.range[1] * 1000000
      );
    },
  },
  methods: {
    setRange(newRange) {
      this.range = newRange;
    },
  },
};
</script>
