<template>
  <div id="not-found">
    <h1>Malaise 😅</h1>
    <h2>Page inexistante</h2>
    <p>
      Soit c'est toi qui a tapé n'importe quoi dans la barre d'adresse, soit
      c'est que le dev a encore du travail !
    </p>
    <router-link to="/">Revenir à la maison</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "NotFoundView",
});
</script>

<style scoped>
#not-found {
  text-align: center;
  margin-top: 20px;
}
</style>
