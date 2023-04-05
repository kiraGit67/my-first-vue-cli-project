<template>
  <li>
    <div class="image-box">
      <img :src="imgSource" :alt="brand + ' ' + type" />
    </div>
    <div class="text-box">
      <h1>
        {{ brand }} <span>{{ type }}</span>
      </h1>
      <p>
        Baujahr {{ baujahr }} | Kilometer-Stand: {{ km }} | {{ ps }} PS | Preis
        {{ price }}
      </p>
      <p><strong>Erhältlich in den Farben</strong></p>
      <ul class="color-objects">
        <li
          v-for="colorObject of colorObjects"
          :key="colorObject"
          :style="{ borderColor: colorObject.hex }"
        >
          {{ colorObject.name }}
        </li>
      </ul>
      <router-link :to="routerLink">Details</router-link>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    id: String,
    imgSource: String,
    brand: String,
    type: String,
    baujahr: Number,
    ps: Number,
    km: Number,
    color: String,
    colors: Array,
    colorObjects: Array,
    price: String,
    routerLink: String,
  },
};
</script>

<style scoped>
li {
  padding-bottom: 0.75rem;
  margin-bottom: 1.25rem;
  border-bottom: 1px solid darkcyan;
}

li h1 {
  font-weight: normal;
  color: #42cd78;
}

li h1 > span {
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

img {
  width: 100%;
}

.text-box a {
  text-decoration: none;
  font-size: 1.35rem;
  color: #42cd78;
  border: 2px solid #42cd78;
  border-radius: 50px;
  padding: 0.25rem 1rem;
}

.text-box a:hover {
  background-color: #42cd78;
  color: white;
}

@media screen and (min-width: 768px) {
  li:not(ul.color-objects li) {
    display: grid;
    grid-template-columns: 2fr 3fr;
    gap: 2.5rem;
  }
}
</style>
