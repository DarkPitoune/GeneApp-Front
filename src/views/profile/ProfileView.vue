<template>
  <FrameComponent>
    <DescriptionCard
      :nom="profileInfo.Nom"
      :naissance="profileInfo.Naissance"
      :mort="profileInfo.Mort"
      :mariage="profileInfo.Mariage"
      :parents="profileInfo.Parents"
      :conjoint="profileInfo.Conjoint"
      :enfants="profileInfo.Enfants"
    />
    <h1>{{ profileInfo.Nom }}</h1>
    <hr />
    <Markdown :source="profileInfo.Biographie" />
  </FrameComponent>
</template>

<script>
import api from '/src/api'
import { FrameComponent, DescriptionCard } from '@/components'
import Markdown from 'vue3-markdown-it'

const fetchProfile = async function () {
  const id = this.$route.params.id
  api.get('/personnes/' + id + '?populate=*').then((response) => {
    this.profileInfo = response.data.data.attributes
  })
}

export default {
  name: 'ProfileView',
  data() {
    return {
      profileInfo: {},
    }
  },
  components: {
    FrameComponent,
    Markdown,
    DescriptionCard,
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
  font-size: 3em;
}
</style>
