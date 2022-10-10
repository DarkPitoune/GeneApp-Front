<template>
  <div class="card">
    <div class="card-header">
      {{ this.nom }}
    </div>
    <img
      src="http://localhost:1337/uploads/20210223_154519_min_66f2603856.jpg"
      alt="profile"
    />
    <table>
      <tr v-if="this.naissance">
        <td>Naissance</td>
        <td>{{ this.naissance }}</td>
      </tr>
      <tr v-if="this.mariage">
        <td>Mariage</td>
        <td>Doe</td>
      </tr>
      <tr v-if="this.mort">
        <td>Mort</td>
        <td>Hier</td>
      </tr>
      <tr v-if="this.parents">
        <td>Parents</td>
        <td>
          <a :href="`/profile/${this.parents.data[0].id}`">
            {{ this.parents.data[0].attributes.Nom }}
          </a>
          <br />
          <a
            v-if="this.parents.data.length > 1"
            :href="`/profile/${this.parents.data[1].id}`"
          >
            {{ this.parents.data[1].attributes.Nom }}
          </a>
        </td>
      </tr>
      <tr v-if="this.conjoint">
        <td>Conjoint</td>
        <td>
          <a :href="`/profile/${this.conjoint.data.id}`">
            {{ this.conjoint.data.attributes.Nom }}
          </a>
        </td>
      </tr>
      <tr v-if="this.enfants">
        <td>Enfants</td>
        <td>
          <div v-for="enfant in this.enfants.data" :key="enfant.id">
            <a :href="`/profile/${enfant.id}`">
              {{ enfant.attributes.Nom }}
            </a>
            <br />
          </div>
        </td>
      </tr>
    </table>
    <button>Trouver sur l'arbre généalogique</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "DescriptionCard",
  props: {
    nom: String,
    naissance: String,
    mort: String,
    mariage: String,
    parents: Object,
    conjoint: Object,
    enfants: Object,
  },
});
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  width: 20em;
  float: right;
  margin: 0 0 1em 1em;
  padding: 1.5em;
  border-radius: 0.5em;
  border: 1px solid #ddd;
  background-color: #fcfcfc;
  box-shadow: 0 0 0.5em #ddd;
}

.card-header {
  font-weight: bold;
  background-color: var(--main-blue);
  color: white;
  text-align: center;
}

img {
  padding: 0.5em 0;
}

button {
  width: fit-content;
  margin: auto;
  font-size: 1em;
  padding: 0.5em 1em;
  background-color: var(--main-blue);
  color: white;
  border-radius: 0.6em;
  border: none;
  cursor: pointer;
}

button:hover {
  filter: brightness(135%);
  box-shadow: 0 0 0.5em #aaa;
}

table {
  width: 100%;
}

td {
  vertical-align: top;
  padding-bottom: 0.5em;
}

td:first-child {
  font-weight: bold;
  width: 40%;
}

td:nth-child(2) {
  width: 60%;
}
</style>
