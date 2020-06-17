/*
 * @Date: 2020-06-17 13:45:17
 * @LastEditors: 曾令宇
 * @LastEditTime: 2020-06-17 17:38:40
 * @FilePath: \element-dynamic-form-item\vue.config.js
 */
module.exports = {
    parallel: false,
    chainWebpack: config => {
        config.module
            .rule('ts')
            .use('ts-loader')
            .loader('ts-loader')
            .tap(opts => {
                return {
                    ...opts,
                    "transpileOnly": false,
                    "happyPackMode": false
                };
            });
        config.module
            .rule('tsx')
            .use('ts-loader')
            .loader('ts-loader')
            .tap(opts => {
                return {
                    ...opts,
                    "transpileOnly": false,
                    "happyPackMode": false
                };
            });
    }
}