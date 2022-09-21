<template>
  <div id="hello">
    <h1>{{ msg }}</h1>
    <p>Cette page est en travaux, revenez plus tard 😁</p>
    <p>Cliquez sur un des profils ci-dessous pour commencer à naviguer</p>
    <div>
      <ul v-for="profile in people" :key="profile.id">
        <li>
          <p>Type of profile.attributes is {{ typeof profile.attributes }}</p>
        </li>
        <li>
          <router-link :to="'/profile/' + profile.id">
            {{ profile.attributes.Nom }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const fetchPeople = async function () {
  axios
    .get(process.env.VUE_APP_API_URL + "personnes/", {
      headers: {
        Authorization: "Bearer " + process.env.VUE_APP_BEARER_TOKEN,
      },
    })
    .then((response) => {
      this.people = response.data.data;
    });
};
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      people: {},
    };
  },
  methods: {
    fetchPeople,
  },
  mounted() {
    this.fetchPeople();
  },
};
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
