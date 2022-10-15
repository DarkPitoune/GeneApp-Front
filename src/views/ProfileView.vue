<template>
  <FrameComponent>
    <h1>{{ profileInfo.Nom }}</h1>
    <DescriptionCard
      :nom="profileInfo.Nom"
      :naissance="profileInfo.Naissance"
      :mort="profileInfo.Mort"
      :mariage="profileInfo.Mariage"
      :parents="profileInfo.Parents"
      :conjoint="profileInfo.Conjoint"
      :enfants="profileInfo.Enfants"
    />
    <hr class="hidden-mobile"/>
    <Markdown :source="profileInfo.Biographie" />
  </FrameComponent>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import api from '@/api'
import { FrameComponent, DescriptionCard } from '@/components'
import Markdown from 'vue3-markdown-it'

export default defineComponent({
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
    fetchProfile: async function () {
      const id = this.$route.params.id
      api.get('/personnes/' + id + '?populate=*')
      .then((response) => {
        this.profileInfo = response.data.data.attributes
      })
    },
  },
  beforeMount() {
    this.fetchProfile()
  },
})
</script>

<style scoped>
h1 {
  margin: 0;
  font-size: 3em;
}
</style>
