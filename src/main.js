// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Header from './Header.vue'
import App from './App.vue'
import router from './router/index.js'

Vue.config.productionTip = false

const PropsComp = {
    props: ['val'],
    template: '<h1>{{ val }}</h1>',
}

Vue.component('common-component', {
    template: '<h2>共通コンポーネント</h2>',
})

/* eslint-disable no-new */
new Vue({
  el: '#header',
  router,
  components: { Header },
  template: '<Header/>'
})

new Vue({
  el: '#app',
  router,
  components: {
       App,
  },
  template: '<App/>'
})
