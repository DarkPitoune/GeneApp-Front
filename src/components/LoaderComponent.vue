<template>
  <div class="loader-container">
    <div class="loader">
      <div class="inner-loader"></div>
    </div>
    <div class="loader" v-if="type === 'text'">
      <div class="inner-loader"></div>
    </div>
    <div class="loader" v-if="type === 'text'">
      <div class="inner-loader"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoaderComponent",
  props: {
    type: {
      type: String,
      default: "title",
    },
  },
});
</script>

<style scoped>
.loader-container {
  display: flex;
  flex-direction: column;
  gap: 1em;
}
.loader {
  background-color: #e1e1e1;
  border-radius: 0.5em;
  height: 1em;
  width: 20ch;
  overflow: hidden;
}

.loader:nth-child(2) {
  width: 25ch;
}
.loader:nth-child(3) {
  width: 15ch;
}

.inner-loader {
  background-color: #bfbfbf;
  border-radius: 0.5em;
  height: 1em;
  width: 50%;
  animation: loading 2s infinite ease-in-out;
}
@keyframes loading {
  0% {
    width: 0%;
    opacity: 100%;
  }
  100% {
    width: 100%;
    opacity: 0%;
  }
}
</style>
