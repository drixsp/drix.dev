import { createRouter, createWebHistory } from 'vue-router';
import Home from '/src/pages/Home.vue';
import Works from '/src/pages/Works.vue';
import Resume from '/src/pages/Resume.vue';
import WorksDetails from '/src/pages/WorksDetails.vue';

// DEVCON Projects
import DEVCON_Project_1 from '/src/works/DEVCON_Project_1.vue';
import DEVCON_Project_2 from '/src/works/DEVCON_Project_2.vue';

// 24Strats Projects

// Others

// Routes
const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/works',
        name: 'Works',
        component: Works,
    },
    {
      path: '/works',
      name: 'WorksDetails',
      component: WorksDetails,
      props: true,
      children: [
        {
          path: 'devcon/1',
          component: DEVCON_Project_1,
        },
        {
          path: 'devcon/2',
          component: DEVCON_Project_2,
        },
      ]
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
