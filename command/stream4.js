/**
 * 实现定制的可读流、可写流、转换流，及其内置接口
 */

/**
 * 转换流
 * transform.\_transform(chunk, encoding, callback)
 * http://nodejs.cn/api/stream.html#stream_transform_transform_chunk_encoding_callback
 * 所有的变换流的执行必须提供一个 _transform() 方法接收输入并提供输出。transform._transform()的实现会处理写入的字节，做某种计算并输出，然后使用 readable.push() 方法把这个输出传递到可读流
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
