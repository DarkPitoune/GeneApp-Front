<template>
  <div class="frame">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "FrameComponent",
});
</script>

<style>
.frame {
  background-color: var(--bg-color);
  overflow: auto;
  padding: 1em;
}

@media (min-width: 768px) {
  .frame {
    width: 80%;
    margin: 1.5em auto;
    border-radius: 0.8em;
    box-shadow: 0 0 0.5em #dddddd;
  }
}
</style>
