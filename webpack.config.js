const path = require('path')
const { merge } = require('webpack-merge')

const modeConfig = {
  development: {
    mode: 'development',
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      watchContentBase: true,
      port: 8090,
      host: '0.0.0.0',
      hot: true,
      historyApiFallback: true,
      disableHostCheck: true
    },
    devtool: 'eval-source-map'
  },
  production: {
    mode: 'production',
    devtool: 'source-map'
  }
}

module.exports = merge({
  entry: {
    index: path.resolve(__dirname, 'src/js/index.tsx')
  },
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.mjs']
  }
}, modeConfig[process.env.NODE_ENV] ?? {})