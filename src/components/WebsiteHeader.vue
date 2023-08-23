<template>
  <div
    class="header d-flex justify-content-evenly text-light align-items-center"
  >
    <div class="header-logo">
      <h1 class="header-heading fs-4">{{ title }}</h1>
      <p class="header-text fs-6">{{ describtion }}</p>
    </div>
    <div class="header-nav d-flex">
      <router-link class="nav-link" to="/">Home</router-link>
      <router-link class="nav-link" to="/blog">Blog</router-link>
      <router-link class="nav-link" to="/about">About</router-link>
    </div>
  </div>
</template>

<style scoped>
.header {
  background: #333;
}
.header-logo {
  display: flex;
}

.header-heading {
  font-size: 23px;
}
.header-text {
  margin: 18px;
}
.header-heading {
  font-size: 1.4rem;
  margin-right: 0.5rem;
}

.nav-link {
  text-decoration: none;
  color: #fff;
  margin-right: 1rem;
  font-size: 18px;
}

.nav-link:hover {
  cursor: pointer;
  opacity: 0.8;
}
</style>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    describtion: {
      type: String,
    },
  },
};
</script>