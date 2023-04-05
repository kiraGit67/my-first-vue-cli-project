<template>
  <h1>{{ headline }}</h1>
  <h2>{{ paragraph }}</h2>
  <ul>
    <book-list-item
      v-for="listItem in listItems"
      :key="listItem.isbn"
      :cover="listItem.cover"
      :title="listItem.title"
      :subtitle="listItem.subtitle"
      :abstract="listItem.abstract"
      :author="listItem.author"
      :publisher="listItem.publisher"
      :isbn="listItem.isbn"
      :numPages="listItem.numPages"
      :routeLink="{ name: 'booksDetail', params: { id: listItem.isbn } }"
    />
  </ul>
</template>

<script>
import BookListItem from "@/components/BookListItem.vue";

export default {
  components: { BookListItem },
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
  margin: 0;
}
</style>
