/* eslint-disable @typescript-eslint/no-var-requires */
const config = require('config');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProd ? 'https://www.spaceone.org/' : '',
  serverRuntimeConfig: {
    githubAccessToken: config.get('GITHUB.ACCESS_TOKEN'),
  },
  webpack(conf) {
    conf.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return conf;
  },
};
