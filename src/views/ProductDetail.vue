<template>
  <v-container>
    <Header />
    <v-row>
      <v-breadcrumbs :items="breadCrumbs" divider=">"></v-breadcrumbs>
    </v-row>
    <v-row v-if="!isLoading">
      <v-col cols="12" md="6" xl="4" class="hidden-sm-and-down">
        <v-row>
          <zoom-on-hover :img-normal="product.productPictures[0].img"></zoom-on-hover>
        </v-row>
      </v-col>
      <v-col cols="12" md="6">
        <v-row>
          <v-col>
            <span class="text-caption">{{ product.category.name }}</span>
            <h1 class="text-h4 font-weight-light primary--text">
              {{ product.name }}
            </h1>
            <span class="text-subtitle-1">SKU: {{ product._id }}</span
            ><br />
            <span class="text-h5 font-weight-bold">{{ product.price }} VND</span
            ><br /><br />

            <div class="no-print">
              <span class="text-button">Quantity:</span>
              <v-text-field
                min="1"
                max="100"
                value="1"
                default="1"
                v-model="quantityCounter"
                type="number"
                outlined
                shaped
                single-line
                hide-details
              ></v-text-field>
              <v-btn class="mt-2 mb-16" @click="addToCart" color="primary">BUY NOW</v-btn>
              <div class="mb-3">
                <v-icon class="mx-1">mdi-facebook</v-icon>
                <v-icon class="mx-1">mdi-whatsapp</v-icon>
                <v-icon class="mx-1">mdi-printer</v-icon>
                <v-icon class="mx-1">mdi-email</v-icon>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col order="-1">
            <hr />
            <h2 class="text-overline">Contact</h2>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row v-else class="loading">Loading...</v-row>
  </v-container>
</template>

<script>
import Header from "@/components/layout/Header";
import { mapGetters } from "vuex";
import store from "@/store";
import Vue from "vue";
import ZoomOnHover from "vue-zoom-on-hover";
Vue.use(ZoomOnHover);

export default {
  name: "ProductDetail",
  components: { Header },
  beforeRouteEnter(to, from, next) {
    store.dispatch("product/getProductBySlug", { slug: to.params.slug }, { root: true });
    next();
  },
  computed: {
    breadCrumbs() {
      const items = [
        {
          text: "Collections",
          disabled: false,
          href: "/collections",
        },
        {
          text: this.product?.category?.name,
          disabled: false,
          href: "/collections",
        },
        {
          text: this.product?.name,
          disabled: true,
          href: "",
        },
      ];
      return items;
    },
    ...mapGetters("product", ["product", "isLoading"]),
  },
  data: () => ({
    quantityCounter: 1,
  }),
  methods: {
    addToCart() {
      let item = { ...this.product };
      item.quantity = this.quantityCounter;
      this.$store.dispatch("cart/addToCart", item);
    },
  },
};
</script>

<style lang="css">
.loading {
  position: absolute;
  left: 50%;
  top: 50%;
}
</style>
