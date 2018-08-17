/**
 * 实现定制的可读流、可写流、转换流，及其内置接口
 */

/**
 * transform.\_transform(chunk, encoding, callback)
 * http://nodejs.cn/api/stream.html#stream_transform_transform_chunk_encoding_callback
 */

const stream = require('stream')

// 定制的可读流继承可读流的原型
class ReadStream extends stream.Readable {
  _read() {
    this.push('I ')
    this.push('Love ')
    this.push('You\n ')
    // 可读流的数据读取完毕
    this.push(null)
  }
}

// 可写流
class WriteStream extends stream.Writable {
  constructor() {
    // 声明一个缓存
    this._cached = new Buffer('')
  }

  _write(chunk, encode, cb) {
    // 只做打印工作
    console.log(chunk.toString());
    cb()
  }
}

// 转换流
class TranformStream extends stream.Transform {
  _transform(chunk, encode, cb) {
    this.push(chunk)
    cb()
  }
}

module.exports = () => {

}
