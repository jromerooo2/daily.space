import { createRouter, createWebHistory } from "vue-router";
import News from "../views/News.vue";
const routes = [
    {
        path: "/",
        name: "News",
        component: News
    },
    {
        path: "/news",
        name: "news",
        component: News
    }
];

const router = createRouter({ 
    history: createWebHistory(),
    routes 
});

export default router;