<template>
  <div id="hello">
    <h1>Bienvenue sur l'app de généalogie d'Hébrail</h1>
    <p>Cliquez sur un des liens ci-dessous pour commencer à naviguer</p>
    <div id="links">
      <div>
        <h3>Les gens</h3>
        <ul v-for="profile in people" :key="profile.id">
          <li>
            <router-link :to="'/profile/' + profile.id">
              {{ profile.attributes.Nom }}
            </router-link>
          </li>
        </ul>
      </div>
      <div>
        <h3>Les articles</h3>
        <ul v-for="article in articles" :key="article.id">
          <li>
            <router-link :to="'/article/' + article.id">
              {{ article.attributes.Titre }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import api from "@/api";

interface People {
  id: string;
  attributes: {
    Nom: string;
  };
}
interface Articles {
  id: string;
  attributes: {
    Titre: string;
  };
}

export default defineComponent({
  name: "IndexView",
  data() {
    return {
      people: [] as People[],
      articles: [] as Articles[],
    };
  },
  methods: {
    fetchPeople() {
      api.get("/personnes/").then((response) => {
        this.people = response.data.data;
      });
    },
    fetchArticles() {
      api.get("/articles/").then((response) => {
        this.articles = response.data.data;
      });
    },
  },
  created() {
    this.fetchPeople();
    this.fetchArticles();
  },
});
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

#hello {
  text-align: center;
  margin: auto;
}

#links {
  display: flex;
  justify-content: space-around;
}
</style>
