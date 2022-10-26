const CracoLessPlugin = require('craco-less')
const path = require('path')
const resolve = url => path.resolve(__dirname, url)
module.exports = {
  webpack: {
    // 别名
    alias: {
      '@': resolve('src'),
      components: resolve('src/components'),
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin, //less配置
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}
