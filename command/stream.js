/**
 * 需求
 * 读取和写入大文件
 */

const fs = require('fs')

module.exports = () => {
  const readStream = fs.createReadStream('./extra/big.mov')
  const writeStream = fs.createWriteStream('./extra/big-copy.mov')
  let n = 0

  readStream
    .on('data', chunk => {
      n++
      console.log('on data调用的次数：', n);

      // 如果读入比写入快，数据流内部的缓存可能会爆仓
      // 需要判断读入的数据是否都写入到目标了，如果缓存区的数据已经全写入到目标，则继续读入
      // writeStream.write(chunk): 当流还未被排空， 则调用 write() 会缓冲 chunk，并且返回 false。
      if (writeStream.write(chunk) === false) {
        // 数据还在缓存区，则停止读入
        console.log('still cached');
        readStream.pause()
      }
      // writeStream.write(chunk)
    })
    .on('end', () => {
      console.log('读完了')
      writeStream
        .on('end', () => {
          console.log('写完了')
        })
    })

  // 流中的数据已经被耗费完了（写入到目标完成）
  // 如果调用 stream.write(chunk) 方法返回 false，则在适合恢复写入数据到流时触发 'drain' 事件
  writeStream
    .on('drain', () => {
      console.log('data drains');

      // 已经写完流中的数据了，可以继续读
      readStream.resume()
    })
}
