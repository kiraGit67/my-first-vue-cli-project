<template>
  <li>
    <h1>
      {{ brand }} <span>{{ type }}</span>
    </h1>
    <p>Kilometer-Stand: {{ km }} | {{ ps }} PS | {{ color }} | {{ price }}</p>
  </li>
</template>

<script>
export default {
  props: {
    id: String,
    brand: String,
    type: String,
    ps: Number,
    km: Number,
    color: String,
    price: String,
  },
};
</script>
