import { Configuration } from 'webpack'
import 'webpack-dev-server'
import merge from 'webpack-merge'
import { join } from 'path'

const mode = process.env.NODE_ENV ?? 'development'

const baseConfig: Configuration = {
  entry: {
    index: join(__dirname, 'src/js/index.tsx')
  },
  output: {
    path: join(__dirname, 'dist')
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
}

const modeConfig: Record<string, Configuration> = {
  development: {
    mode: 'development',
    devServer: {
      static: {
        directory: join(__dirname, 'dist')
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

module.exports = merge(baseConfig, modeConfig[mode] ?? {})