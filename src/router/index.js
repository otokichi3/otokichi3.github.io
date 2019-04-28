import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Hobby from '../components/Hobby.vue'
import Works from '../components/Works.vue'
import Lang from '../components/Lang.vue'
import Kumiton from '../components/Kumiton.vue'

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
    },
    {
      path: '/kumiton',
      name: 'Kumiton',
      component: Kumiton
    }
  ]
})
