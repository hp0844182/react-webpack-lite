const MiniCssExtractPlugin = require('mini-css-extract-plugin')

/**@type {import('webpack').Configuration} */
const config = {
  module:{
    rules:[
      /**
       * 生产环境使用‘MiniCssExtractPlugin.loader’配合plugin对css代码抽离
       */
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
    ]
  },
  plugins:[
    new MiniCssExtractPlugin()
  ]
}

module.exports = config