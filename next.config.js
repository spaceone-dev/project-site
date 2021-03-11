/* eslint-disable @typescript-eslint/no-var-requires */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const config = require('config');

const isProd = process.env.NODE_ENV === 'production';

module.exports = withBundleAnalyzer({
  assetPrefix: isProd ? 'https://www.spaceone.org/' : '',
  serverRuntimeConfig: {
    githubAccessToken: config.get('GITHUB.ACCESS_TOKEN'),
  },
  webpack(conf) {
    conf.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [{
                removeRasterImages: false,
                removeStyleElement: false,
                removeUnknownsAndDefaults: false,
              }],
            },
          },
        },
      ],
    });

    return conf;
  },
});
