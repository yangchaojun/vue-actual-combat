import Home from '../views/Home.vue'

 const routes = [
  {
    path: '/',
    alias: '/home-page',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/argument/:name',
    name: 'argument',
    component: () => import('@/views/Argument.vue')
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
  }
]

export default routes;
