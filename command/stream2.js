/**
 * 创建一个服务器读取图片
 */
const http = require('http')
const fs = require('fs')

module.exports = () => {
  http.createServer((req, res) => {
    // 读取文件
    fs.readFile('../extra/imgs/google-logo.png', (error, data) => {
      if (error) {
        res.end('文件读取失败')
      } else {
        res.writeHead(200, {'Content-Type', 'text/html'})
        res.end(data)
      }
    })
  })
}
