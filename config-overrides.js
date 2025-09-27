const { override, addBabelPlugin } = require('customize-cra');

module.exports = override(
  // 添加 babel-plugin-module-resolver 插件，配置路径别名
  addBabelPlugin([
    'module-resolver',
    {
      root: ['./src'], // 根目录为 src
      alias: {
        '@': './src', // 配置 @ 指向 src 目录
        // 可添加其他别名，如 '@components': './src/components'
      }
    }
  ])
);