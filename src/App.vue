<template>
  <v-app>
    <v-app-bar
      app
      color="#FF7F50"
      dark
      flat
      hide-on-scroll
      :inverted-scroll="isCurrentSection('home')"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-dialog v-model="loginDialog" max-width="25rem">
        <v-card class="pa-5 rounded-xl text-center">
          <h1>Login</h1>

          <!-- Username Field -->
          <v-text-field v-model="username" label="Username"></v-text-field>

          <!-- Password Field -->
          <v-text-field
            v-model="password"
            label="Password"
            type="password"
          ></v-text-field>
<div class="d-flex justify-space-around px-10">
  <v-btn @click="login" color="primary">Login</v-btn>
  <v-btn @click="closeLoginDialog">Cancel</v-btn>
</div>
          
        </v-card>
      </v-dialog>

      <v-row class="align-center pl-15" no-gutters>
        <v-spacer></v-spacer>
        <div class="align-center justify-center">
          <router-link to="/">
            <v-img
              contain
              :src="require('@/assets/logo.svg')"
              transition="scale-transition"
              width="60"
            />
          </router-link>
        </div>
        <v-spacer></v-spacer>
        <v-btn flat plain @click="showLoginDialog">
          <span>Login</span>
          <v-icon class="mx-2">mdi-login</v-icon>
        </v-btn>
      </v-row>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      app
      bottom
      temporary
      class="primary30"
    >
      <v-list>
        <v-list-item-group v-model="selectedSection">
          <div v-for="item in items" :key="item.title">
            <v-list-item
              @click="navigateTo(item.route)"
              :disabled="
                isCurrentSection(item.route) ||
                (item.route === 'settings' && !userLogged)
              "
              :class="isCurrentSection(item.route) && 'primary40'"
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  ><div :class="isCurrentSection(item.route) && 'white--text'">
                    {{ item.title }}
                  </div></v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </div>
        </v-list-item-group>
      </v-list>
      <div
        class="px-5 languageSelect d-flex align-center justify-space-between"
      >
        <v-select
          v-model="selectedLanguage"
          :items="languages"
          @change="changeLanguage"
          class="pr-10"
        ></v-select>
        <v-btn elevation="2" outlined class="mr-5" @click="showLoginDialog"
          ><h3>LOG IN</h3>
          <v-icon class="mx-2">mdi-login</v-icon></v-btn
        >
      </div>
    </v-navigation-drawer>

    <v-main class="backgroundRadial pb-15">
      <router-view />
    </v-main>

    <v-footer absolute color="#1d1d1f" border>
      <v-row
        justify="space-between"
        class="clear--text align-center"
        no-gutters
      >
        <v-col>
          <h3>{{ $t("footer.createdBy") }}</h3>
          <div class="d-flex flex-row justify-start">
            <h5 class="mr-10">Erik Blazquez</h5>
            <h5>Miquel Comas</h5>
          </div>
          <div class="d-flex flex-row justify-start">
            <h5 class="mr-12">Omar T. Butt</h5>
            <h5>Joan Vinyals</h5>
          </div>
          <h5></h5>
        </v-col>
        <v-col>
          <h3>{{ $t("footer.resources") }}</h3>
          <h4><a href="https://sexducacion.com/">Sexducación</a></h4>
          <h4>
            <a
              href="https://educacio.gencat.cat/ca/arees-actuacio/families/fomentem-valors/educacio-sexual-afectiva/"
              >Departament d'Educació</a
            >
          </h4>
        </v-col>
        <v-col>
          <div class="d-flex justify-end">
            <a href="https://www.imim.es/">
              <img
                :src="require('./assets/logos/logo-hospital.png')"
                class="sponsorLogos"
              />
            </a>
            <a href="https://www.fib.upc.edu/">
              <img
                :src="require('./assets/logos/logo-upc.png')"
                class="sponsorLogos"
              />
            </a>
            <a href="https://www.fib.upc.edu/la-marato">
              <img
                :src="require('./assets/logos/logo-bits.png')"
                class="sponsorLogos"
              />
            </a>
          </div>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>

import axios from 'axios'

export default {
  name: "App",

  data: () => ({
    //login
    loginDialog: false,
    username: "",
    password: "",

    //general
    languages: ["CA", "EN", "ES"],
    drawer: false,
    selectedSection: "home",
    selectedLanguage: null,
    userLogged: false,
    items: [
      { title: "Home", icon: "mdi-home", route: "home" },
      { title: "Learn", icon: "mdi-book", route: "learn" },
      { title: "Connect", icon: "mdi-account-group", route: "connect" },
      { title: "Track", icon: "mdi-chart-line", route: "track" },
      { title: "Settings", icon: "mdi-cog", route: "settings" },
    ],
  }),
  mounted() {
    this.selectedLanguage = this.$i18n.locale.toUpperCase();
  },
  watch: {
    $route(to) {
      this.selectedSection = to.name;
    },
  },
  methods: {
    //login
    showLoginDialog() {
      this.loginDialog = true;
    },
    closeLoginDialog() {
      this.loginDialog = false;
      // Optionally, you may want to clear the username and password fields here
      this.username = "";
      this.password = "";
    },
    async login() {
        await axios
        .put('http://localhost:8000/Bitsx/users/login', {
          username: this.username,
          password: this.password
        })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error)
        })

      // Close the dialog after login attempt
      this.closeLoginDialog();
    },
    //general
    navigateTo(section) {
      // Use Vue Router to navigate to the specified route
      this.$router.push({ name: section });

      // Close the drawer after navigation if needed
      this.drawer = false;
    },
    isCurrentSection(section) {
      return this.selectedSection === section;
    },
    changeLanguage() {
      // Set the selected language
      this.$i18n.locale = this.selectedLanguage.toLowerCase();
    },
  },
};
</script>
<style>
.backgroundRadial {
  background: hsla(24, 95%, 86%, 1);

  background: linear-gradient(
    225deg,
    hsla(24, 95%, 86%, 1) 26%,
    hsla(19, 100%, 81%, 1) 53%,
    hsla(16, 100%, 65%, 1) 92%
  );
}

.languageSelect {
  position: absolute;
  bottom: 0;
}

.sponsorLogos {
  height: 4.5rem;
  width: auto;
}
</style>
