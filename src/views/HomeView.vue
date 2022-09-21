<template>
  <div class="home">
    <HelloWorld msg="Bienvenue sur l'app de généalogie d'Hébrail" />
  </div>
</template>

<script>
import { HelloWorld } from "@/components";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>
