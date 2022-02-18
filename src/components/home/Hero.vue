<template>
  <v-carousel
      cycle
      interval="5000"
      :show-arrows="false"
      hide-delimiter-background
      delimiter-icon="mdi-minus"
      style=""
      height="100vh"
      >
      <v-carousel-item
        eager
        reverse-transition="fade"
        transition="fade"
        >
        <v-img 
        src="../../assets/images/bg-1.webp"
        height="100vh"
        width="100vw"
        gradient="to top right, rgba(0, 0, 0, .3), rgba(0, 0, 0, .3)"
        
        ></v-img> 
        <div class="mainPitch">
          <div class="hero-text">
                <h3>Sportswear for man.</h3>
            </div>
        </div>
        
      </v-carousel-item>
      <v-carousel-item
        eager
        reverse-transition="fade"
        transition="fade"
        > 
        <v-img 
        src="../../assets/images/bg-3.jpg"
        height="100vh"
        width="100vw"
        gradient="to top right, rgba(0, 0, 0, .3), rgba(0, 0, 0, .3)"
        ></v-img>
        <div class="mainPitch">
          <div class="hero-text">
                <h3>Shoes, Flip flop <br> Tan Dz.</h3>
                <router-link to="/collections"><button class="btn btn-rezerviraj">Buy now.</button></router-link>
            </div>
        </div>
      </v-carousel-item>
    </v-carousel>
</template>
<script>
export default {
    name: "Hero",
    data: () => {
        return {
        }
    }
}
</script>

<style scoped>
  .hero-text{
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-size: 3em;
  }
  .btn{
      border: 1px solid #fff;
      background: none;
      padding: 10px 20px;
      font-size: 20px;
      cursor: pointer;
      transition: 0.7s;
  }
  .btn-rezerviraj{
      color: #fff;
  }
</style>