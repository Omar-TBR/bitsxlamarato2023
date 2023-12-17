<template>
  <v-container class="mb-15">
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
        :src="require('@/assets/backgrounds/lines.png')"
        cover
        class="pt-5"
        height="600"
        style="opacity: 0.8"
        >
        <v-img
          :src="require('@/assets/logo.svg')"
          class="my-8 fullLogo shadow"
          contain
          height="300"
          :style="{ opacity: logoOpacity, transform: `scale(${logoScale})` }"
        />
        <h1 class="display-2 font-weight-medium mb-10">
          {{ $t("home.slogan") }}
        </h1>
      </v-img>
        
        <v-row class="my-10">
          <v-col
            v-for="button in buttons"
            :key="button.title"
            cols="4"
            @click="navigateTo(button.title)"
          >
            <div class="circle-container hover-zoom">
              <v-img
                :src="button.background"
                class="my-3 shadow"
                contain
                height="600"
              />
              <div class="buttonContent align-center">
                <img :src="button.image" class="button-image" />
                <v-row fill-height justify="center" align="center" fluid>
                  <v-col cols="12" class="text-right title">
                    <h2 class="mb-10">
                      {{ $t("home.buttons." + button.title + ".title") }}
                    </h2>
                    <h5 class="subtitle font-weight-regular">
                      {{ $t("home.buttons." + button.title + ".subtitle") }}
                    </h5>
                  </v-col>
                </v-row>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-card
          class="text-left rounded-xxl text-card transparent mb-5 mini-hover-zoom"
          elevation="3"
          outlined
        >
          <v-img
            :src="require('@/assets/backgrounds/semiback1.png')"
            cover
            height="300"
            style="background-position: center center"
            class="pa-10 background-img"
          >
            <h1 class="font-italic mb-1">{{ $t("home.about.title") }}</h1>
            <h2 class="font-weight-regular">
                {{ $t("home.about.body") }}
            </h2>
          </v-img>
        </v-card>

        <v-card
          class="text-left rounded-xxl text-card transparent mb-5 mini-hover-zoom"
          elevation="3"
          outlined
        >
          <v-img
            :src="require('@/assets/backgrounds/semiback2.png')"
            cover
            height="300"
            style="background-position: center center"
            class="pa-10 background-img"
          >
            <h1 class="font-italic my-3">{{ $t("home.who.title") }}</h1>
            <h2 class="font-weight-regular">
                {{ $t("home.who.body") }}
            </h2>
          </v-img>
        </v-card>

        <v-card
          class="text-left rounded-xxl text-card transparent mb-5 mini-hover-zoom"
          elevation="3"
          outlined
        >
          <v-img
            :src="require('@/assets/backgrounds/semiback3.png')"
            cover
            height="300"
            style="background-position: center center"
            class="pa-10 background-img"
          >
            <h1 class="font-italic my-3">{{ $t("home.us.title") }}</h1>
            <h2 class="font-weight-regular">
                {{ $t("home.us.body") }}
            </h2>
          </v-img>
        </v-card>

        <div class="text-center">
          <h3 class="font-weight-regular">
              {{ $t("home.bottom") }}
          </h3>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: function () {
    return {
      logoOpacity: 1,
      logoScale: 1,
      lastScrollTop: 0,
      buttons: [
        {
          title: "connect",
          background: require("../assets/buttons/button1.svg"),
          image: require("../assets/clipart/connect.svg"),
          text: this.$t("home.buttons.connect.subtitle"),
        },
        {
          title: "learn",
          background: require("../assets/buttons/button2.svg"),
          image: require("../assets/clipart/learn.svg"),
          text: this.$t("home.buttons.learn.subtitle"),
        },
        {
          title: "track",
          background: require("../assets/buttons/button3.svg"),
          image: require("../assets/clipart/ask.svg"),
          text: this.$t("home.buttons.track.subtitle"),
        },
      ],
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    navigateTo(section) {
      // Use Vue Router to navigate to the specified route
      this.$router.push({ name: section });
    },
    handleScroll() {
      const st = window.pageYOffset || document.documentElement.scrollTop;

      if (st > this.lastScrollTop) {
        // Scrolling down
        this.logoOpacity = Math.max(0, 1 - st / 100); // Adjust the 200 as needed
        this.logoScale = Math.max(0.5, 1 - st / 400);
      } else {
        // Scrolling up
        this.logoOpacity = 1;
        this.logoScale = 1;
      }

      this.lastScrollTop = st <= 0 ? 0 : st;
    },
  },
};
</script>

<style lang="scss" scoped>
.text-card {
  border: 1px solid black;
}
.fullLogo {
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.hover-zoom {
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.25);
    cursor: pointer;
  }
}

.mini-hover-zoom {
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.01);
  }
}

.shadow {
  filter: drop-shadow(100px 64px 218px rgba(0, 0, 0, 0.13));
}

.background-component {
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)),
    url("../assets/backgrounds/back1.png") center/cover no-repeat;
}

.circle-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35rem;
}

.circle-container:hover .button-image {
  opacity: 0.2;
}

.circle-container:hover .subtitle {
  opacity: 1;
}
.subtitle {
  opacity: 0;
  transition: opacity 0.3s ease;
  text-align: left;
}

.button-image {
  position: absolute;
  height: 28rem;
  width: auto;
  bottom: -50%;
  right: 45%;
  opacity: 1;
  transition: opacity 0.3s ease;
}
.buttonContent {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>
