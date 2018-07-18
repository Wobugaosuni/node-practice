'use strict'
const chalk = require('chalk')
const http = require('http')

/**
 * 开启一个web服务
 */
module.exports = () => {
  // http server例子
  /**
   * http.createServer() 返回一个新的 `http.Server` 实例
   */
  const port = 3009
  const hostname = '127.0.0.1'

  const server = http.createServer((serverReq, serverRes) => {
    serverRes.statusCode = 200
    serverRes.setHeader('Content-Type', 'text/plain')
    serverRes.end('hey node')
  })

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
  })

  // http client例子
  // const client = http.get('http://127.0.0.1:3000', clientRes => {
  //   clientRes.pipe(process.stdout)
  // })
}
