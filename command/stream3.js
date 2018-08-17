/**
 * 文档参考
 * 用于实现流的API
 *
 * readable.push(chunk[, encoding])
 * chunk: 压入读队列的数据块
 *
 * writable._write(chunk, encoding, callback)
 */



// 1. 引进类
const Readable = require('stream').Readable
const Writable = require('stream').Writable

module.exports = () => {

  // 2. 创建实例
  const readStream = new Readable()
  const writeStream = new Writable()

  // 3. 给可读流push数据
  readStream.push('I ')
  readStream.push('Love ')
  readStream.push('You\n ')
  // 可读流的数据读取完毕
  readStream.push(null)

  // 4. 重写可写流的write的方法
  // 私有方法前加下划线
  writeStream._write = function (chunk, encode, cb) {
    console.log(chunk.toString());
    cb()
  }

  // 5. 用 pipe 将可读流和可写流进行传递，实现数据的流动
  readStream.pipe(writeStream)
}
