<!-- App.vue -->

<template>
  <div id="app">
    <h1>Mon Application</h1>
    <ArticlesList />
    <CategoriesList />
  </div>
</template>

<script>
import ArticlesList from "@/components/ArticlesList.vue";
import CategoriesList from "@/components/CategoriesList.vue";

export default {
  name: 'App',
  components: {
    ArticlesList,
    CategoriesList,
  }
}
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
