<template>
  <router-link
    :class="{ fullwidth: fullwidth, widthnum: widthnum }"
    class="button border-0 outline-0 m-2 p-2 fw-bold text-decoration-none"
    :to="link"
    :style="{ background: background, color: color }"
    >{{ title }}
  </router-link>
</template>


<script>
export default {
  props: {
    title: {
      type: String,
      default() {
        return "click here";
      },
    },
    background: {
      type: String,
    },

    color: {
      type: String,
    },
    link: {
      type: String,
      default() {
        return "/";
      },
    },
    fullwidth: {
      type: Boolean,
    },
    widthnum: {
      type: Boolean,
    },
  },
};
</script>


<style scoped>
.button {
  border-radius: 10px;
}
.button:hover {
  cursor: pointer;
  filter: brightness(90%);
}
.fullwidth {
  text-align: center;
}
.widthnum {
  width: 50%;
  display: block;
}
</style>