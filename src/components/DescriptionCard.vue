<template>
  <div class="card">
    <div class="card-header">
      {{ profileInfo.nom }}
    </div>
    <img
      src="https://media.licdn.com/dms/image/C4E03AQGzPNQ3lNkYUQ/profile-displayphoto-shrink_800_800/0/1644509024027?e=1678924800&v=beta&t=8CRaQpbZR5YAenWpaONZhWK_NthsBbTVmFncEDB0yXI"
      alt="profile"
    />
    <table>
      <tr v-if="profileInfo.Naissance">
        <td>Naissance</td>
        <td>{{ profileInfo.Naissance }}</td>
      </tr>
      <tr v-if="profileInfo.Mariage">
        <td>Mariage</td>
        <td>Doe</td>
      </tr>
      <tr v-if="profileInfo.Mort">
        <td>Mort</td>
        <td>Hier</td>
      </tr>
      <tr v-if="profileInfo.Parents.data && profileInfo.Parents.length>0">
        <td>Parents</td>
        <td>
          <div v-for="parent in profileInfo.Parents" :key="parent.id">
            <a :href="`/profile/${parent.id}`">
              {{ parent.attributes.Nom }}
            </a>
            <br />
          </div>
        </td>
      </tr>
      <tr v-if="profileInfo.Conjoint">
        <td>Conjoint</td>
        <td>
          <a :href="`/profile/${profileInfo.Conjoint.id}`">
            {{ profileInfo.Conjoint.data.attributes.Nom }}
          </a>
        </td>
      </tr>
      <tr v-if="profileInfo.Enfants">
        <td>Enfants</td>
        <td>
          <div v-for="enfant in profileInfo.Enfants" :key="enfant.id">
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

interface ProfileInfoInterface {
  Nom: String;
  Mort: String;
  Mariage: String;
  Parents: String;
  Conjoint: Object;
  Enfants: Object;
}

class ProfileInfo implements ProfileInfoInterface {
  Nom: String;
  Mort: String;
  Mariage: String;
  Parents: String;
  Conjoint: Object;
  Enfants: Object;
  constructor(
    Nom: String,
    Mort: String,
    Mariage: String,
    Parents: String,
    Conjoint: Object,
    Enfants: Object
  ) {
    this.Nom = Nom;
    this.Mort = Mort;
    this.Mariage = Mariage;
    this.Parents = Parents;
    this.Conjoint = Conjoint;
    this.Enfants = Enfants;
  }
}

export default defineComponent({
  name: "DescriptionCard",
  props: {
    profileInfo: ProfileInfo,
  },
});
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  width: min(20em, calc(90%) - 2em);
  float: right;
  margin: 0 0 1em 1em;
  padding: 1.5em;
  border-radius: 0.5em;
  border: 1px solid #ddd;
  background-color: #fcfcfc;
  box-shadow: 0 0 0.5em #ddd;
}

@media (max-width: 760px) {
  .card {
    float: none;
    margin: auto;
  }
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
