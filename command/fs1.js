'use strict'
const chalk = require('chalk')
const fs = require('fs')
const path = require('path')

module.exports = () => {
  var data

  // 执行的函数
  c()

  // ----------------------------- 文件读取 ----------------------------
  /**
   * 同步读取
   * fs.readFile(path[, options], callback)
   * 如果 options 是一个字符串，则它指定了字符编码
   * 如果未指定字符编码，则返回原始的 buffer
   */
  function a() {
    try {
      const buf = fs.readFileSync('./extra/compress.txt')
      console.log('buf:', buf)
      // <Buffer e6 98 a5 e5 a4 a9 e6 9d a5 e4 ba 86 0a>

      const utf = fs.readFileSync('./extra/compress.txt', 'utf8')
      console.log('utf:', utf)
      // 春天来了
    } catch(error) {
      console.log('读取文件出错：', error)
    }
  }

  /**
   * 异步读取
   */
  function b() {
    fs.readFile('./extra/niuniu.md', 'utf8', (error, data) => {
      if (error) {
        console.log('读取文件出错：', error)
        return
      }
      console.log('文件内容:', data)
    })
  }

  /**
   * 通过文件流读取
   * 适合读取大文件
   * encoding <string> 默认为 null
   * 文档：http://nodejs.cn/api/stream.html#stream_class_stream_readable
   *
   * 'data'事件
   * 'readable'事件
   * 'error'事件
   * 'end'事件
   * 'close'事件
   * readable.pause(): 会使 flowing 模式的流停止触发 'data' 事件， 进而切出 flowing 模式。任何可用的数据都将保存在内部缓存中
   * readable.resume(): 重新触发 'data' 事件, 将暂停模式切换到流动模式
   */
  function c() {
    var readStream = fs.createReadStream('./extra/small.mov')  // 返回一个可读流： fs.ReadStream 类
    var n = 0

    readStream
      .on('data', chunk => {
        n++

        console.log('on data调用的次数：', n);
        // console.log('文件内容:', chunk)

        console.log('isBuffer:', Buffer.isBuffer(chunk));
        // true

        // 暂停读入
        readStream.pause()
        console.log('readStream pause');

        setTimeout(() => {
          // 重新触发 'data' 事件, 将暂停模式切换到流动模式
          readStream.resume()
          console.log('readStrean resume');
        }, 30)
      })
      .on('readable', () => {
        console.log('data readable');
      })
      .on('error', error => {
        console.log('读取文件出错：', error)
      })
      .on('end', () => {
        console.log('没有数据了')
      })
      .on('close', () => {
        console.log('已经关闭了')
      })
  }


  // ---------------------------- 目录读取 ----------------------------
  function aa() {
    /**
     * 异步读取目录
     * 只会读取一层
     */
    fs.readdir('./', (error, data) => {
      if (error) {
        console.log('遍历目录失败', error);
      } else {
        console.log('遍历的目录:', data)
      }
    })
  }

  function bb() {
    /**
     * 同步读取目录，`fs.readdirSync`只会读取一层
     * 需求：递归读取目录
     */
    var getFilesInDir = function (dir) {
      var result = [ path.resolve(dir) ]  // [ '/Users/qiuxia/code/node/node-practice/extra' ]
      var files = fs.readdirSync(dir)  // 一级目录

      files.forEach(item => {
        var file = path.resolve(dir, item)
        var isDirectory = fs.statSync(file).isDirectory()

        if (isDirectory) {
          // 遍历文件夹
          result = result.concat(getFilesInDir(file))
        } else {
          result.push(file)
        }
      })

      return result
    }

    var filesList = getFilesInDir('./extra')
    console.log('filesList:', filesList)
  }
}
