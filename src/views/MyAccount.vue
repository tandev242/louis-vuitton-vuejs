<template>
  <div style="height: 100%">
    <Header />
    <v-card class="mb-2">
      <v-container>
        <v-row>
          <v-col>
            <v-row>
              <v-col>
                <v-icon color="black" large>mdi-account-details-outline</v-icon>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <h4 class="text-uppercase text-h5 font-weight-bold">My Account</h4>
                <p class="ma-0">You can view and change your information.</p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-card>
      <v-container>
        <v-row>
          <v-col>
            <v-text-field v-model="user.name" label="Display name"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="user.email"
              disabled
              label="E-mail address"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field label="Password"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="d-flex">
            <v-text-field label="OTP" class="v-text-field__otp"></v-text-field>
            <v-btn class="secondary">Send</v-btn>
          </v-col>
        </v-row>
        <div class="actions py-7 d-flex justify-center">
          <v-btn class="primary" @click="updateUserDetails">UPDATE</v-btn>
        </div>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Header from "@/components/layout/Header";

export default {
  name: "MyAccount",
  components: {
    Header,
  },
  data: () => ({}),
  created() {
    this.fetchUserDetails();
  },
  methods: {
    fetchUserDetails() {
      //   this.$store.dispatch("userAccountDetails/fetchUserDetails", null, { root: true });
    },
    updateUserDetails() {},
  },
  computed: {
    ...mapGetters("user", ["isLoading", "user"]),
  },
};
</script>

<style scoped>
.v-text-field__otp {
  max-width: 30vw;
}
</style>
