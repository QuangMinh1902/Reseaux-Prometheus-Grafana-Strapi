// services/api.js

import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:1337', // Remplacez ceci par l'URL de votre API Strapi
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default apiClient;
