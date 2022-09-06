<template>
  <FrameComponent>
    <form>
      <input type="text" v-model="first_name" placeholder="Prénom" />
      <input type="text" v-model="last_name" placeholder="Nom" />
      <input type="text" v-model="birth_date" placeholder="Date de naissance" />
      <input type="text" v-model="death_date" placeholder="Date de décès" />
      <input type="text" v-model="description" placeholder="Description" />
    </form>
  </FrameComponent>
</template>

<script>
import { FrameComponent } from '@/components'

export default {
  name: 'EditProfileView',
  components: {
    FrameComponent,
  },
}
</script>
