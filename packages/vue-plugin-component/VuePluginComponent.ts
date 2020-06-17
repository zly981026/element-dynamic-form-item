/*
 * @Date: 2020-06-15 15:51:50
 * @LastEditors: 曾令宇
 * @LastEditTime: 2020-06-15 15:58:37
 * @FilePath: \element-dynamic-form-item\src\packages\vue-plugin-component\VuePluginComponent.ts
 */
import Vue from 'vue';
export default class VuePluginComponent extends Vue {
    public static install(vue: typeof Vue): void {
        vue.component(VuePluginComponent.name, VuePluginComponent);
    }
} 