/*
 * @Date: 2020-06-15 16:00:35
 * @LastEditors: 曾令宇
 * @LastEditTime: 2020-06-17 15:25:46
 * @FilePath: \element-dynamic-form-item\src\packages\index.ts
 */
import { DynamicFormItem } from '@/packages/dynamic-form-item'
import Vue from 'vue';
const install = function (vue: typeof Vue, options: any = {}): void {
    vue.component(DynamicFormItem.name, DynamicFormItem);
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default { DynamicFormItem, install }