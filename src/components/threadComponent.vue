<template>
  <v-card class="pa-5 rounded-lg primary10">
    <v-row class="pa-5 justify-space-between align-center">
      <div>
        <h2 class="font-weight-medium">{{ thread.title }}</h2>
        <h3 class="font-weight-regular">{{ thread.description }}</h3>
      </div>
      <div class="text-right">
        <h4>Topic:</h4>
        <h4 class="font-weight-regular">{{ thread.theme }}</h4>
      </div>
    </v-row>
    <v-divider class="mb-6" />
    <v-row
      v-for="comment in comments"
      :key="comment.id"
      class="mx-1 mb-3 border pa-3 rounded-lg primary20 align-center"
    >
      <v-img
        :src="
          'https://xsgames.co/randomusers/assets/avatars/pixel/' +
          (comment.creator % 53) +
          '.jpg'
        "
        max-height="70"
        max-width="70"
        class="rounded-pill border mr-2"
      />
      <v-row class="d-flex justify-space-between align-center px-5">
        <div>
          <h3>Anonymous said:</h3>
          <h3 class="pl-4 font-weight-regular">{{ comment.comment }}</h3>
        </div>
        <h3>{{ comment.date }}</h3>
      </v-row>
    </v-row>
    <div class="flex pa-2 text-center">
      <v-textarea
        prepend-inner-icon="mdi-comment"
        class="mx-2 mb-0"
        label="Insert Comment"
        rows="1"
        v-model="newComment"
        outlined
        :disabled="currentUser === null"
      ></v-textarea>
      <v-btn
       class="mt-0"
        elevation="2"
        large
        outlined
        raised
        min-width="10rem"
        :disabled="currentUser === null"
        @click="addComment"
        >SEND</v-btn
      >
    </div>
  </v-card>
</template>
<script>
import axios from 'axios'


export default {
  data: () => ({

      currentUser: 5,
      newComment: "",
      comments: []
      // [
      //   {
      //     comment: "Esto es un comment",
      //     id: 1,
      //     thread: 2,
      //     creator: 2,
      //     date: "2023-12-16",
      //     likes: 0,
      //   },
      //   {
      //     comment: "Esto es otro comment",
      //     id: 2,
      //     thread: 2,
      //     creator: 3,
      //     date: "2023-12-16",
      //     likes: 0,
      //   },
      //   {
      //     comment: "Ala a ful de comments",
      //     id: 3,
      //     thread: 2,
      //     creator: 4,
      //     date: "2023-12-16",
      //     likes: 0,
      //   },
      // ],
    // };
  }),
  props: {
    thread: {
      type: Object,
      default: () => ({}),
      required: true,
    },
  },
  methods: {
    addComment() {

      // Only add a comment if the v-textarea is not empty
      if (this.newComment.trim() !== "") {
        this.comments.push({
          comment: this.newComment,
          id: this.comments.length + 1,
          thread: this.thread.id,
          creator: this.currentUser,
          date: new Date().toISOString().slice(0, 10),
          likes: 0,
        });
        this.newComment = ""; // Clear the v-textarea
        axios
        .post('http://localhost:8000/Bitsx/threads/'+this.thread.id+'/comments', {
          comment: this.newComment,
        })
        .then(response => {
          console.log(response.data);
          this.openChat(this.newSeat);
        })
        .catch(error => {
          console.log(error)
        })
      }
    },
  },
  mounted: 
  async function() {
    var comments = []
      console.log(this.thread)
      await axios
      .get('http://localhost:8000/Bitsx/threads/' + this.thread.id + '/comments' )
      .then(response => {
        console.log(response.data);
        comments = response.data;
        this.poolMessages();
      })
      .catch(error => {
        console.log(error)
      })
      this.comments = comments
  }
};
</script>
<style lang="scss" scoped>
.border {
  border: 1px solid black;
}
</style>
