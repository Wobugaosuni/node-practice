
'use strict'
const chalk = require('chalk')

module.exports = () => {
  var fs = require('fs')

  b()

  /**
   * 找出软链接指向的真实路径
   */
  function a() {
    /**
     * fs.readlink(path[, options], callback)
     * 异步
     */
    fs.readlink('./extra/3for-link.txt', (error, link) => {
      if (error) {
        console.log('查找失败:', error);
      } else {
        console.log('查找成功:', link);
      }
    })

    /**
     * 同步
     * 报错`Error: EINVAL: invalid argument, readlink './extra/1for-hard.txt'`：不能找硬链接的
     */
    const hardRealPath = fs.readlinkSync('./extra/1for-hard.txt')  // './extra/1for-hard.txt' 为一个硬链接
    console.log('hardRealPath:', hardRealPath)
  }

  /**
   * 真实路径
   */
  function b() {
    /**
     * 异步
     */
    fs.realpath('./extra/1.txt', (error, realpath) => {
      if (error) {
        console.log('查找失败:', error);
      } else {
        console.log('查找成功:', realpath);  // 文件路径
        console.log('process.cwd:', process.cwd());  // 文件所在目录路径
      }
    })

    /**
     * 同步
     * 报错`Error: ENOENT: no such file or directory, stat '/Users/qiuxia/code/node/node-practice/extra/3for-link.txt'`：不能找软链接
     */
    const realPathLink = fs.realpathSync('./extra/3for-link.txt')  // './extra/3for-link.txt' 为一个软链接
    console.log('realPathLink:', realPathLink)
  }
}
