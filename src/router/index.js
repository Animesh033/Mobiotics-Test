import {
    createRouter,
    createWebHistory
} from 'vue-router';

import ProductDetail from '../pages/products/ProductDetail.vue';
import ProductsList from '../pages/products/ProductsList.vue';
import NotFound from '../pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            redirect: '/products'
        },
        {
            path: '/products',
            component: ProductsList
        },
        {
            path: '/products/:id',
            component: ProductDetail,
            props: true,
        },
        {
            path: '/:notFound(.*)',
            component: NotFound
        }
    ]
});

export default router;