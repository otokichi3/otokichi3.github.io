import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'
// import About from '@/components/About'
// import Hobby from '@/components/Hobby'
// import Works from '@/components/Works'
// import Lang from '@/components/Lang'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Hobby from '../components/Hobby.vue'
import Works from '../components/Works.vue'
import Lang from '../components/Lang.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/hobby',
      name: 'Hobby',
      component: Hobby
    },
    {
      path: '/works',
      name: 'Works',
      component: Works
    },
    {
      path: '/lang',
      name: 'Language',
      component: Lang
    }
  ]
})
