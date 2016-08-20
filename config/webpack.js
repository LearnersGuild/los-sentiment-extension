const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const rootPath = path.resolve(__dirname, '..')
const appPath = path.resolve(rootPath, 'src')

module.exports = {
  context: rootPath,
  devtool: 'inline-source-map',
  entry: [
    path.resolve(appPath, 'index.jsx'),
  ],
  output: {
    path: path.join(__dirname, '..', 'lib'),
    filename: 'app.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.scss', '.css', '.js', '.json'],
    modulesDirectories: [
      'node_modules',
      path.resolve(rootPath, './node_modules')
    ]
  },
  module: {
    loaders: [
      {
        test: /(\.js|\.jsx)$/,
        loader: 'babel',
        exclude: /(node_modules)/,
      }, {
        test: /(\.scss|\.css)$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass')
      }
    ]
  },
  postcss: [autoprefixer],
  sassLoader: {
    // data: '@import "theme/_config.scss";',
    includePaths: [appPath],
  },
  plugins: [
    new ExtractTextPlugin('app.css', {allChunks: true}),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
  ]
}
