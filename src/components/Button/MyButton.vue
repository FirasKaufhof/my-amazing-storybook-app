<template>
  <div>
    <button @click="onClick" :class="{'button--rounded ': isRounded}" class="button" :disabled="isDisabled">{{ label }}</button>
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
    },
    isRounded: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    onClick() {
      this.$emit('click')
    }
  }
};
</script>
