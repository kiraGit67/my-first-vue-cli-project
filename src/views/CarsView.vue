<template>
  <cars-list
    headline="Cars"
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
          ps: 100,
          km: 9000,
          color: "silbergrau",
          price: "€ 11.499",
        },
        {
          id: "002",
          brand: "VW",
          type: "Golf",
          ps: 115,
          km: 7500,
          color: "rauchblau",
          price: "€ 13.899",
        },
        {
          id: "003",
          brand: "Audi",
          type: "Quattro",
          ps: 160,
          km: 5750,
          color: "schwarz",
          price: "€ 28.699",
        },
        {
          id: "004",
          brand: "Renault",
          type: "Modus",
          ps: 110,
          km: 6550,
          color: "tizianrot",
          price: "€ 12.699",
        },
        {
          id: "014",
          brand: "Renault",
          type: "Twingo",
          ps: 105,
          km: 7250,
          color: "silbergrau",
          price: "€ 10.599",
        },
      ],
    };
  },
};
</script>
