<template>
  <v-container class="mb-15">
    <v-row class="mb-15 text-center justify-center">
      <v-spacer></v-spacer>
      <v-col cols="3">
        <div class="text-left mr-1">
          <h1 class="display-1 font-weight-bold pt-5 pb-3">Learn</h1>
          <h3 class="font-weight-regular">
            Welcome to the Learning section, your gateway to comprehensive
            sexual education. Here, you'll discover the basics of sexual health,
            covering topics from anatomy to safe practices and contraception
            methods. Dive into engaging articles that provide in-depth insights,
            and explore a curated FAQ section addressing common questions. Equip
            yourself with the knowledge needed to make informed decisions about
            your sexual well-being.
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
      <v-col cols="9">
        <v-card
          class="d-flex aling-center pa-5 rounded-xl black--text mb-8"
          :img="
            require('@/assets/backgrounds/semiback' +
              Math.floor(Math.random() * 6) +
              '.png')
          "
        >
          <div class="mx-5">
            <h1 class="font-weight-medium">Very Interesting Topic</h1>
            <h3 class="font-weight-regular">
              Very interesting description: Lorem ipsum dolor sit amet. Cum
              consequatur voluptas nam cumque quaerat ut cupiditate sequi aut
              laborum pariatur ut nemo nostrum ea aliquid culpa. Et rerum
              accusantium sit nesciunt sunt eos provident provident. Est ullam
              expedita sed quia sequi eos aperiam excepturi qui necessitatibus
              odio. Qui alias obcaecati non rerum dolor quo animi fugit vel
              repellendus consequuntur qui fugiat officiis ad omnis consequatur.
              Non consequatur itaque quo alias veniam sed voluptatum illum At
              voluptas libero. Eos rerum sapiente sit galisum quia qui sunt
              voluptatum et minima cumque. Aut eligendi minima in fugiat omnis
              sed ratione ullam non galisum harum. Quo placeat perspiciatis et
              minus consequatur et dolorem rerum non quae delectus. Qui Quis
              deleniti non quos voluptatem eum placeat necessitatibus ut
              sapiente aspernatur non sequi galisum. Est deserunt placeat eos
              expedita dolores ab facere facilis cum explicabo repellat ab vitae
              labore. Aut earum ipsa non odio excepturi ea adipisci recusandae
              qui eligendi illo et omnis maxime nam explicabo omnis ex cumque
              unde. Non labore impedit aut labore laboriosam eum iste architecto
              ut libero galisum?
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
            <h1 class="font-weight-medium">Very Interesting Topic</h1>
            <h3 class="font-weight-regular">
              Very interesting description: Lorem ipsum dolor sit amet. Cum
              consequatur voluptas nam cumque quaerat ut cupiditate sequi aut
              laborum pariatur ut nemo nostrum ea aliquid culpa. Et rerum
              accusantium sit nesciunt sunt eos provident provident. Est ullam
              expedita sed quia sequi eos aperiam excepturi qui necessitatibus
              odio. Qui alias obcaecati non rerum dolor quo animi fugit vel
              repellendus consequuntur qui fugiat officiis ad omnis consequatur.
              Non consequatur itaque quo alias veniam sed voluptatum illum At
              voluptas libero. Eos rerum sapiente sit galisum quia qui sunt
              voluptatum et minima cumque. Aut eligendi minima in fugiat omnis
              sed ratione ullam non galisum harum. Quo placeat perspiciatis et
              minus consequatur et dolorem rerum non quae delectus. Qui Quis
              deleniti non quos voluptatem eum placeat necessitatibus ut
              sapiente aspernatur non sequi galisum. Est deserunt placeat eos
              expedita dolores ab facere facilis cum explicabo repellat ab vitae
              labore. Aut earum ipsa non odio excepturi ea adipisci recusandae
              qui eligendi illo et omnis maxime nam explicabo omnis ex cumque
              unde. Non labore impedit aut labore laboriosam eum iste architecto
              ut libero galisum?
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
