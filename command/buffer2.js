/**
 * 需求：
 * 把图片转成 base64 的格式
 */

const fs = require('fs')

module.exports = () => {
  b()

  /**
   * fs 简单的方法
   * 1. 读取文件
   * 2. 写入文件
   * encoding 不传的话，默认返回 buffer
   */
  function a() {
    fs.readFile('./extra/imgs/google-logo.png', 'base64', (error, base64Image) => {
      if (error) {
        console.log('读取图片出错：', error)
        return
      }
      console.log('图片内容:', `data:image/png;base64,${base64Image}`)

      fs.writeFile('./extra/imgs/goole-base64.png', base64Image, 'base64', error => {
        if (error) {
          console.log('写入文件出错：', error)
          return
        }
        console.log('文件写入成功')
      })
    })
  }

  /**
   * Buffer 静态方法
   *
   * Buffer.isBuffer(obj)
   * 如果 obj 是一个 Buffer 则返回 true ，否则返回 false
   *
   * Buffer.compare(buf1, buf2)
   * Returns: <integer> 0 是相同，1 是不同
   */

   /**
    * Buffer 实例方法
    * 解码
    * buf.toString([encoding[, start[, end]]])
    * encoding <string> 解码使用的字符编码。默认: 'utf8'
    */
  function b() {
    fs.readFile('./extra/imgs/google-logo.png', (error, buf1) => {
      if (error) {
        console.log('读取图片出错：', error)
        return
      }
      console.log('buf1:', buf1)
      // <Buffer 89 50 4e 47 0d 0a 1a 0a 00 00 00 0d 49 48 44 52 00 00 02 20 00 00 00 b8 08 06 00 00 00 da 23 57 1b 00 00 34 87 49 44 41 54 78 01 ec dd 03 90 25 3f 1e ... >
      console.log('buf是Buffer吗: ', Buffer.isBuffer(buf1));
      // true

      const base64Image = buf1.toString('base64')
      const buf2 = Buffer.from(base64Image, 'base64')
      console.log('buf2: ', buf2);
      // <Buffer 89 50 4e 47 0d 0a 1a 0a 00 00 00 0d 49 48 44 52 00 00 02 20 00 00 00 b8 08 06 00 00 00 da 23 57 1b 00 00 34 87 49 44 41 54 78 01 ec dd 03 90 25 3f 1e ... >

      const compare = Buffer.compare(buf1, buf2)
      console.log('compare: ', compare);
      // 0

      const decodedImage = buf2.toString('base64')
      console.log('decodedImage: ', `data:image/png;base64,${decodedImage}`)

      fs.writeFile('./extra/imgs/goole-base64.png', decodedImage, 'base64', error => {
        if (error) {
          console.log('写入文件出错：', error)
          return
        }
        console.log('文件写入成功')
      })
    })
  }
}
