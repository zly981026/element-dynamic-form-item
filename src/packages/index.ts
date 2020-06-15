/*
 * @Date: 2020-06-15 16:00:35
 * @LastEditors: 曾令宇
 * @LastEditTime: 2020-06-15 16:04:37
 * @FilePath: \element-dynamic-form-item\src\index.ts
 */
import { ElDynamicFormItem } from '@/packages/dynamic-form-item'
import Vue from 'vue';
const install = function (vue: typeof Vue, options: any = {}): void {
    vue.component(ElDynamicFormItem.name, ElDynamicFormItem);
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export { ElDynamicFormItem, install }