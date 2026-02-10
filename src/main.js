import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

// 导入组件
import Home from './views/Home.vue'
import TaisuiList from './views/TaisuiList.vue'
import TaisuiDetail from './views/TaisuiDetail.vue'
import About from './views/About.vue'

// 创建路由
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/list',
      name: 'list',
      component: TaisuiList
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: TaisuiDetail
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')