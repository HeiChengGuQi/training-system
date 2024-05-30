export const staticRoutes = [
    {
        path: "/",
        redirect: "/home",
    },
    {
        // 首页
        path: "/home",
        component: () => import("../pages/Home/Home.vue"),
        name: "HomeView",
    },{
        // 首页
        path: "/login",
        component: () => import("../pages/Login/Login.vue"),
        name: "LoginView",
    }

];
