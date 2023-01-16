<template>
  <nav>
    <div id="title">
      <span @click="goBack()">
        <font-awesome-icon icon="fa-solid fa-chevron-left" />
      </span>
      <h1>Généalogie d'Hébrail</h1>
    </div>
    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
  </nav>
</template>

<style scoped>
nav {
  padding: 1.5em;
  background-color: var(--main-blue);
  color: var(--bg-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#title {
  display: flex;
  flex-direction: row;
  align-items: center;
}

h1 {
  margin: 0;
  padding: 0 0.5em;
}

/* Font Awesome */
.svg-inline--fa {
  color: var(--bg-color) !important;
  cursor: pointer;
  font-size: 1.2em;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "NavBar",
  methods: {
    goBack() {
      window.history.back();
    },
  },
});
</script>
