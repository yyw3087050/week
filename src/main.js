import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import store from './store/store.js'


// 引入组件
import router from "./router.js"

Vue.use(ElementUI)
// Vue.use(MintUI)
new Vue({
    router,
    store,
    el: '#app',
    render: h => h(App)
})