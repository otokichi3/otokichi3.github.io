// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Header from './Header.vue'
import App from './App.vue'
import router from './router/index.js'

Vue.config.productionTip = false

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
  components: { App },
  template: '<App/>'
})

let toolTip = new Vue({
    el: '#tool-tip',  // HTML側のidと対応
    data: {
        tipStyle: {  // 後述のスタイル用オブジェクト
            position: 'absolute',
            top: '0px',
            left: '0px',
        },
        title: 'Hobby'
    }
});

// 関数（処理本体）
let toolTipRendering = () => {
    return (e) => {
        toolTip.tipStyle.left = parseInt(e.clientX + 30 /*ここの数値は任意で、変えることによってカーソルからの距離が変わる*/) + 'px';
        toolTip.tipStyle.top = parseInt(e.clientY + 30 /*同上*/) + 'px';
    }
}

// 処理呼び出し（いい言い方が見つからなかった…）
document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('mousemove', toolTipRendering(), false);
}, false);
