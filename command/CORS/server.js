/**
 * 
 */
const http = require('http')
const fs = require('fs')

module.exports = () => {
  http.createServer((request, response) => {
    console.log('request come:', request.url)
    // 读模板
    const html = fs.readFileSync(`${__dirname}/index.html`, 'utf8')

    // 请求文档资源
    response.writeHead(200, {
      'Content-Type': 'text/html',
    })
    // 写入模板
    response.end(html)
  }).listen(8888)

  console.log('server listening on 8888')
}