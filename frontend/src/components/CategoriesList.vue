<!-- components/CategoriesList.vue -->

<template>
  <div>
    <h2>Liste des Catégories</h2>
    <ul>
      <li v-for="category in categories" :key="category.id">
        {{ category.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import apiClient from "@/services/api";

export default {
  data() {
    return {
      categories: [],
    };
  },
  mounted() {
    this.fetchCategories();
  },
  methods: {
    async fetchCategories() {
      try {
        const response = await apiClient.get("/categories");
        this.categories = response.data;
        console.log(this.categories);
      } catch (error) {
        console.error("Erreur lors de la récupération des catégories", error);
      }
    },
  },
};
</script>

<style scoped>
/* Vos styles CSS spécifiques au composant, si nécessaire */
</style>
