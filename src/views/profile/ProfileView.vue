<template>
  <FrameComponent>
    <h1>{{ profile.first_name }} {{ profile.last_name }}</h1>
    <p>Né le {{ profile.birth_date }}</p>
    <p>Mort le {{ profile.death_date }}</p>
    <p>{{ profile.biography }}</p>
  </FrameComponent>
</template>

<script>
import axios from 'axios'
import { FrameComponent } from '@/components'

const fetchProfile = async function () {
  axios.get(process.env.VUE_APP_API_URL + 'profile/1').then((response) => {
    this.profile = response.data
  })
}

export default {
  name: 'ProfileView',
  data() {
    return {
      profile: {},
    }
  },
  components: {
    FrameComponent,
  },
  methods: {
    fetchProfile,
  },
  mounted() {
    this.fetchProfile()
  },
}
</script>

<style scoped>
h1 {
  margin: 0;
}
</style>
