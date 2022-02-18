<template>
  <div class="header no-print">
    <v-app-bar
      app
      color="white"
      height="80"
      :class="{ 'px-16': $vuetify.breakpoint.mdAndUp }"
    >
      <!-- Logo area -->
      <v-spacer class="hidden-md-and-up"></v-spacer>

      <v-toolbar-title class="text-uppercase">
        <v-row>
          <v-col justify-center>
            <router-link to="/" class="text-decoration-none primary--text">
              <span class="font-weight-normal primary--text d-none d-sm-inline">TAN</span>
              <img class="" :src="require('../../assets/logo.svg')" height="24" />
              <span class="d-none d-sm-inline font-weight-bold">Dz.</span>
            </router-link>
          </v-col>
        </v-row>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- Standard menu -->
      <v-toolbar-items class="hidden-sm-and-down">
        <v-list-item
          v-for="(item, index) in navigationItems"
          :key="index"
          :to="item.to"
          active-class="no-active"
          class="on-hover mx-4"
        >
          <v-list-item-title class="text-body font-weight-medium"
            >{{ item.title }}.</v-list-item-title
          >
        </v-list-item>
      </v-toolbar-items>

      <v-spacer class="hidden-sm-and-down"></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <!-- Auth butttons -->

        <!-- ******* Check auth ******* -->
        <!-- Button with dropdown menu -->
        <v-menu offset-y v-if="isLoggedIn" rounded="0" open-on-hover>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-if="isLoggedIn"
              class="remove-text-transform"
              text
              v-bind="attrs"
              v-on="on"
            >
              <v-icon class="mr-1">mdi-account</v-icon>
              {{ user.name }}
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in racunDropDownMenuItems"
              :key="index"
              @click="item.onClick"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-tooltip v-else bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              to="/Login"
              class="remove-text-transform"
              text
            >
              <v-icon>mdi-login</v-icon>
            </v-btn>
          </template>
          <span>Login</span>
        </v-tooltip>

        <!-- Shopping basket buttton -->
        <v-btn to="/cart" class="" text small>
          <v-icon>mdi-basket-outline</v-icon>
          <v-badge
            color="accent"
            :content="numberOfItems > 0 ? numberOfItems : '0'"
          ></v-badge>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Header",
  data() {
    return {
      drawer: null,
      navigationItems: [
        { title: "Home", to: "/" },
        { title: "Collections", to: "/collections" },
        { title: "About us", to: "/about-us" },
      ],
      racunDropDownMenuItems: [
        {
          title: "Account",
          onClick: () => {
            this.$router.push("/account");
          },
        },
        {
          title: "My orders",
          onClick: () => {
            return true;
          },
        },
        { title: "Logout", onClick: this.logout },
      ],
    };
  },
  computed: {
    ...mapGetters("user", ["isLoggedIn", "user"]),
    ...mapGetters("cart", ["numberOfItems"]),
  },
  methods: {
    logout() {
      this.$store.dispatch("user/logout");
    },
  },
};
</script>

<style>
.v-list-item--active.no-active:before {
  opacity: 0 !important;
}

.v-list-item.on-hover:hover:before {
  background-color: #052949;
  opacity: 0.1 !important;
}
</style>

<style scoped>
.remove-text-transform {
  text-transform: none !important;
}
</style>
