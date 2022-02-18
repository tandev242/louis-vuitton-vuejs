<template>
  <div class="wrapper__about-us">
    <Header />
    <v-card class="pa-10 text-xl desciption center">
      Truckiu lived her life as she alone intended. The trials of a childhood as
      an orphan and the successes of an accomplished businesswoman gave birth to
      an extraordinary character; daring, free, and ahead of her time. Faithful
      friendships and passionate love affairs, as well as a thirst for culture,
      discovery and travel helped shaped her personality. A wardrobe freed from
      constraints and superfluity, tweaked with masculine accents, created a
      visionary allure that has become timeless and yet wildly modern. Pearls
      and diamonds casually paired with iconic perfumes have created a signature
      style... That of an avant-garde woman, a pioneer whose lifestyle and
      multiple facets forged the values of the House she founded, and who
      remains an inspiration for all women.
    </v-card>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default {
  name: "AboutUs",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
.wrapper__about-us {
  display: flex;
  justify-content: center;
}
.desciption {
  width: 60vw;
}
</style>

