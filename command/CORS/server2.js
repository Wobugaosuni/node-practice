/**
 * 
 */
const http = require('http')
const fs = require('fs')

http.createServer((request, response) => {
  console.log('request come:', request.url)

    // 请求文档资源
    response.writeHead(200, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'X-Test-Cors',
      'Access-Control-Max-Age': '600',
    })
    // 写入模板
    response.end('123')
}).listen(8881)

console.log('server listening on 8881')
