<template>
  <li>
    <h1>
      {{ brand }} <span>{{ type }}</span>
    </h1>
    <p>
      Baujahr {{ baujahr }} | Kilometer-Stand: {{ km }} | {{ ps }} PS | Preis
      {{ price }}
    </p>
    <ul class="color-objects">
      Erhältlich in den Farben
      <li
        v-for="colorObject of colorObjects"
        :key="colorObject"
        :style="{ borderColor: colorObject.hex }"
      >
        {{ colorObject.name }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    id: String,
    brand: String,
    type: String,
    baujahr: Number,
    ps: Number,
    km: Number,
    color: String,
    colors: Array,
    colorObjects: Array,
    price: String,
  },
};
</script>

<style scoped>
li {
  padding-bottom: 0.75rem;
  margin-bottom: 1.25rem;
  border-bottom: 1px solid darkcyan;
}

li > h1 {
  font-weight: normal;
  color: #42cd78;
}

li > h1 > span {
  font-size: 80%;
  color: darkcyan;
}

ul.colors,
ul.color-objects {
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

ul.colors li {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}

ul.color-objects li {
  margin-bottom: 0;
  padding: 0;
  padding-left: 0.5rem;
  border: none;
  border-left: 1.25rem solid;
}
</style>
