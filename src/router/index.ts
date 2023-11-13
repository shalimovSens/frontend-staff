import { createRouter, createWebHistory, } from 'vue-router'

import IndexHtml from '@/components/IndexHtml.vue'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'index',
            component: IndexHtml,
        },
    ],
})

export default router
