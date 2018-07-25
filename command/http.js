'use strict'
const chalk = require('chalk')
const http = require('http')

module.exports = () => {
  b()

  // http server例子
  /**
   * 开启一个web服务
   */
  function a() {
    /**
     * http.createServer() 返回一个新的 `http.Server` 实例
     * response.end([data][, encoding][, callback])
     * 如果指定了 data，则相当于调用 response.write(data, encoding) 之后再调用 response.end(callback)
     */
    const port = 3009
    const hostname = '127.0.0.1'

    const server = http.createServer((serverReq, serverRes) => {
      // response.setHeader(name, value) 设置的响应头会与 response.writeHead() 设置的响应头合并，且 response.writeHead() 的优先
      // response.writeHead(statusCode[, statusMessage][, headers])
      // serverRes.writeHead(200, {'Content-Type': 'text/plain'})
      serverRes.statusCode = 200
      serverRes.setHeader('Content-Type', 'text/plain')  // 为一个隐式的响应头设置值
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
}
