<template>
  <v-form>
    <v-row justify="center mt-3">
      <v-col cols="10" sm="8" md="6" xl="4">
        <v-autocomplete
          v-model="model"
          :loading="isLoading"
          :search-input.sync="search"
          color="grey"
          hide-no-data
          hide-selected
          placeholder=""
          label="Enter keywords "
          single-line
          append-icon="mdi-magnify"
          return-object
        ></v-autocomplete>
        <h3 v-if="search" class="d-flex align-center">
          Search results of &ensp; "
          <h1 class="red--text">{{ this.search }}</h1>
          "
        </h3>
      </v-col>
    </v-row>
  </v-form>
</template>
<script>
export default {
  name: "SearchBar",
  data: () => ({
    model: null,
    isLoading: false,
    search: null,
  }),
  watch: {
    search() {
      this.$store.dispatch("product/searchByProductName", {
        text: this.search,
      });
    },
  },
};
</script>
<style lang=""></style>
