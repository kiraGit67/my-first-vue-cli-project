<template>
  <button :class="`btn-${variant}`">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "Click!",
    },
    variant: {
      type: String,
      default: "primary",
    },
  },
};
</script>

<style scoped>
button {
  border: 1px solid transparent;
  background-color: transparent;
  padding: 0.5rem 0.75rem;
  border-radius: 5px;
  font-size: 1.75rem;
  margin-right: 0.5rem;
}

.btn-primary {
  background-color: dodgerblue;
  border-color: dodgerblue;
  color: white;
}

.btn-secondary {
  background-color: lightgrey;
  border-color: darkslategrey;
  color: darkslategrey;
}

.btn-success {
  background-color: yellowgreen;
  border-color: darkgreen;
  color: green;
}

.btn-warning {
  background-color: #ffcc00;
  border-color: #ffba00;
  color: black;
}

.btn-error {
  background-color: red;
  border-color: darkred;
  color: white;
}
</style>
