import { createApp } from 'vue'
import App from './App.vue'

import './stylesheets/styles.scss';
import '@mdi/font/css/materialdesignicons.css';

import router from './router'

import './router/index.js'


// createApp(App).mount('#app')
const app = createApp(App);
app.use(router); // Install the router
app.mount('#app');