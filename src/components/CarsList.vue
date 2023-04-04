<template>
  <h1>{{ headline }}</h1>
  <h2>{{ paragraph }}</h2>
  <ul>
    <cars-list-item
      v-for="listItem in listItems"
      :key="listItem.id"
      :brand="listItem.brand"
      :type="listItem.type"
      :baujahr="listItem.baujahr"
      :ps="listItem.ps"
      :km="listItem.km"
      :color="listItem.color"
      :colors="listItem.colors"
      :colorObjects="listItem.colorObjects"
      :price="listItem.price"
    />
  </ul>
</template>

<script>
import CarsListItem from "@/components/CarsListItem.vue";

export default {
  components: { CarsListItem },
  name: "BaseList",
  props: {
    headline: String,
    paragraph: String,
    listItems: Array,
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0;
}
</style>
