<template>
  <cars-list
    headline="TOP Cars"
    paragraph="Die besten Gebrauchtwagen"
    :listItems="cars"
  />
</template>

<script>
import CarsList from "@/components/CarsList.vue";

export default {
  components: {
    CarsList,
  },
  data() {
    return {
      cars: [
        {
          id: "001",
          brand: "VW",
          type: "Polo",
          baujahr: 2001,
          ps: 100,
          km: 9000,
          color: "silbergrau",
          colors: ["silbergrau", "anthrazit", "ziegelrot", "preußisch-blau"],
          price: "€ 11.499",
        },
        {
          id: "002",
          brand: "VW",
          type: "Golf",
          baujahr: 2011,
          ps: 115,
          km: 7500,
          color: "rauchblau",
          colors: ["silbergrau", "goldbraun", "signalrot", "rauchblau"],
          price: "€ 13.899",
        },
        {
          id: "003",
          brand: "Audi",
          type: "Quattro",
          baujahr: 1999,
          ps: 160,
          km: 5750,
          color: "schwarz",
          colors: ["silbergrau", "schwarz", "signalrot", "weiß"],
          price: "€ 28.699",
        },
        {
          id: "004",
          brand: "Renault",
          type: "Modus",
          baujahr: 2012,
          ps: 110,
          km: 6550,
          color: "tizianrot",
          colors: [
            "silbergrau",
            "türkisgrün",
            "tizianrot",
            "royalblau",
            "nachtblau",
          ],
          price: "€ 12.699",
        },
        {
          id: "014",
          brand: "Renault",
          type: "Twingo",
          baujahr: 2009,
          ps: 105,
          km: 7250,
          color: "silbergrau",
          colors: [
            "silbergrau",
            "goldgelb",
            "signalrot",
            "sonnengelb",
            "lindgrün",
            "royalblau",
          ],
          price: "€ 10.599",
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin: 0;
  padding: 3.5rem 2.5rem;
}
</style>
