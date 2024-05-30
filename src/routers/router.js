import { createRouter, createWebHistory } from "vue-router";
import {staticRoutes} from "./routers.js";

const router = createRouter({
    history: createWebHistory(),
    routes: staticRoutes,
});

export default router;