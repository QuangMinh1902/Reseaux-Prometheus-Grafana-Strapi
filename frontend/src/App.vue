<!-- App.vue -->

<template>
  <div id="app">
    <h1>Mon Application</h1>
    <button @click="toggleAccordion('articles')">Afficher les Articles</button>
    <transition name="fade">
      <div v-if="showArticles">
        <ArticlesList />
      </div>
    </transition>

    <button @click="toggleAccordion('categories')">Afficher les Catégories</button>
    <transition name="fade">
      <div v-if="showCategories">
        <CategoriesList />
      </div>
    </transition>
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
  },
  data() {
    return {
      showArticles: false,
      showCategories: false,
    };
  },
  methods: {
    toggleAccordion(section) {
      if (section === 'articles') {
        this.showArticles = !this.showArticles;
        this.showCategories = false; // Masquer l'autre section
      } else if (section === 'categories') {
        this.showCategories = !this.showCategories;
        this.showArticles = false; // Masquer l'autre section
      }
    },
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

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
