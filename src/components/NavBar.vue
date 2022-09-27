<template>
  <nav>
    <div id="title">
      <router-link to="/">
        <img src="/icons/left-arrow.svg" alt="logo" />
      </router-link>
      <h1>Généalogie d'Hébrail</h1>
    </div>
    <div>
      <unicon name="search" fill="white" />
    </div>
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

<script>
export default {
  name: "NavBar",
};
</script>
