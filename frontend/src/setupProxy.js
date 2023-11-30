const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api/*',
        createProxyMiddleware({
            target: 'https://25.50.56.20:5001',
            changeOrigin: true,
            secure: false
        })
    );
};