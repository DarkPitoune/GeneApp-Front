<template>
  <NavBar></NavBar>
  <router-view />
</template>

<style>
@import "/public/theme.css";
body {
  /* Necessary to get rid of that untrackable margin (grrr) */
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  background-color: var(--light-blue);
}
</style>

<script>
import { NavBar } from "@/components";

export default {
  components: {
    NavBar,
  },
};
</script>
