import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router.js'
import { setTitle } from '@/lib/utils'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  routes
})

const HAS_LOGINED = true;

router.beforeEach((to, from, next) => { // 全局前置守卫
  to.meta && setTitle(to.meta.title)

  if (to.name !== 'login') {
    if (HAS_LOGINED) next()
    else next({
      name: 'login'
    })
  } else {
    if (HAS_LOGINED) next({ name: 'home'})
    else next()
  }
})

router.afterEach((to, from) => { //全局后置钩子
  // loading = false;
})
export default router
