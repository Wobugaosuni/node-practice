/**
 * 数据协商
 * 对返回内容进行压缩
 */
const http = require('http')
const fs = require('fs')
const zlib = require('zlib')

http.createServer((request, response) => {
  console.log('request come:', request.url)
  // 读模板
  const html = fs.readFileSync(`${__dirname}/index.html`) // 需要压缩，返回buffer

  if (request.url === '/') {
    // 请求文档资源
    response.writeHead(200, {
      'Content-Type': 'text/html',
      'Content-Encoding': 'gzip'
    })
    // 写入模板
    const content = zlib.gzipSync(html)
    response.end(content)
    // response.end(html)
  }
}).listen(8888)

console.log('server listening on 8888')
