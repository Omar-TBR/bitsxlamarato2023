<template>
  <v-container>
    <v-row class="mb-15">
      <v-spacer></v-spacer>
      <v-col cols="6">
        <div class="d-flex flex-row justify-center">
          <div class="text-left mr-n5">
            <h1 class="display-1 font-weight-bold pt-5 pb-3">
              {{ $t("track.title") }}
            </h1>
            <h3 class="font-weight-regular">
              {{ $t("track.subtitle") }}
            </h3>
          </div>
          <v-img
            :src="require('@/assets/clipart/data.svg')"
            height="300"
            max-width="20rem"
            contain
            class="ml-1 mt-5"
          />
        </div>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-row class="px-10">
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
          <h1 class="font-italic mb-1 text-center">
            🚧 {{ $t("track.warningTitle") }} 🚀
          </h1>
          <h2 class="font-weight-regular">
            {{ $t("track.warningSubtitle") }}
          </h2>
        </v-img>
      </v-card>
    </v-row>
  </v-container>
</template>
