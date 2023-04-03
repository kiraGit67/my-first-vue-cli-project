<template>
  <base-list
    headline="List of All Books"
    paragraph="A list of all the Books from the API"
    :listItems="books"
  />
</template>

<script>
import BaseList from "@/components/BaseList.vue";

export default {
  components: {
    BaseList,
  },
  data() {
    return {
      books: [],
    };
  },
  async created() {
    const response = await fetch("http://localhost:4730/books");
    this.books = await response.json();
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
  margin: 0px;
  padding: 3.5rem 3rem;
}
</style>
