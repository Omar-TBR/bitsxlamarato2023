<template>
  <v-container class="mb-15">
    <v-row class="mb-15 text-center justify-center">
      <v-spacer></v-spacer>
      <v-col cols="3">
        <div class="text-left mr-1">
            <h1 class="display-1 font-weight-bold pt-5 pb-3">{{
                $t("learn.title") }}</h1>
          <h3 class="font-weight-regular">
              {{ $t("learn.description") }}
          </h3>
        </div>
      </v-col>
      <img
        :src="require('@/assets/clipart/couple.svg')"
        class="topImage mt-8"
      />
      <v-spacer></v-spacer>
    </v-row>
    <v-row class="mt-10">
      <v-spacer></v-spacer>
      <v-col cols="10">
        <v-card
          class="d-flex aling-center pa-5 rounded-xl black--text mb-8"
          :img="
            require('@/assets/backgrounds/semiback' +
              Math.floor(Math.random() * 6) +
              '.png')
          "
        >
          <div class="mx-5">
              <h1 class="font-weight-medium">{{ $t("learn.topic1.title") }}</h1>
            <h3 class="font-weight-regular">
                {{ $t("learn.topic1.body") }}
            </h3>
          </div>
          <v-img
            src="https://picsum.photos/200"
            width="25rem"
            class="hover-zoom mx-5 rounded-lg"
          />
        </v-card>

        <v-card
          class="d-flex aling-center py-5 rounded-xl"
          :img="
            require('@/assets/backgrounds/semiback' +
              Math.floor(Math.random() * 6) +
              '.png')
          "
        >
          <v-img
            src="https://picsum.photos/200"
            width="25rem"
            class="hover-zoom mx-5 rounded-lg"
          />
          <div class="mx-5">
            <h1 class="font-weight-medium">{{ $t("learn.topic2.title") }}</h1>
            <h3 class="font-weight-regular">
                {{ $t("learn.topic2.body") }}
            </h3>
          </div>
        </v-card>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-container>
</template>
<script></script>
<style lang="scss" scoped>
.topImage {
  height: 20rem;
  width: auto;
}

.hover-zoom {
  opacity: 0.8;
  transition: transform 0.3s ease, opacity 0.3s ease;

  &:hover {
    transform: scale(1.2);
    opacity: 1;
  }
}
</style>
