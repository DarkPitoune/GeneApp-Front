<template>
  <div class="home">
    <HelloWorld msg="Bienvenue sur l'app de généalogie d'Hébrail" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { HelloWorld } from "@/components";

export default defineComponent({
  name: "HomeView",
  components: {
    HelloWorld,
  },
});
</script>
