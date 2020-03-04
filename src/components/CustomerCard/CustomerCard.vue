<template>
  <div :style="{'background-color': this.color}" class="card">
    <div class="logo">
      <img
        src="https://www.galeria.de/on/demandware.static/Sites-Galeria-Site/-/de/v1581938951359/images/logos/galeria-logo.svg"
        alt
      />
    </div>
    <div>Name: {{name}}</div>
    <div>Points: {{points}}</div>
    <div>Class: {{cardClass}}</div>
    <div>Expiration: {{formattedDate}}</div>
    <div>Valid: {{cardStatus}}</div>
  </div>
</template>

<style scoped>
@import "./CustomerCard.css";
</style>
<script>
export default {
  name: "CustomerCard",
  props: {
    name: {
      default: "Firas Ouertani"
    },
    points: {
      type: Number,
      default: 300
    },
    cardClass: {
      type: String,
      validator: value => {
        return ["Gold", "Bronze", "Silver"].indexOf(value) > -1;
      },
      default: "Silver"
    },
    color: {
      type: String,
      default: "#fff"
    },
    expirationDate: {
      type: Date,
      default: () =>
        new Date()
    },

    verified: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    cardStatus() {
      return this.verified ? "Verified" : "Not Verified";
    },
    formattedDate() {
      return new Date(this.expirationDate).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "UTC"
        });
    }
  }
};
</script>
