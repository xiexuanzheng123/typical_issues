# typical_issues
record some typical issues 

webpack插件提取单独打包css时，**extract-text-webpack-plugin**以来webpack3，webpack4中要使用**mini-css-extract-plugin**,例子：
(```)
new MiniCssExtractPlugin({
    filename: "[name].[chunkhash:8].css",
    chunkFilename: "[id].css"
})
(```)
