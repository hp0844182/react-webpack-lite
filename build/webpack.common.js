const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const svgToMiniDataURI = require('mini-svg-data-uri')
const path = require('path')
const { isDev } = require('./constants')
/**
 * 生产环境使用‘MiniCssExtractPlugin.loader’配合plugin对css代码抽离
 */
const cssExtractLoader = isDev ? 'style-loader' : MiniCssExtractPlugin.loader

/**@type {import('webpack').Configuration} */
const config = {
    mode: isDev ? 'development' : 'production',
    entry: './src/index.tsx',
    /**
     * 解析文件路径相关配置
     */
    resolve: {
        extensions: ['.js', '.tsx', '.ts']
    },
    module: {
        rules: [
            // 样式相关start
            {
                test: /\.css$/,
                use: [cssExtractLoader, 'css-loader', 'postcss-loader']
            },
            {
                test: /.s[ac]ss$/i,
                use: [cssExtractLoader, 'css-loader', 'postcss-loader', 'fast-sass-loader']
            },
            // 样式相关end
            // 图片
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                include: path.resolve(__dirname, '../src'), // 设置loader解析路径，优化解析速度
                type: 'asset',
                generator: {
                    filename: 'images/[name][hash:6][ext]' // 图片目录、文件名
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 4 * 1024 // 4kb，大于4kb为url,小于为base64
                    }
                }
            },
            // svg文件特殊处理
            {
                test: /\.svg/,
                type: 'asset/inline',
                generator: {
                    dataUrl: (content) => {
                        content = content.toString()
                        return svgToMiniDataURI(content)
                    }
                }
            },
            // 字体
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                type: 'asset/resource'
            },
            {
                test: /\.[tj]sx?$/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        isDev ? undefined : new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: 'public/index.html' // 配置文件模板
        })
    ].filter((item) => item)
}

module.exports = config
