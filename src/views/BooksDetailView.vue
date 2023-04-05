<template>
  <h1>{{ bookData.title }}</h1>
  <div class="book-details">
    <div class="detail-image">
      <img :src="bookData.cover" :alt="bookData.title" />
    </div>
    <div class="detail-text">
      <h2>{{ bookData.subtitle }}</h2>
      <p>{{ bookData.abstract }}</p>
      <ul>
        <li><strong>Author:</strong> {{ bookData.author }}</li>
        <li><strong>Published by:</strong> {{ bookData.publisher }}</li>
        <li>{{ bookData.numPages }} <strong>Pages</strong></li>
        <li><strong>ISBN:</strong> {{ bookData.isbn }}</li>
        <li>
          <strong>Non-binding recommended price:</strong> {{ bookData.price }}
        </li>
      </ul>
      <router-link :to="{ name: 'books' }"
        >&lt;&lt;&nbsp;back to BookList</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookData: {},
    };
  },
  async created() {
    const response = await fetch(
      "http://localhost:4730/books/" + this.$route.params.id
    );

    this.bookData = await response.json();
  },
};
</script>

<style>
#app {
  text-align: left;
  padding: 3.5rem 3rem;
}
</style>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
h1 {
  color: #42cc78;
}
h2 {
  color: darkcyan;
}
ul {
  list-style-type: none;
  padding-left: 0;
}
ul li {
  padding-bottom: 2px;
  margin-bottom: 3px;
  border-bottom: 1px solid lightgrey;
}
ul li strong {
  font-weight: normal;
  color: darkcyan;
}
.detail-text a {
  text-decoration: none;
  color: #42cc78;
  font-size: 1.15rem;
  font-weight: 600;
}
.detail-text a:hover {
  color: darkcyan;
}
@media screen and (min-width: 768px) {
  .book-details {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-column-gap: 1rem;
    align-items: center;
  }
}
</style>
