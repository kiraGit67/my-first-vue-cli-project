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
          img: "https://i.ebayimg.com/images/g/hcQAAOSw8gBeg4h9/s-l500.jpg",
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
              hex: "#cc4300",
            },
            {
              name: "preußisch-blau",
              hex: "#003366",
            },
          ],
          price: "€ 11.499",
        },
        {
          id: "002",
          img: "https://i.ebayimg.com/images/g/SqIAAOSwXepeh3kE/s-l500.jpg",
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
              hex: "#ba8921",
            },
            {
              name: "signalrot",
              hex: "#ff0000",
            },
            {
              name: "rauchblau",
              hex: "#666699",
            },
          ],
          price: "€ 13.899",
        },
        {
          id: "003",
          img: "https://i.ebayimg.com/images/g/DAYAAOSwvNhhnPFo/s-l500.jpg",
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
          img: "https://i.ebayimg.com/images/g/XRYAAOSwRCJdkeb3/s-l500.jpg",
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
          img: "https://m.media-amazon.com/images/I/71mE360jkKL._AC_SX450_.jpg",
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
              hex: "#ffde00",
            },
            {
              name: "lindgrün",
              hex: "#cdff9c",
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
