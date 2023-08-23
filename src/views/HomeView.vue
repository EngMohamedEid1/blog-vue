<template>
  <website-page desc="hello from home page" title="Home page">
    <template v-slot:content>
      <div class="d-flex flex-wrap">
        <card-item
          showmedia
          showcontent
          showheader
          showactions
          background="lightblue"
          color="red"
        >
          <template v-slot:image>
            <img src="../assets/logo.png" alt="pic" />
          </template>
          <template v-slot:header> New Offer </template>
          <template v-slot:content> Here you can check our new offer </template>
          <template v-slot:buttons>
            <blog-button background="red" color="white"></blog-button>
            <blog-button></blog-button>
          </template>
        </card-item>
        <card-item showheader showcontent background="lightgreen" color="black">
          <template v-slot:header>
            <h2>Who Are You ?</h2>
          </template>
          <template v-slot:content>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            veritatis nulla reiciendis illum magnam delectus pariatur totam quos
            harum placeat, consectetur veniam
          </template>
        </card-item>
        <card-item
          showheader
          showactions
          background="linear-gradient(30deg,lightblue,lightgreen)"
        >
          <template v-slot:header>
            <h2>Wanna pick this offer</h2>
          </template>
          <template v-slot:buttons>
            <BlogButton
              background="#fff"
              :widthnum="true"
              :fullwidth="true"
            ></BlogButton>
          </template>
        </card-item>
      </div>
    </template>
  </website-page>
</template>

<script>
import WebsitePage from "@/components/WebsitePage.vue";
import CardItem from "@/components/CardItem.vue";
import BlogButton from "@/components/BlogButton.vue";
export default {
  components: { WebsitePage, CardItem, BlogButton },
};
</script>