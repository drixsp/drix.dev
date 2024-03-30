import { createRouter, createWebHistory } from 'vue-router';
import Home from '/src/pages/Home.vue';
import Works from '/src/pages/Works.vue';
import Resume from '/src/pages/Resume.vue';

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/works',
        component: Works,
    },
    {
        path: '/resume',
        component: Resume,
    }
  ];

const router = createRouter({
    history: createWebHistory(),
    routes
  });

export default router;
