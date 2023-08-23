<template>
  <website-page :title="post.title" :desc="post.description">
    <template v-slot:content>
      <card-item
        :showcontent="true"
        :showactions="false"
        background="#333333"
        color="white"
      >
        <template v-slot:content>
          <h2>{{ postID }}</h2>
          <p>
            {{ post.content }}
          </p>
        </template>
      </card-item>
    </template>
  </website-page>
</template>


  
  
  <script>
import WebsitePage from "@/components/WebsitePage.vue";
import CardItem from "@/components/CardItem.vue";
export default {
  components: {
    WebsitePage,
    CardItem,
  },
  inject: ["posts"],
  data() {
    return {
      postID: this.$route.params.id,
      post: this.getpost(),
    };
  },
  methods: {
    getpost() {
      const post = this.posts.find((p) => p.id === this.$route.params.id);
      return (
        post || {
          id: 0,
          title: "no post",
          content: "no content",
          description: "no description",
        }
      );
    },
  },
};
</script>
