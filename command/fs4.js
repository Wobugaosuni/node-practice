
'use strict'
const chalk = require('chalk')

module.exports = () => {
  var fs = require('fs')

  b()

  //
  function a() {
    /**
     * 异步创建目录，如果目录已存在，报错
     */
    fs.mkdir('./extra/dir', error => {
      if (error) {
        console.log('创建目录失败:', error);
      } else {
        console.log('创建目录成功');
      }
    })

    /**
     * 同步创建目录，如果目录已存在，报错
     */
    fs.mkdirSync('./extra/dir-sync')
  }

  /**
   * 创建一个唯一的临时目录
   * fs.mkdtemp(prefix[, options], callback)
   * 生成六位随机字符附加到一个要求的 prefix 后面
   */
  function b() {
    fs.mkdtemp('./extra/temp', (error, folder) => {
      // 会生成如下目录：
      // drwx------   2 qiuxia  staff     68 Jul 16 20:28 temprcRA0O
      if (error) {
        console.log('创建临时目录失败:', error);
      } else {
        console.log('创建临时目录成功:', folder);
      }
    })
  }
}
