<template>
  <FrameComponent>
    <h1>{{ detailsInfo.Titre }}</h1>
    <Markdown :source="articleInfo.Description" />
  </FrameComponent>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import api from "@/api";
import { FrameComponent } from "@/components";
import Markdown from "vue3-markdown-it";

export default defineComponent({
  name: "DetailsView",
  data() {
    return {
      detailsInfo: {},
    };
  },
  components: {
    FrameComponent,
    Markdown,
  },
  methods: {
    fetchDetails: async function () {
      const id = this.$route.params.id;
      api
        .get("/articles/" + id + "?populate=*")
        .then((response) => response.data)
        .then((data) => data.data)
        .then((data) => data.attributes)
        .then((attributes) => {
          this.detailsInfo = attributes;
        });
    },
  },
  beforeMount() {
    this.fetchDetails();
  },
});
</script>
