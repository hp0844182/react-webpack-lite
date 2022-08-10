const presets = [
  // 用来将现有代码转换成浏览器可运行代码
  [
    '@babel/preset-env',
    {
      modules: "commonjs",  //modules
      useBuiltIns: 'usage', // 使用到的需要polyfill的自动导入
      corejs: 3, // core-js版本
    }
  ],
  ['@babel/preset-react',
    {
      /**
       * 自动引入jsx解析器‘react/jsx-runtime',无需再手动引入React
       */
      runtime:'automatic',
    }
  ], // 转换jsx
  '@babel/typescript',
]

module.exports = { presets }
