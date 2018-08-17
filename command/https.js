'use strict'
const https = require('https')
const fs = require('fs')

module.exports = () => {
  a()

  // https server例子
  /**
   * 开启一个web服务
   */
  function a() {
    const port = 3009
    const hostname = '127.0.0.1'
    const options = {
      key: fs.readdirSync('ssh_key.pem'),
      cert: fs.readdirSync('ssh_cert.pem'),
    }

    const server = https.createServer(options, (serverReq, serverRes) => {
      serverRes.statusCode = 200
      serverRes.setHeader('Content-Type', 'text/plain')  // 为一个隐式的响应头设置值
      serverRes.end('hey node')
    })

    server.listen(port, hostname, () => {
      console.log(`Server running at http://${hostname}:${port}/`)
    })
  }
}
