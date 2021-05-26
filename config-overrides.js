const path = require('path');

module.exports = function override(config, env) {
  config.resolve.alias = {
    'react-router': path.resolve(__dirname, 'src/react-router/index.js'),
    'react-router-dom': path.resolve(__dirname, 'src/react-router-dom/index.js'),
    '@': path.resolve(__dirname, 'src/components/')
  }
  return config;
}