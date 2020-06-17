/*
 * @Date: 2020-06-15 10:00:59
 * @LastEditors: 曾令宇
 * @LastEditTime: 2020-06-17 17:25:20
 * @FilePath: \element-dynamic-form-item\src\main.ts
 */
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './plugins/element.js'
import ElDynamicFormItem from 'packages'

Vue.use(ElDynamicFormItem);

Vue.config.productionTip = false



new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
