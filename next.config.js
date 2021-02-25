const path = require('path')

const withPlugins = require('next-compose-plugins')
const withFonts = require('next-fonts')
const ESLintPlugin = require('eslint-webpack-plugin')

const nextConfig = {
  webpack: (config, { dev }) => {
    if (dev) {
      config.plugins.push(
        new ESLintPlugin({
          extensions: ['js', 'jsx', 'ts', 'tsx'],
        })
      )
    }

    config.module.rules.push({
      test: /\.svg$/,
      include: [path.resolve(__dirname, 'icons')],
      use: ['@svgr/webpack?+icon,+ref', 'url-loader'],
    })

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    })

    return config
  },
}

module.exports = withPlugins([withFonts], nextConfig)
