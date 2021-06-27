const path = require('path')

module.exports = {
  trailingSlash: false,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp3)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/sounds/',
          outputPath: 'static/sounds/',
          name: '[name].[ext]',
          esModule: false,
        },
      },
    })
    return config
  },
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }

    return config
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
