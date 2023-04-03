<template>
  <img alt="Vue logo" src="@/assets/logo.png" />
  <br /><br />
  <BaseButton />
  <BaseButton text="Klick Mich" variant="secondary" />
  <BaseButton text="Success!!!" variant="success" />
  <BaseButton text="!!Attention!!" variant="warning" />
  <BaseButton text="Error!!!" variant="error" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import BaseButton from "@/components/BaseButton.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    BaseButton,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
