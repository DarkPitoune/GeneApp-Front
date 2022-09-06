<template>
  <div class="frame">
    <slot />
  </div>
</template>

<script>
export default {
  name: "FrameComponent",
}
</script>

<style>
.frame {
  background-color: var(--bg-color);
  width: 80%;
  margin: 1.5em auto;
  padding: 1em;
  border-radius: 0.8em;
  box-shadow: 0 0 0.5em #dddddd;
}
</style>
