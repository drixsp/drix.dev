import { createApp } from 'vue'
import App from './App.vue'

import './stylesheets/styles.scss';
import '@mdi/font/css/materialdesignicons.css';
import '@fortawesome/fontawesome-free/css/all.css'; // Ensure you are importing the CSS


import router from './router'
import './router/index.js'


// createApp(App).mount('#app')
const app = createApp(App);
app.use(router); // Install the router
app.mount('#app');