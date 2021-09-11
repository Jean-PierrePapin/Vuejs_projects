import { createRouter, createWebHistory } from 'vue-router';

import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachRegistration from './pages/coaches/CoachRegistration.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestsReceived from './pages/requests/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';
import UserAuth from './pages/auth/UserAuth.vue';
import store from './store/index.js';

const routes = [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    { path: '/coaches/:id', 
      component: CoachDetail,
      props: true, 
      children: [
        { path: 'contact', component: ContactCoach }
        ] 
    },
    { path: '/register', component: CoachRegistration, meta: { requireAuth: true } },
    { path: '/requests', component: RequestsReceived, meta: { requireAuth: true } },
    { path: '/auth', component: UserAuth, meta: { requireUnauth: true } },
    { path: '/:notFound(.*)', component: NotFound }
];

router.beforeEach(function(to, _, next) {
    if (to.meta.requireAuth && store.getters.isAuthenticated) {
        next('/auth');
    } else if (to.meta.requireUnauth && store.getters.isAuthenticated) {
        next('/coaches');
    } else {
        next();
    }
});

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;