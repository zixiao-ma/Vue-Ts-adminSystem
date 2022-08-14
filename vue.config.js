const {defineConfig} = require('@vue/cli-service');
console.log('111');
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        port: 9998,
        host: "localhost",
        https: false,
        open: true,
        proxy: {
            [process.env.VUE_APP_BASE_API]: {
                target: process.env.VUE_APP_SERVICE_URL,
                changeOrigin: true,
                pathRewrite: {
                    ["^" + process.env.VUE_APP_BASE_API]: ""
                }
            }
        }
    },
    css: {
        loaderOptions: {
            scss: {
                additionalData: `@import "./src/styles/variables.scss";`
            }
        }
    }
});
