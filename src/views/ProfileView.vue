<template>
  <FrameComponent>
    <h1>
      <LoaderComponent type="title" v-if="!profileInfo?.Nom" />
      <span v-else>{{ profileInfo.Nom }} </span>
    </h1>
    <DescriptionCard :profileInfo="profileInfo" />
    <hr class="hidden-mobile" />
    <Markdown :source="profileInfo?.Biographie ?? ''" />
    <LoaderComponent type="text" v-if="!profileInfo?.Biographie" />
  </FrameComponent>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import api from "@/api";
import { FrameComponent, DescriptionCard, LoaderComponent } from "@/components";
import Markdown from "vue3-markdown-it";
import { ProfileInfoInterface } from "@/interfaces";

export default defineComponent({
  name: "ProfileView",
  data() {
    return {
      profileInfo: {} as ProfileInfoInterface,
    };
  },
  components: {
    FrameComponent,
    Markdown,
    DescriptionCard,
    LoaderComponent,
  },
  methods: {
    fetchProfile: async function () {
      const id = this.$route.params.id;
      api
        .get("/personnes/" + id + "?populate=*")
        .then((response) => response.data)
        .then((data) => data.data)
        .then((data) => data.attributes)
        .then((attributes) => {
          this.profileInfo = attributes;
        });
    },
  },
  beforeMount() {
    this.fetchProfile();
  },
});
</script>

<style scoped>
h1 {
  margin: 0;
  font-size: 3em;
}
@media (max-width: 768px) {
  h1 {
    font-size: 2.5em;
  }
}
</style>
