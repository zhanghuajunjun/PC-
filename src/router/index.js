import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/Layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
        meta: {
          title: 'XMall商城'
        }
      },
      {
        path: 'allGoods',
        name: 'AllGoods',
        component: () => import('../views/AllGoods.vue'),
        meta: {
          title: '全部商品'
        }
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  // let username = localStorage.getItem('user')
  // if (to.path === '/login' || to.path === '/register') {
  next()
  // } else {
  //   username ? next() : next('/login')
  // }
})
export default router
