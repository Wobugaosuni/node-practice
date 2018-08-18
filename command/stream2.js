/**
 * 创建一个服务器读取图片，展示在网页上
 */

/**
 * request模块
 * https://github.com/request/request
 * 使用request发起网络请求
 */

/**
 * pipe() 方法
 * 自动的监听 data事件 和 end事件，把数据源源不断地发送到客户端
 * 还可以自动控制后端压力，在客户端链接缓慢时，自动控制流量，并且只有在pipe末端的目标流真正需要数据的时候才会从源头取得数据
 * 左边是可读流，右边是输出流
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
  fs.createReadStream('./extra/imgs/google-logo.png')
    .pipe(res)
}

// 加载网络的资源
function c(res) {
  request('https://www.google.com.hk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png')
    .pipe(res)
}


module.exports = () => {
  pipe()

  function server() {
    const server = http.createServer((req, res) => {
      c(res)
    })

    server.listen(8003, '127.0.0.1', () => {
      console.log('Server running at http://127.0.0.1:8003/');
    })
  }

  // 读取写入大文件
  // ....非常牛逼
  function pipe() {
    fs.createReadStream('./extra/big.mov').pipe(fs.createWriteStream('./extra/big-pipe.mov'))
  }
}
