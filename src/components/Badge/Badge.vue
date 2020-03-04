<template>
  <div class="badge" :style="style()">
    {{status}}
  </div>
</template>
<style scoped>
@import "./Badge.css";
</style>
<script>
import PropTypes from 'prop-types'

export default {
  name: "Badge",
  props: {
    status:  {
      type: String,
      default: 'neutral'
          },
  },
  propTypes: {
      status: PropTypes.oneOf(['positive', 'negative', 'warning', 'error', 'neutral']),
  },
  methods: {
      style() {
          if (this.status === 'error') {
              return {'background-color': '#cc0000', color: '#fff'}
          } else if (this.status === 'positive') {
              return {'background-color': '#326369', color: '#fff'}
          } else if (this.status === 'negative') {
              return {'background-color': '#ff4500', color: '#fff'}
          } else if (this.status === 'warning') {
              return {'background-color': '#e4bc04', color: '#fff'}
          } else {
              return {'background-color': '#d9d9d9', color: '#fff'}
          }
      }
  }
};
</script>
