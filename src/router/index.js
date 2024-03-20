export default {
    path: '/',
    name: 'home',
    // component: () => import('src/pages/Home.vue'),
    meta: {
        title: 'Drix',
    },
    children: [
        {
            path: '/works',
            name: 'works',
            // component: () => import('src/pages/Works.vue'),
            meta: {
                title: 'Works',
            }
        }
    ]
};
