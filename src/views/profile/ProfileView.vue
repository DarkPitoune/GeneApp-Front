<template>
  <FrameComponent>
    <h1>{{ profileInfo.Nom }}</h1>
    <hr />
    <p>Né le {{ profileInfo.Naissance }}</p>
    <p>Mort le {{ profileInfo.Mort }}</p>
    <Markdown :source="profileInfo.Biographie" />
  </FrameComponent>
</template>

<script>
import axios from "axios";
import { FrameComponent } from "@/components";
import Markdown from "vue3-markdown-it";

const fetchProfile = async function () {
  const id = this.$route.params.id;
  axios
    .get(process.env.VUE_APP_API_URL + "personnes/" + id, {
      headers: {
        Authorization: "Bearer " + process.env.VUE_APP_BEARER_TOKEN,
      },
    })
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
  },
  methods: {
    fetchProfile,
  },
  mounted() {
    this.fetchProfile();
  },
};
</script>

<style scoped>
h1 {
  margin: 0;
}
</style>
