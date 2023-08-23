<template>
  <div
    class="crd d-flex justify-content-around align-items-center p-3"
    :style="{ background: background, color: color }"
  >
    <div v-show="showmedia" class="crd-media">
      <slot name="image"></slot>
    </div>
    <div class="crd-details">
      <div v-show="showheader" class="crd-header">
        <slot name="header"></slot>
      </div>
      <div v-show="showcontent" class="crd-content">
        <slot name="content"></slot>
      </div>
      <div v-show="showactions" class="crd-actions">
        <slot name="buttons"> </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    background: {
      type: String,
    },
    color: {
      type: String,
    },
    showmedia: {
      type: Boolean,
    },
    showheader: {
      type: Boolean,
    },
    showcontent: {
      type: Boolean,
    },
    showactions: {
      type: Boolean,
    },
  },
};
</script>


<style scoped>
.crd {
  background: lightblue;
  border: 2px solid #eee;
  border-radius: 10px;
  margin: 1rem;
  box-shadow: 4px 4px 3px 3px #eee;
}
.crd:hover {
  cursor: pointer;
  box-shadow: 3px 3px 3px 3px rgb(189, 189, 189);
}
.crd-header {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
.crd-content {
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
}
.crd-media {
  margin-right: 20px;
}
</style>

