<template>
  <div id="hello">
    <h1>{{ msg }}</h1>
    <p>Cette page est en travaux, revenez plus tard 😁</p>
    <p>Cliquez sur un des profils ci-dessous pour commencer à naviguer</p>
    <div>
      <ul v-for="profile in people" :key="profile.id">
        <li>
          <router-link :to="'/profile/' + profile.id">
            {{ profile.attributes.Nom }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import api from '@/api'
export default defineComponent({
  name: 'HelloWorld',
  data() {
    return {
      people: {},
    }
  },
  props: {
    msg: String,
  },
  methods: {
    fetchPeople() {
      api.get('/personnes/').then(response => {
        this.people = response.data.data
      })
    },
  },
  created() {
    this.fetchPeople()
  },
})
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

#hello {
  text-align: center;
  margin: auto;
}
</style>
