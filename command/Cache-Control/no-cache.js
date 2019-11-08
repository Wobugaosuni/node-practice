/**
 * no-cache 服务器验证缓存
 * 设置验证头：last-modified、etag
 * 在目录下执行：node no-cache.js
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
    // 判断是否读缓存
    const etag = request.headers['if-none-match']
    if (etag === '456') {
      // 读缓存，不用返回数据
      response.writeHead(304, {
        'Content-Type': 'text/javascript',
      })
      // 虽然没有返回数据。但是基于浏览器缓存，浏览器控制台的Response还是返回了缓存的内容
      response.end('')
    } else {
      // 不读缓存
      response.writeHead(200, {
        'Content-Type': 'text/javascript',
        'Cache-Control': 'max-age=600, no-cache', // 需要服务端验证
        'Last-Modified': '123',
        'Etag': '456',
      })
      response.end('console.log("cache-control test")')
    }
  }
}).listen(8888)

console.log('server listening on 8888')
