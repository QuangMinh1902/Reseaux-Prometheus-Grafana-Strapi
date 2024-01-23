// main.js

import { createApp } from 'vue';
import App from './App.vue';
import ArticlesList from './components/ArticlesList.vue';

const app = createApp(App);
app.component('ArticlesList', ArticlesList);
app.mount('#app');
