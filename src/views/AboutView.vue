<template>
  <website-page title="About Page" desc="welocme to about page">
    <template v-slot:content>
      <card-item
        :showcontent="true"
        :showactions="true"
        background="linear-gradient(80deg,lightgreen,yellow)"
      >
        <template v-slot:content>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            nostrum quasi eveniet. Quibusdam minima tenetur nobis reiciendis
            alias, consequuntur hic dolore voluptatum illo ut placeat quaerat
            eligendi reprehenderit beatae fugit?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim iusto
            ea quisquam fuga amet, qui tenetur facilis esse? Accusamus dicta
            eveniet natus aperiam ipsa, ab molestiae cum ratione rem
            voluptatibus!
          </p>
        </template>
        <template v-slot:buttons>
          <blog-button background="lightred" title="visit us"></blog-button>
          <blog-button
            color="black"
            title="contact us"
            background="green"
          ></blog-button>
          <blog-button color="black" background="blue"></blog-button>
        </template>
      </card-item>
    </template>
  </website-page>
</template>


<script>
import WebsitePage from "@/components/WebsitePage.vue";
import CardItem from "@/components/CardItem.vue";
import BlogButton from "@/components/BlogButton.vue";
export default {
  components: {
    WebsitePage,
    CardItem,
    BlogButton,
  },
};
</script>