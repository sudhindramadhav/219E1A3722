// setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use('/test', createProxyMiddleware({
    target: 'http://20.244.56.144', // Replace with your backend API URL
    changeOrigin: true,
  }));
};
