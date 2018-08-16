'use strict'
const chalk = require('chalk')

module.exports = () => {
  var fs = require('fs')
  var path = require('path')

  var data

  // 执行的函数
  e()

  // --------------------------- 文件写入 -----------------------------
  // 如果写入文件不存在，则创建。否则，覆盖文件内容
  /**
   * 同步
   * fs.writeFile(file, data[, options], callback)
   * data <string> | <Buffer> | <Uint8Array>
   * encoding <string> | <null> 默认为 'utf8'
   * 如果 data 是一个 buffer，则 encoding 选项无效
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
   * 返回一个可写流： fs.WriteStream 类
   *
   * writable.write(chunk[, encoding][, callback])
   * 返回: <boolean> 如果流需要等待 'drain' 事件触发才能继续写入更多数据，则返回 false，否则返回 true
   * 当流还未被排空， 则调用 write() 会缓冲 chunk，并且返回 false。 一旦所有当前被缓冲的数据块都被排空了（被操作系统接受来进行输出），则触发 'drain' 事件。 建议一旦 write() 返回 false，则不再写入任何数据块，直到 'drain' 事件被触发
   * 详看 ./stream.js
   *
   * 'close' 事件
   * 'drain' 事件: 如果调用 stream.write(chunk) 方法返回 false，则在适合恢复写入数据到流时触发 'drain' 事件
   * 'error' 事件
   * 'finish' 事件
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

    writeStream
      .on('end', () => {
        console.log('没有数据了')
      })
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


  // ---------------------------- 文件内容截取 --------------------------
  // 如果len小于文件内容长度，剩余文件内容部分会丢失；
  // 如果len大于文件内容长度，那么超出的部分，会用\0进行填充
  function e() {
    /**
     * 异步文件内容截取
     */
    fs.truncate('./extra/1.txt', 35, error => {
      if(error) throw error
      console.log('文件内容截取成功')
    })

    /**
     * 同步文件内容截取
     */
    try {
      fs.truncateSync('./extra/3.txt', 35)
    } catch (error) {
      console.log('文件内容截取失败:', error);
    }
  }
}
