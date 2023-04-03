<template>
  <li>
    <div class="img-container">
      <img :src="cover" :alt="title" :title="title" />
    </div>
    <div class="details">
      <h2>{{ title }}</h2>
      <h3>{{ subtitle }}</h3>
      <p>{{ abstract }}</p>
      <p>
        {{ author }} | {{ publisher }} | ISBN: {{ isbn }} |
        {{ numPages }} Seiten |
        {{ price }}
      </p>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    cover: String,
    title: String,
    subtitle: String,
    abstract: String,
    author: String,
    publisher: String,
    isbn: String,
    numPages: Number,
    price: String,
  },
};
</script>

<style scoped>
li {
  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #42cc78;
}
li > .details > h2 {
  font-weight: normal;
  color: #42cc78;
}
li > .details > h3 {
  font-weight: normal;
  color: darkcyan;
}
@media screen and (min-width: 768px) {
  li {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}
</style>
