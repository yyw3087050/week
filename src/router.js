import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import News from "./components/news/News.vue";
import Application from "./components/application/Application.vue";
import User from "./components/User/User.vue";
import Task from "./components/treelist/Task.vue";

import NewsInfo from "./components/treelist/copms/Newsinfo.vue";
import NewsUser from "./components/treelist/copms/Newsuser.vue";
import NoInfo from "./components/treelist/copms/noinfo.vue";
import Dialoge from "./components/treelist/copms/dialoge.vue";
// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [{
        path: "/News",
        name: 'News',
        component: News,
        'children':[
            {
                path: "/",
                name:"News.info",
                component:NewsInfo
            },
            {
                path: "Users",
                name: "News.users",
                component:NewsUser,
                'children':[
                    // {
                    //     path: "/",
                    //     // name: "users.noinfo",
                    //     components: NoInfo
                    // },
                    {
                        path: "/",
                        // name: "News.users.dialoge",
                        component: Dialoge
                    }
                ]
            }
        ]
    },
    {
        path: "/Application",
        component: Application
    },
    {
        path: "/User",
        component: User
    },
    {
        path: "/Task",
        component: Task
    }, {
        path: "/",
        redirect: "/news"
    }
]

var router = new VueRouter({
    routes
})
export default router;