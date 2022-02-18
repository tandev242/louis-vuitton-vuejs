<template>
  <v-container :class="{ 'pa-1': $vuetify.breakpoint.xs }">
    <Header />
    <v-container
      :class="{
        'pa-0': $vuetify.breakpoint.xs,
        'px-8': $vuetify.breakpoint.sm,
        'px-10': $vuetify.breakpoint.md,
        'px-16': $vuetify.breakpoint.lgAndUp,
      }"
    >
      <v-alert color="blue-grey" dark class="my-4">
        <span>Welcome to your shopping cart !</span>
      </v-alert>

      <v-container v-if="cartItems.length > 0 && !isLoading" class="pa-0">
        <!-- **** ZAGLAVLJE liste **** -->
        <v-row class="mt-2 hidden-sm-and-down">
          <v-col class="text-center" cols="2">
            <v-icon class="mb-1">mdi-image</v-icon>
          </v-col>
          <v-col class="text-left" cols="4"> Name </v-col>
          <v-col class="text-left" cols="2"> Price </v-col>
          <v-col class="text-left" cols="2"> Quantity </v-col>
          <v-col class="text-left" cols="2"> Delete </v-col>
        </v-row>
        <!-- ************************** -->
        <!-- **** STAVKE liste **** -->
        <v-card
          v-for="(item, index) in cartItems"
          :key="index"
          class="pa-1 my-2"
          outlined
        >
          <v-row>
            <v-col cols="3" md="2">
              <v-img :src="item.productPictures[0].img" contain height="50px"></v-img>
            </v-col>
            <v-col
              cols="7"
              md="4"
              @click="redirectToProduct(item.slug)"
              class="product-name"
            >
              {{ item.name }}
            </v-col>
            <v-col cols="4" md="2">
              <v-row class="hidden-md-and-up">
                <v-col class="text-caption">Price</v-col>
              </v-row>
              {{ item.price * item.quantity }}
            </v-col>
            <v-col cols="4" md="2">
              <v-row class="hidden-md-and-up">
                <v-col class="text-caption">Quantity</v-col>
              </v-row>
              <span class="d-flex">
                <v-icon @click="updateQuantityCart(item._id, item.quantity - 1)"
                  >mdi-minus-box-outline</v-icon
                >
                <span class="text-button mx-1 primary--text font-weight-bold">{{
                  item.quantity
                }}</span>
                <v-icon @click="updateQuantityCart(item._id, item.quantity + 1)"
                  >mdi-plus-box-outline</v-icon
                >
              </span>
            </v-col>
            <v-col cols="4" md="2">
              <v-row class="hidden-md-and-up">
                <v-col class="text-caption">Delete</v-col>
              </v-row>
              <span class="d-flex">
                <v-icon
                  :class="{ 'px-2': $vuetify.breakpoint.mdAndUp }"
                  color="primary"
                  @click="deleteCartItem(item._id)"
                  >mdi-close-circle-outline</v-icon
                >
              </span>
            </v-col>
          </v-row>
        </v-card>
        <!-- ************************** -->
        <!-- CART TOTALS -->
        <v-row>
          <v-col class="mr-2">
            <div class="data-cart-totals py-2">
              <ul class="cart-totals">
                <li>
                  <span class="text-subtitle-1 mr-2">Total Price:</span>
                  <span>{{ totalPrice }}</span>
                </li>
                <v-divider></v-divider>
                <li>
                  <span class="text-subtitle-1 mr-2">Shipping Fee:</span>
                  <span>{{ shipping }}</span>
                </li>
                <v-divider></v-divider>
                <li>
                  <span class="text-subtitle-1 mr-2 red--text">Total Amount:</span>
                  <span>{{ finalPrice }}</span>
                </li>
              </ul>
            </div>
          </v-col>
        </v-row>
        <!--*******-->

        <!-- ACTIONS -->
        <v-container class="text-end pa-0">
          <v-row>
            <v-col>
              <v-btn class="primary"> CHECK OUT </v-btn>
            </v-col>
          </v-row>
        </v-container>
        <!--*******-->
      </v-container>
    </v-container>
  </v-container>
</template>

<script>
import Header from "@/components/layout/Header";
import { mapGetters } from "vuex";

export default {
  name: "ShoppingCart",
  components: { Header },
  data: () => ({
    overlay: false,
  }),
  mounted() {
    // if (this.cartItems.length > 0) this.fetchCartData();
  },
  computed: {
    totalPrice() {
      let sum = 0;
      this.cartItems.forEach((item) => {
        sum = sum + item.quantity * item.price;
      });
      return sum;
    },
    shipping() {
      return this.totalPrice > 200 ? "Free ship" : "200000";
    },
    finalPrice() {
      return this.totalPrice > 200 ? this.totalPrice : Number(this.totalPrice) + 200000;
    },
    showOverlay() {
      return this.isLoading;
    },

    ...mapGetters("cart", ["cartItems", "isLoading"]),
  },
  methods: {
    deleteCartItem(_id) {
      this.$store.commit("cart/DELETE_CART_ITEM", { _id });
    },
    updateQuantityCart(_id, quantity) {
      if (quantity > 0) {
        this.$store.commit("cart/UPDATE_QUANTITY_CART", { _id, quantity });
      } else {
        alert("Quantity must be greater than 0 !");
      }
    },
    redirectToProduct(slug) {
      this.$router.push(slug);
    },
  },
};
</script>

<style>
.data-cart-totals {
  display: block;
  float: right;
}
.cart-totals {
  list-style: none;
}
.cart-actions {
  display: block;
  float: right;
}
.product-name {
  cursor: pointer;
}
.product-name:hover {
  color: green;
}
</style>
