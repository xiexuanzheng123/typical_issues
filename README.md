# typical_issues
record some typical issues 

webpack插件提取单独打包css时，**extract-text-webpack-plugin**以来webpack3，webpack4中要使用**mini-css-extract-plugin**,例子：

 ```
new MiniCssExtractPlugin({
    filename: "[name].[chunkhash:8].css",
    chunkFilename: "[id].css"
})
 ```
**uglifyjs-webpack-plugin**使用uglify-js压缩代码  
**`typings-for-css-modules-loader`** 插件解决ts文件中引入css找不到模块的问题  
**`Webpack.DefinePlugin`** 用于自定义全局变量
