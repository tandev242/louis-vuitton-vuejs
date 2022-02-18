<template>
  <div>
    <Header />
    <Hero />
  </div>
</template>

<script>
import Hero from "@/components/home/Hero"
import Header from "@/components/layout/Header"


export default {
    name: "Home",
    components: {
    Hero,
    Header
  }
}
</script>
