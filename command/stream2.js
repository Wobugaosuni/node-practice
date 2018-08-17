/**
 * 创建一个服务器读取图片，展示在网页上
 */
const http = require('http')
const fs = require('fs')
const request = require('request')

// 读取图片
function a(res) {
  fs.readFile('./extra/imgs/google-logo.png', 'base64', (error, data) => {
    if (error) {
      res.end('文件读取失败')
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'})
      res.end(data)
    }
  })
}

// 加载本地的图片
function b(res) {
  fs.createReadStream('./extra/imgs/google-logo.png').pipe(res)
}

// 加载网络的资源
function c(res) {
  request('https://www.google.com.hk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png').pipe(res)
}

module.exports = () => {
  const server = http.createServer((req, res) => {
    c(res)
  })

  server.listen(8003, '127.0.0.1', () => {
    console.log('Server running at http://127.0.0.1:8003/');
  })
}
