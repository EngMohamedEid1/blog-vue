<template>
  <website-header
    title="my website"
    describtion="my smart blog"
  ></website-header>
  <router-view></router-view>
</template>

<script>
import WebsiteHeader from "./components/WebsiteHeader.vue";
import posts from "../posts.json";
export default {
  components: { WebsiteHeader },
  name: "App",
  data() {
    return {
      posts,
    };
  },
  provide() {
    return {
      posts: this.posts,
    };
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
</style>
