<template>
  <div>
    <button class="button" :disabled="isDisabled">{{ label }}</button>
  </div>
</template>

<style scoped>
  @import "./Button.css";
</style>
<script>
export default {
  name: "MyButton",
  props: {
    label:  {
      type: String,
    },
    isDisabled: {
      type: Boolean,
      default: false,
      required: true,
    }
  }
};
</script>
