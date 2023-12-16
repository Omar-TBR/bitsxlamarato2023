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
      <v-row class="align-center pl-12" no-gutters>
        <v-spacer></v-spacer>
        <div class="align-center justify-center">
          <v-img
            contain
            :src="require('./assets/logo.svg')"
            transition="scale-transition"
            width="60"
          />
        </div>
        <v-spacer></v-spacer>
        <v-btn
          href="https://github.com/vuetifyjs/vuetify/releases/latest"
          target="_blank"
          text
        >
          <span>Login</span>
          <v-icon>mdi-open-in-new</v-icon>
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
              :disabled="isCurrentSection(item.route)"
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
    </v-navigation-drawer>

    <v-main class="background">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    drawer: false,
    selectedSection: "home",
    userLogged: false,
    items: [
      { title: "Home", icon: "mdi-home", route: "home" },
      { title: "Learn", icon: "mdi-book", route: "learn" },
      { title: "Connect", icon: "mdi-account-group", route: "connect" },
      { title: "Track", icon: "mdi-chart-line", route: "track"},
      { title: "Settings", icon: "mdi-cog", route: "settings" },
    ],
  }),
  watch: {
    $route(to) {
      this.selectedSection = to.name;
    },
  },
  methods: {
    navigateTo(section) {
      // Use Vue Router to navigate to the specified route
      this.$router.push({ name: section });

      // Close the drawer after navigation if needed
      this.drawer = false;
    },
    isCurrentSection(section) {
      return this.selectedSection === section;
    },
  },
};
</script>
<style lang="scss" scoped>
//
</style>
