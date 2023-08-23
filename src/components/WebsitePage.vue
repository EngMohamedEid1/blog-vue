<template>
  <div class="page-container">
    <div class="page-header p-3 text-center">
      <h1 class="page-heading">{{ title }}</h1>
      <p class="page-describtion">{{ desc }}</p>
    </div>
    <div class="page-content w-75">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    desc: {
      type: String,
    },
  },
};
</script>

<style scoped>
.page-header {
  background: #eee;
  padding: 1rem;
}
.page-content {
  margin: 2rem auto;
}
</style>

