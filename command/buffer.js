/**
 * Buffer在nodejs中用来 处理二进制的数据
 * js字符串是用 utf-8 存储的，处理二进制的能力是很弱的
 * 而网络层对资源的请求，响应等基本以 二进制 来进行交互
 * Buffer：创建一个专门存储二进制的缓存区，并提供了一些方法对这些缓存区的数据做进一步的处理
 * Buffer：在nodejs里可全局访问
 */

 module.exports = () => {
   a()

  /*
   * 创建一个实例
   * Buffer.from(string[, encoding])
   * Buffer.from(buffer)
   * Buffer.from(array)
   * encoding: 默认 utf8
   */
  function a() {
    const buf1 = Buffer.from('buffer')
    const buf2 = Buffer.from(buf1)
    const buf3 = Buffer.from([1, 1.33, 1.8])
    console.log('buf1: ', buf1)
    console.log('buf2: ', buf2)
    console.log('buf3: ', buf3)
    // buf1: <Buffer 62 75 66 66 65 72>
    // buf2: <Buffer 62 75 66 66 65 72>
    // buf3:  <Buffer 01 01 01>

    console.log('buf1 toString: ', buf1.toString())
    console.log('buf2 toString: ', buf2.toString())
    console.log('buf3[1]: ', buf3[1])
    console.log('buf3[2]: ', buf3[2])
    // buf1 toString:  buffer
    // buf2 toString:  buffer
    // 1
    // 1
  }

  /**
   * 分配一个大小为 size 字节的新建的 Buffer
   * Buffer.alloc(size[, fill[, encoding]])
   * size <integer> 新建的 Buffer 期望的长度
   * fill <string> | <Buffer> | <integer> 用来预填充新建的 Buffer 的值。 默认: 0
   * encoding <string> 如果 fill 是字符串，则该值是它的字符编码。 默认: 'utf8'
   */
  function b(params) {
    const alloc = Buffer.alloc(5, 'abc');
    console.log('alloc: ', alloc.toString());
    // abcab

    const allocBlank = Buffer.alloc(8)
    console.log('blank: ', allocBlank);
    // blank:  <Buffer 00 00 00 00 00 00 00 00>
    console.log('length: ', allocBlank.length);
    // 8
    allocBlank.write('hello')
    console.log('blank write: ', allocBlank.toString());
    // hello
  }
 }
