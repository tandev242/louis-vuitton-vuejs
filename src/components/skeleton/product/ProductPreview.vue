<template>
  <v-col cols="12" sm="6" md="4" lg="3" xl="2">
    <v-card :to="product.slug" class="mx-auto my-2" max-width="374" min-width="160" flat>
      <v-img :src="product.productPictures[0].img" contain height="200"></v-img>
      <v-card-title class="py-0 v-card__title">{{ product.name }}</v-card-title>
      <v-card-text class="py-0 v-card__price"> {{ product.price }} VND </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "ProductPreview",
  props: {
    product: { type: Object, required: true },
  },
};
</script>

<style scoped>
.v-card__title {
  font-size: 13px;
  overflow-wrap: anywhere;
}
.v-card__text {
  font-weight: 700;
  text-align: center;
}
</style>
