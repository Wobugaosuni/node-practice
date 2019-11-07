/**
 * tcp 长连接
 * http请求是在tcp的基础上的，一个tcp可以有多个http请求
 * Connection 有两个值，'keep-alive' 和 'close'，默认 'keep-alive'
 */
const http = require('http')
const fs = require('fs')

module.exports = () => {
  http.createServer((request, response) => {
    console.log('request come:', request.url)

    // 读模板
    const html = fs.readFileSync(`${__dirname}/index.html`, 'utf8')
    // 读图片
    const img = fs.readFileSync(`${process.cwd()}/extra/jinmao.jpeg`)
    console.log('img:', img)

    if (request.url === '/') {
      // 请求文档资源
      response.writeHead(200, {
        'Content-Type': 'text/html',
        'Connection': 'close' // 不重复使用tcp连接
      })
      // 写入模板
      response.end(html)
    } else {
      // 请求图片资源
      response.writeHead(200, {
        'Content-Type': 'image/jpeg',
        'Connection': 'close' // 不重复使用tcp连接
      })
      response.end(img)
    }

    
  }).listen(8888)

  console.log('server listening on 8888')
}