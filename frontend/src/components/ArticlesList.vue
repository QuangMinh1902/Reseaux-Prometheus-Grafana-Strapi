<!-- components/ArticlesList.vue -->

<template>
    <div>
      <h2>Liste des Articles</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Titre</th>
            <th>Contenu</th> <!-- Ajout du champ "body" -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="article in articles" :key="article.id">
            <td>{{ article.id }}</td>
            <td>{{ article.title }}</td>
            <td>{{ article.body }}</td> <!-- Ajout du champ "body" -->
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import apiClient from '@/services/api';
  
  export default {
    data() {
      return {
        articles: [],
      };
    },
    mounted() {
      this.fetchArticles();
    },
    methods: {
      async fetchArticles() {
        try {
          const response = await apiClient.get('/articles');
          this.articles = response.data;
        } catch (error) {
          console.error('Erreur lors de la récupération des articles', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Vos styles CSS spécifiques au composant, si nécessaire */
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  
  th, td {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
  
  th {
    background-color: #f2f2f2;
  }
  </style>
  