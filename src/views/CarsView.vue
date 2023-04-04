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
          colorObjects: [
            {
              name: "silbergrau",
              hex: "#efefef",
            },
            {
              name: "anthrazit",
              hex: "#333333",
            },
            {
              name: "ziegelrot",
              hex: "#660000",
            },
            {
              name: "preußisch-blau",
              hex: "#0033cc",
            },
          ],
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
          colorObjects: [
            {
              name: "silbergrau",
              hex: "#efefef",
            },
            {
              name: "goldbraun",
              hex: "#ffcc33",
            },
            {
              name: "signalrot",
              hex: "#ff0000",
            },
            {
              name: "rauchblau",
              hex: "#6666cc",
            },
          ],
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
          colorObjects: [
            {
              name: "silbergrau",
              hex: "#efefef",
            },
            {
              name: "schwarz",
              hex: "#000000",
            },
            {
              name: "signalrot",
              hex: "#ff0000",
            },
            {
              name: "weiß",
              hex: "#ffffff",
            },
          ],
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
          colorObjects: [
            {
              name: "silbergrau",
              hex: "#efefef",
            },
            {
              name: "türkisgrün",
              hex: "#00cc99",
            },
            {
              name: "tizianrot",
              hex: "#990021",
            },
            {
              name: "royalblau",
              hex: "#0012ff",
            },
            {
              name: "nachtblau",
              hex: "#000043",
            },
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
          colorObjects: [
            {
              name: "silbergrau",
              hex: "#efefef",
            },
            {
              name: "goldgelb",
              hex: "#ffcc00",
            },
            {
              name: "signalrot",
              hex: "#ff0000",
            },
            {
              name: "sonnengelb",
              hex: "#ffab00",
            },
            {
              name: "lindgrün",
              hex: "#33ff33",
            },
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
