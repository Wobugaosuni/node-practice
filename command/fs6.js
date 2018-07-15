'use strict'
const chalk = require('chalk')

module.exports = () => {
  var fs = require('fs')
  var path = require('path')

  var data

  // 执行的函数
  d()

  // --------------------------- 文件写入 -----------------------------
  // 如果写入文件不存在，则创建。否则，覆盖文件内容
  /**
   * 同步
   */
  function a() {
    try {
      fs.writeFileSync('./extra/1.txt', 'i am so beautiful', 'utf8')
      console.log('文件写入成功')
    } catch (error) {
      console.log('写入文件出错：', error)
    }
  }

  /**
   * 异步
   */
  function b() {
    fs.writeFile('./extra/2.txt', 'i am so so so beautiful', 'utf8', error => {
      if (error) {
        console.log('写入文件出错：', error)
        return
      }
      console.log('文件写入成功')
    })
  }

  /**
   * 通过文件流
   * 文档参考；http://nodejs.cn/api/stream.html#stream_class_stream_writable
   */
  function c() {
    var writeStream = fs.createWriteStream('./extra/3.txt', 'utf8')  // 返回一个可写流： fs.WriteStream 类

    // writeStream
      // .on('close', () => {
      //   console.log('已经关闭了')
      // })

    writeStream.write('i am so so so ')
    writeStream.write('beautiful')

    console.log('文件写入成功')

    // writeStream
    //   .on('end', () => {
    //     console.log('没有数据了')
    //   })
  }


  // --------------------------- 文件内容追加 -----------------------------
  function d() {
    /**
     * 异步文件内容追加
     */
    fs.appendFile('./extra/1.txt', '\ni agree', error => {
      if(error) throw error
      console.log('append成功')
    })

    /**
     * 同步文件内容追加
     */
    try {
      fs.appendFileSync('./extra/3.txt', '\ni agree')
    } catch (error) {
      console.log('文件内容追加失败:', error);
    }
  }
}
