'use strict'
const chalk = require('chalk')

module.exports = () => {
  var fs = require('fs')
  var path = require('path')

  var data

  // 执行的函数
  a()

  // ----------------------------- 文件读取 ----------------------------
  /**
   * 同步读取
   */
  function a() {
    try {
      data = fs.readFileSync('./extra/compress.txt', 'utf8')
      console.log('文件内容:', data)
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
   * 文档：http://nodejs.cn/api/stream.html#stream_class_stream_readable
   */
  function c() {
    var readStream = fs.createReadStream('./extra/niuniu.md', {encoding: 'utf8'})  // 返回一个可读流： fs.ReadStream 类

    readStream
      .on('data', chunk => {
        console.log('文件内容:', chunk)
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
