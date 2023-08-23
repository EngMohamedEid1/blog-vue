<template>
  <card-item
    :showheader="true"
    :showmedia="true"
    :showcontent="true"
    :showactions="true"
    background="linear-gradient(80deg,lightgreen,yellow)"
  >
    <template v-slot:image>
      <img
        class="rounded-circle"
        :src="`https://picsum.photos/id/${id}/250/250`"
        alt=""
      />
    </template>
    <template v-slot:header>
      <h2>{{ title }}</h2>
    </template>
    <template v-slot:content>
      {{ description }}
    </template>
    <template v-slot:buttons>
      <blog-button
        :link="`/blog/${id}`"
        background="white"
        title="visit us"
      ></blog-button>
    </template>
  </card-item>
</template>

<script>
import CardItem from "@/components/CardItem.vue";
import BlogButton from "@/components/BlogButton.vue";
export default {
  components: {
    CardItem,
    BlogButton,
  },
  props: {
    id: String,
    title: String,
    description: String,
  },
};
</script>