/* eslint-disable @typescript-eslint/no-var-requires */
const config = require('config');

module.exports = {
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
