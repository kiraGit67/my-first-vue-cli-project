<template>
  <div class="car-details">
    <div class="details-img">
      <img
        :src="carData.img"
        :alt="carData.brand + ' ' + carData.type"
        :title="carData.brand + ' ' + carData.type"
      />
    </div>
    <div class="details-text">
      <h1>
        {{ carData.brand }}
        {{ carData.type }}
      </h1>
      <ul>
        <li><strong>Baujahr: </strong>{{ carData.baujahr }}</li>
        <li><strong>Kilometer-Stand: </strong>{{ carData.km }}</li>
        <li><strong>Preis / VB: </strong>{{ carData.price }}</li>
        <li>
          <strong>Erhältlich in den Farben: </strong><br />
          <ul>
            <li
              v-for="colorObject of carData.colorObjects"
              :key="colorObject"
              :style="{ borderColor: colorObject.hex }"
            >
              {{ colorObject.name }}
            </li>
          </ul>
        </li>
      </ul>
      <router-link :to="{ name: 'cars' }"
        >&lt;&lt;&nbsp;back to Cars List</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carData: {},
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
  created() {
    const response = this.cars.filter((car) => {
      return car.id === this.$route.params.id;
    });
    this.carData = response[0];
    console.log(this.carData);
  },
};
</script>

<style>
#app {
  text-align: left;
  padding: 2.5rem 1.5rem;
}
</style>

<style scoped>
.details-img img {
  width: 100%;
  border-top-left-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
}

.details-text > h1 {
  color: #42cc78;
}

.details-text > ul {
  list-style-type: none;
  padding-left: 0;
}

.details-text > ul > li {
  padding-bottom: 0.25rem;
  margin-bottom: 0.25rem;
  border-bottom: 1px solid silver;
}

.details-text > ul > li:last-child {
  border-bottom: none;
}

.details-text > ul > li strong {
  color: darkcyan;
}

.details-text > ul > li > ul {
  list-style-type: none;
  padding-left: 0;
}

.details-text > ul > li > ul > li {
  padding-left: 1rem;
  border-left: 1rem solid;
  margin-block: 0.35rem;
}

.details-text a {
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: 600;
  color: #42cc78;
}

.details-text a:hover {
  color: darkcyan;
}

@media screen and (min-width: 768px) {
  .car-details {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
    align-items: center;
  }
}
</style>
