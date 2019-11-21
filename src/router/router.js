import Home from '../views/Home.vue'

 const routes = [
  {
    path: '/',
    alias: '/home-page',
    name: 'home',
    component: Home,
    beforeEnter: (to, from, next) => {
      // if (from.name === 'about') alert('这是从about页来的')
      // else alert('这不是从about页来的')
      next()
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/form-page',
    name: 'form-page',
    component: () => import('@/views/form-page.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    props: (route) => ({
      food: route.query.food
    }),
    meta: {
      title: '关于'
    }
  },
  {
    path: '/argument/:name',
    name: 'argument',
    component: () => import('@/views/Argument.vue'),
    props: true
  },
  {
    path: '/parent',
    component: () => import('@/views/Parent.vue'),
    children: [{
      path: 'child',
      component: () => import('@/views/Child.vue')
    }]
  },
  {
    path: '/named-view',
    components: {
      default: () => import('@/views/Child.vue'),
      email: () => import('@/views/Email.vue'),
      tel: () => import('@/views/Tel.vue')
    }
  },
  {
    path: '/main',
    // redirect: '/'
    redirect: to => {
      return '/'
    }
  },
  {
    path: '/store',
    name: 'store',
    component: () => import('@/views/Store.vue')
  },
  {
    path: '/count-to',
    name: 'countTo',
    component: () => import('@/views/count-to.vue')
  },
  {
    path: '*',
    component: () => import('@/views/404.vue')
  }
]

export default routes;
