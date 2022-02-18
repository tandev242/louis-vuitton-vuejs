<template>
<v-container blue-grey lighten-5 fluid fill-height>
    <Header/>
    <v-row align="center" class="my-auto">
        <v-col class="my-auto"> 
            <v-card class="mx-auto my-5" max-width="600px" min-width="250px" elevation="6">
                <div>
                    <v-tabs v-model="tab" show-arrows background-color="" icons-with-text grow>
                        <v-tabs-slider></v-tabs-slider>
                        <v-tab v-for="(tab, i) in tabs" :key="i">
                            <h4 class="pr-2 caption">{{ tab.name }}</h4>
                            <v-icon large>{{ tab.icon }}</v-icon>
                        </v-tab>
                        <v-tab-item>
                            <v-card class="px-4 pt-1">
                                <v-card-text>
                                    <v-form ref="loginForm" v-model="valid" lazy-validation>
                                        <v-row>
                                            <v-col cols="12">
                                                <v-text-field v-model="loginEmail" :rules="loginEmailRules" label="E-mail" required></v-text-field>
                                            </v-col>
                                            <v-col cols="12" class="mb-2">
                                                <v-text-field v-model="loginPassword" :append-icon="showLoginPassword?'mdi-eye':'mdi-eye-off'" :rules="[rules.required, rules.min]" :type="showLoginPassword ? 'text' : 'password'" name="input-10-1" label="Password" hint="Minimalno 8 znakova." counter @click:append="showLoginPassword = !showLoginPassword"></v-text-field>
                                            </v-col>
                                            <v-col class="d-flex" cols="12" sm="6" xsm="12">
                                            </v-col>
                                            <v-spacer></v-spacer>
                                            <v-col class="d-flex" cols="12" sm="3" xsm="12" align-end>
                                                <v-btn x-large block :disabled="!valid" color="primary" @click="login">Login</v-btn>
                                            </v-col>
                                        </v-row>
                                    </v-form>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item>
                            <v-card class="px-4">
                                <v-card-text>
                                    <v-form ref="registerForm" v-model="valid" lazy-validation>
                                        <v-row>
                                            <v-col cols="12" sm="6">
                                                <v-text-field v-model="ime" :rules="[rules.required]" label="Ime" maxlength="20" required></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-text-field v-model="prezime" :rules="[rules.required]" label="Prezime" maxlength="20" required></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-text-field v-model="phoneNum" label="Phone number" hint="include 9 numbers."></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-text-field v-model="password" :append-icon="showRegPassword1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, rules.min]" :type="showRegPassword1 ? 'text' : 'password'" name="input-10-1" label="Password" hint="Minimalno 8 znakova." counter @click:append="showRegPassword1 = !showRegPassword1"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-text-field block v-model="verify" :append-icon="showRegPassword2 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, passwordMatch]" :type="showRegPassword2 ? 'text' : 'password'" name="input-10-1" label="Password" counter @click:append="showRegPassword2 = !showRegPassword2"></v-text-field>
                                            </v-col>
                                            <v-spacer></v-spacer>
                                            <v-col class="d-flex ml-auto" cols="12" sm="3" xsm="12">
                                                <v-btn x-large block :disabled="!valid" color="primary" @click="login">Izradi</v-btn>
                                            </v-col>
                                        </v-row>
                                    </v-form>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                    </v-tabs>
                </div>
        </v-card>
    </v-col>
    </v-row>
    <Footer />
</v-container>
</template>

<script>
import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"


export default {
    name: "Login",
    components: { Footer ,Header },
    computed: {
    passwordMatch() {
      return () => this.password === this.verify || "Password and confirm do not match "
    }
    },
    methods: {
        login(){
            if(this.$refs.loginForm.validate()){
            const user = {
                email: this.loginEmail,
                password: this.loginPassword
            }
            this.$store.dispatch('user/login', user)
            this.$router.go(-1)
            }else{
                alert("Account is not valid !")
            }
        } 
    },
    data: () => ({
        dialog: true,
        tab: 0,
        tabs: [
            {name:"Login", icon:"mdi-login"},
            {name:"Novi račun", icon:"mdi-account-plus"}
        ],
        valid: true,
        
        ime: "",
        prezime: "",
        email: "",
        phoneNum: null,
        password: "",
        verify: "",
        loginPassword: "",
        loginEmail: "",
        loginEmailRules: [
        v => !!v || "is required.",
        v => /.+@.+\..+/.test(v) || "email is not valid."
        ],
        emailRules: [
        v => !!v || "is required.",
        v => /.+@.+\..+/.test(v) || "email is not valid.."
        ],

        showLoginPassword: false,
        showRegPassword1:false,
        showRegPassword2: false,
        rules: {
        required: value => !!value || "is required.",
        min: v => (v && v.length >= 8) || "include 8 characters greater."
        }
    })
}
</script>

<style scoped>

</style>