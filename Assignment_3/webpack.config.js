const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
mode: 'development',
entry: './src/main.tsx',
devtool: 'inline-source-map',
output: {
path: path.join(__dirname, '/dist'),
filename: 'bundle.js',
publicPath: '/'
},
devtool: 'inline-source-map',
devServer: {
static: './dist',
historyApiFallback: true,
},
module: {
rules: [
{
test: /\.jsx?$/,
exclude: /node_modules/,
loader: 'babel-loader'
},
{
test: /\.tsx?$/,
use: 'ts-loader',
exclude: /node_modules/,
},
{
test: /\.css?$/,
use: ["style-loader", "css-loader"],
},
{
test: /\.(png|svg|jpg|gif|jpe?g)$/,
use: [
{
loader: "file-loader"
}
]
}
]
},
resolve: {
extensions: ['.tsx', '.ts', '.js'],
},
plugins:[
new HtmlWebpackPlugin({
template: './index.html'
})
]
}