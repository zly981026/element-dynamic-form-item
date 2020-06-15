/*
 * @Date: 2020-06-15 10:00:59
 * @LastEditors: 曾令宇
 * @LastEditTime: 2020-06-15 10:51:59
 * @FilePath: \element-dynamic-form-item\src\main.ts
 */
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './plugins/element.js'

Vue.config.productionTip = false


new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
