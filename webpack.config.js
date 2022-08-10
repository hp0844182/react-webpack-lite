const { merge } = require('webpack-merge')
const commonConfig = require('./build/webpack.common')
const devConfig = require('./build/webpack.dev')
const prodConfig = require('./build/webpack.prod')
const { isDev } = require('./build/constants')

const resolveConfig = function () {
  if (isDev) {
    return merge(commonConfig, devConfig)
  }
  return merge(commonConfig, prodConfig)
}

module.exports = resolveConfig()