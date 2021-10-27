const path = require('path')

module.exports = {
  swcMinify: true,
  trailingSlash: false,
  images: {
    domains: ['images.prismic.io'],
  },
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
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en-us', 'pt-br'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'en-us',
  },
}
