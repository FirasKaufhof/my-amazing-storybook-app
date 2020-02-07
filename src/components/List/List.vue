<template>
  <div>
    <tag :is="tag" :type="type">
        <slot></slot>
    </tag>
  </div>
</template>

<style scoped>
@import "./List.css";
</style>
<script>
export default {
  name: "List",
  props: {
    type: {
      type: String,
      required: true
    },
    tag: {
      type: String,
      default: 'ul',
      validator: value => {
        return ["ul", "ol", "dl"].indexOf(value) > -1;
      }
    }
  }
};
</script>
