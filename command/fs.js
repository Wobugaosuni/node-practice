'use strict'
const chalk = require('chalk')

module.exports = () => {
  var fs = require('fs')
  var data

  // ----------------- 文件读取 ------------------
  /**
   * 同步读取
   */
  // try {
  //   data = fs.readFileSync('./extra/compress.txt', 'utf8')
  //   console.log('文件内容:', data)
  // } catch(error) {
  //   console.log('读取文件出错：', error)
  // }

  /**
   * 异步读取
   */
  // fs.readFile('./extra/niuniu.md', 'utf8', (error, data) => {
  //   if (error) {
  //     console.log('读取文件出错：', error)
  //     return
  //   }
  //   console.log('文件内容:', data)
  // })

  /**
   * 通过文件流读取
   * 适合读取大文件
   * 文档：http://nodejs.cn/api/stream.html#stream_class_stream_readable
   */
  // var readStream = fs.createReadStream('./extra/niuniu.md', {encoding: 'utf8'})

  // readStream
  //   .on('data', chunk => {
  //     console.log('文件内容:', chunk)
  //   })
  //   .on('error', error => {
  //     console.log('读取文件出错：', error)
  //   })
  //   .on('end', () => {
  //     console.log('没有数据了')
  //   })
  //   .on('close', () => {
  //     console.log('已经关闭了')
  //   })


  // ----------------- 文件写入 ------------------
  // 如果写入文件不存在，则创建。否则，覆盖文件内容
  /**
   * 同步
   */
  // try {
  //   fs.writeFileSync('./extra/write.txt', 'i am so beautiful', 'utf8')
  //   console.log('文件写入成功')
  // } catch (error) {
  //   console.log('写入文件出错：', error)
  // }

  /**
   * 异步
   */
  // fs.writeFile('./extra/write.txt', 'i am so so so beautiful', 'utf8', error => {
  //   if (error) {
  //     console.log('写入文件出错：', error)
  //     return
  //   }
  //   console.log('文件写入成功')
  // })

  /**
   * 通过文件流
   * 文档参考；http://nodejs.cn/api/stream.html#stream_class_stream_writable
   */
  var writeStream = fs.createWriteStream('./extra/write.txt', 'utf8')

  writeStream
    // .on('close', () => {
    //   console.log('已经关闭了')
    // })

  writeStream.write('i am so so ')
  writeStream.write('beautiful')

  console.log('文件写入成功')

  // writeStream
  //   .on('end', () => {
  //     console.log('没有数据了')
  //   })
}
