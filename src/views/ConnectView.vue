<template>
  <v-container class="mb-15">
    <v-row class="mb-15">
      <v-spacer></v-spacer>
      <v-col cols="5">
        <div class="d-flex flex-row justify-center">
          <div class="text-left mr-n5">
            <h1 class="display-1 font-weight-bold pt-5 pb-3">Connect</h1>
            <h3 class="font-weight-regular">
              Embark on a journey of open discourse and support in this section.
              This space is designed for anonymous engagement, providing a forum
              where you can freely share your experiences, seek advice, and
              participate in discussions related to sexual education. Connect
              with a community of individuals navigating similar paths, ask
              questions, and contribute to an environment that fosters
              understanding and empathy. Your voice matters, and here, it is
              heard without judgment!
            </h3>
          </div>
          <v-img
            :src="require('@/assets/clipart/heart.svg')"
            height="300"
            contain
            class="ml-n10 mt-5"
          />
        </div>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-row class="mt-10">
      <v-spacer></v-spacer>
      <v-col cols="6">
        <v-card
          fill-height
          fluid
          outline
          color="primary40"
          class="pa-5 rounded-xl white--text"
          min-height="30rem"
        >
          <v-row class="py-3 align-center">
            <v-icon
              class="pb-1 mx-3 back-button"
              :style="this.currentThread != null ? 'opacity: 1' : 'opacity: 0'"
              color="white"
              @click="setCurrentThread(null)"
              >mdi-keyboard-backspace</v-icon
            >
            <h1 class="font-weight-bold">FORUM</h1>
          </v-row>

          <v-divider class="mb-5" />
          <threadComponent
            v-if="this.currentThread != null"
            :thread="this.currentThread"
          />
          <v-expansion-panels v-else accordion multiple>
            <v-expansion-panel v-for="topic in mainTopics" :key="topic.title">
              <v-expansion-panel-header color="primary30">
                <h2 class="font-weight-regular">{{ topic.title }}</h2>
              </v-expansion-panel-header>
              <v-expansion-panel-content color="primary10" class="pt-8">
                <v-row class="px-1 mx-1">
                  <h4 class="font-weight-regular mb-5">{{ topic.subtitle }}</h4>
                </v-row>

                <v-row
                  v-for="thread in topic.threads"
                  :key="thread.title"
                  class="justify-space-between align-center pa-2 mb-1 border rounded-lg mx-1 hover-zoom"
                  @click="setCurrentThread(thread)"
                >
                  <div>
                    <h4>{{ thread.title }}</h4>
                    <h5 class="font-weight-regular">
                      {{ thread.description }}
                    </h5>
                  </div>
                  <h4>{{ thread.created_at }}</h4>
                </v-row>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </v-col>

      <v-spacer></v-spacer>
    </v-row>
  </v-container>
</template>
<script>
import threadComponent from "@/components/threadComponent.vue";

export default {
  components: {
    threadComponent,
  },
  data: function () {
    return {
      currentThread: null,
      mainTopics: [
        {
          title: "Sexual Education Basics",
          subtitle:
            "Anatomy and Physiology, Puberty and Development, Safe Sex Practices and Contraception Methods",
          //PILLAR THREADS BACK Y CLASIFICARLOS
            threads: [
            {
              description: "We explain the basics of how to use a condom",
              id: 2,
              title: "Best way to use a condom",
              theme: "Sexual Education Basics",
              creator: 2,
              created_at: "2023-12-17",
              likes: 0,
            },
            {
              description: "How do I know if I have an STD?",
              id: 2,
              title: "Do I have an STD?",
              theme: "Sexual Education Basics",
              creator: 2,
              created_at: "2023-12-16",
              likes: 0,
            },
          ],
        },
        {
          title: "Relationships and Communication",
          subtitle:
            "Building Healthy Relationships, Effective Communication in Intimate Settings, Consent and Boundaries, Navigating Relationship Challenges",
          threads: [
            {
              description: "We explain the basics of how to use a condom",
              id: 2,
              title: "Best way to use a condom",
              theme: "Sexual Education Basics",
              creator: 2,
              created_at: "2023-12-17",
              likes: 0,
            },
            {
              description: "How do I know if I have an STD?",
              id: 2,
              title: "Do I have an STD?",
              theme: "Sexual Education Basics",
              creator: 2,
              created_at: "2023-12-16",
              likes: 0,
            },
          ],
        },
        {
          title: "LGBTQ+ Topics",
          subtitle:
            "LGBTQ+ Sexual Health, Coming Out Stories and Advice and LGBTQ+ Relationships",
          threads: [
            {
              description: "We explain the basics of how to use a condom",
              id: 2,
              title: "Best way to use a condom",
              theme: "Sexual Education Basics",
              creator: 2,
              created_at: "2023-12-17",
              likes: 0,
            },
            {
              description: "How do I know if I have an STD?",
              id: 2,
              title: "Do I have an STD?",
              theme: "Sexual Education Basics",
              creator: 2,
              created_at: "2023-12-16",
              likes: 0,
            },
          ],
        },
        {
          title: "FAQs and Q&A",
          subtitle:
            "General Questions and Answers, Ask the Experts and Common Concerns and Clarifications",
          threads: [
            {
              description: "We explain the basics of how to use a condom",
              id: 2,
              title: "Best way to use a condom",
              theme: "Sexual Education Basics",
              creator: 2,
              created_at: "2023-12-17",
              likes: 0,
            },
            {
              description: "How do I know if I have an STD?",
              id: 2,
              title: "Do I have an STD?",
              theme: "Sexual Education Basics",
              creator: 2,
              created_at: "2023-12-16",
              likes: 0,
            },
          ],
        },
      ],
    };
  },
  methods: {
    setCurrentThread(thread) {
      this.currentThread = thread;
      console.log(this.currentThread);
    },
  },
};
</script>
<style lang="scss" scoped>
.border {
  border: 1px solid black;
}

.back-button {
  transition: opacity 0.3s ease-in-out;
}
.hover-zoom {
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
}
</style>
