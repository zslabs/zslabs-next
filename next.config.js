const path = require('path')

const withPlugins = require('next-compose-plugins')
const withFonts = require('nextjs-fonts')
const withMDX = require('@next/mdx')({
  extension: /\.md$/,
})

const nextConfig = {
  webpack: (config, { dev }) => {
    if (dev) {
      config.module.rules.push({
        test: /\.js$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          // Emit errors as warnings for dev to not break webpack build.
          // Eslint errors are shown in console for dev, yay :-)
          emitWarning: dev,
        },
      })
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

module.exports = withPlugins([withFonts, withMDX], nextConfig)
