<template>
  <website-page title="Blog Page" desc="welocme to Blog page">
    <template v-slot:content>
      <div class="posts justify-content-evenly d-flex flex-wrap">
        <BlogPost
          v-for="post in posts"
          :key="post.id"
          :title="post.title"
          :description="post.description"
          :id="post.id"
          class="one"
        ></BlogPost>
      </div>
    </template>
  </website-page>
</template>
  
  
  <script>
import WebsitePage from "@/components/WebsitePage.vue";
import BlogPost from "@/components/BlogPost.vue";
export default {
  components: {
    WebsitePage,

    BlogPost,
  },
  inject: ["posts"],
};
</script>

<style scoped>
</style>