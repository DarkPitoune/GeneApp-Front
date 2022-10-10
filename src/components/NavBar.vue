<template>
  <nav>
    <div id="title">
      <router-link to="/">
        <img src="/icons/left-arrow.svg" alt="logo" />
      </router-link>
      <h1>Généalogie d'Hébrail</h1>
    </div>
    <div>ICON</div>
  </nav>
</template>

<style scoped>
nav {
  padding: 1.5em;
  background-color: var(--main-blue);
  color: var(--bg-color);
  display: flex;
  justify-content: space-between;
}

#title {
  display: flex;
  flex-direction: row;
}

h1 {
  margin: 0;
  padding: 0 0.5em;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "NavBar",
});
</script>
