<template>
  <div class="home">
    <IndexView />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IndexView } from "@/components";

export default defineComponent({
  name: "HomeView",
  components: {
    IndexView,
  },
});
</script>
