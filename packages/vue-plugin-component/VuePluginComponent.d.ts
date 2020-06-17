import Vue from 'vue';
export default class VuePluginComponent extends Vue {
    static install(vue: typeof Vue): void;
}
