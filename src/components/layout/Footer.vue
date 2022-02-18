<template>
    <v-footer
    absolute
    padless
    color="transparent"
  >
    <v-card
      class="flex"
      flat
      tile
      color="transparent"
    >
      <v-card-text class="py-2 primary--text text-center">
         <img align-center :src="require('../../assets/logo.svg')" height="17"/> 
        <span> &copy;No copyright</span>
         {{ new Date().getFullYear() }}. 
        <span> Tan fsoft.</span>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>