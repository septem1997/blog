const express = require('express')
const next = require('next')
const {createProxyMiddleware } = require('http-proxy-middleware')

const devProxy = {
  '/api': {
    target: 'http://127.0.0.1:4080',
    pathRewrite: {
      '^/api': '/'
    },
    changeOrigin: true
  }
}

const port = parseInt(process.env.PORT, 10) || 8888
const dev = process.env.NODE_ENV !== 'production'
const app = next({
  dev
})
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()
    if (dev && devProxy) {
      Object.keys(devProxy).forEach(function(context) {
        server.use(createProxyMiddleware(context, devProxy[context]))
      })
    }

    server.all('*', (req, res) => {
      handle(req, res)
    })

    server.listen(port, err => {
      if (err) {
        throw err
      }
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
  .catch(err => {
    console.log('An error occurred, unable to start the server')
    console.log('发生错误，无法启动服务器')
    console.log(err)
  })
