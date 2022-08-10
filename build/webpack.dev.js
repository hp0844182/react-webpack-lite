/**@type {import('webpack').Configuration} */
const config = {
  module:{
    rules:[
      // css文件处理loader
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ]
  },
  devServer:{
    hot:true,
    open:true
  }
}

module.exports = config