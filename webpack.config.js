const { merge } = require('webpack-merge')
const path = require('path')

const mode = process.env.NODE_ENV ?? 'development'

const modeConfig = {
  development: {
    mode: 'development',
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist')
      },
      port: 8080,
      host: '0.0.0.0',
      hot: true,
      historyApiFallback: true
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
    index: path.join(__dirname, 'src/js/index.tsx')
  },
  output: {
    path: path.join(__dirname, 'dist')
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
}, modeConfig[mode] ?? {})