/**
 * 
 */
const http = require('http')
const fs = require('fs')

http.createServer((request, response) => {
  console.log('request come:', request.url)
  // 读模板
  const html = fs.readFileSync(`${__dirname}/index.html`, 'utf8')

  if (request.url === '/') {
    // 请求文档资源
    response.writeHead(200, {
      'Content-Type': 'text/html',
    })
    // 写入模板
    response.end(html)
  }

  if (request.url === '/test.js') {
    // 请求的资源，缓存测试
    response.writeHead(200, {
      'Cache-Control': 'max-age=200',
      'Content-Type': 'text/javascript',
    })
    response.end('console.log("cache-control test")')
  }
}).listen(8888)

console.log('server listening on 8888')
