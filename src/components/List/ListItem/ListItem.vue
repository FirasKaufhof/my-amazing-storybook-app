<template>
  <tag :is="tag">
    {{text}}
    <slot></slot>
  </tag>
</template>

<style scoped>
  @import "./ListItem.css";
</style>
<script>
export default {
  name: "ListItem",
  props: {
    tag: {
      type: String,
      default: 'li'
    },
    text: {
      type: String,
    },
  }
};
</script>
