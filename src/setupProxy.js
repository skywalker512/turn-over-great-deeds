const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    proxy({
      target: 'http://47.95.210.105:8085/',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    }),
  );
};
