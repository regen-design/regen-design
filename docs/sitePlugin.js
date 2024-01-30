// eslint-disable-next-line
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
module.exports = function () {
  return {
    name: 'custom-docusaurus-plugin',
    // eslint-disable-next-line
    configureWebpack(config, isServer, utils) {
      return {
        plugins: [new NodePolyfillPlugin()],
      }
    },
  }
}
