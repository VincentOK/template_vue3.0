const Setting = require('./src/setting')
const vConsolePlugin = require('vconsole-webpack-plugin')
module.exports = {
  lintOnSave: false,
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: false,
  devServer: {
    port: '9527',
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy:{
      'uac' : {
        target: 'http://192.168.0.45:80/uac',
        changeOrigin: true,
        pathRewrite: {
          ['^uac']: ''
        }
      }
    }
  },
  configureWebpack: (config)=>{
    const debug = process.env.NODE_ENV !== 'production' && Setting.noConsole
    let pluginsDev = [
      new vConsolePlugin({
        filter: [],
        enable: debug
      })
    ]
    config.plugins = [...config.plugins, ...pluginsDev]
  },
  chainWebpack(config){
    config
      .plugin('html')
      .tap(args => {
        args[0].title = Setting.title
        return args
      })

  },
}
