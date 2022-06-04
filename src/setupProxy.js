const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = app => {
    app.use(
        createProxyMiddleware('/socket/market',{ target: 'https://suncrypto.in', changeOrigin: true })
    )
}