<template>
  <FrameComponent>
    <h1>{{ profileInfo.Nom }}</h1>
    <DescriptionCard
      :profileInfo="profileInfo"
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
      .then((response) => response.data)
      .then((data) => data.data)
      .then((data) => data.attributes)
      .then((attributes) => {
        this.profileInfo = attributes
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
