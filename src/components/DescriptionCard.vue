<template>
  <div class="card">
    <div class="card-header">
      John Doe
    </div>
    <img
      src="http://localhost:1337/uploads/20210223_154519_min_66f2603856.jpg"
      alt="profile"
    />
    <table>
      <tr>
        <td>Naissance</td>
        <td>John</td>
      </tr>
      <tr>
        <td>Mariage</td>
        <td>Doe</td>
      </tr>
      <tr>
        <td>Mort</td>
        <td>Hier</td>
      </tr>
      <tr>
        <td>Parents</td>
        <td>John Doe</td>
      </tr>
      <tr>
        <td>Conjoint</td>
        <td>John Doe</td>
      </tr>
      <tr>
        <td>Enfants</td>
        <td>John Doe</td>
      </tr>
    </table>
    <button>
      Trouver sur l'arbre généalogique
    </button>
  </div>
</template>

<script>
export default {
  name: 'DescriptionCard',
  props: {
    info: Object,
  },
  mounted() {
    console.log(this.info);
  },
}
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

td:first-child {
  font-weight: bold;
  width: 40%;
}

td:nth-child(2) {
  width: 60%;
}
</style>
