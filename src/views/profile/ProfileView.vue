<template>
  <FrameComponent>
    <DescriptionCard :info="{bonjour: 'zob'}" />
    <h1>{{ profileInfo.Nom }}</h1>
    <p>{{ profileInfo.Naissance }}</p>
    <hr />
    <Markdown :source="profileInfo.Biographie" />
  </FrameComponent>
</template>

<script>
import api from "/src/api";
import { FrameComponent, DescriptionCard } from "@/components";
import Markdown from "vue3-markdown-it";

const fetchProfile = async function () {
  const id = this.$route.params.id;
  api
    .get("/personnes/" + id)
    .then((response) => {
      this.profileId = response.data.data.Id;
      this.profileInfo = response.data.data.attributes;
    });
};

export default {
  name: "ProfileView",
  data() {
    return {
      profile: {},
      profileInfo: {},
    };
  },
  components: {
    FrameComponent,
    Markdown,
    DescriptionCard
  },
  methods: {
    fetchProfile,
  },
  mounted() {
    console.log(this.profileInfo);
    this.fetchProfile();
  },
};
</script>

<style scoped>
h1 {
  margin: 0;
  font-size: 3em;
}
</style>
