
'use strict'
const chalk = require('chalk')

module.exports = () => {
  var fs = require('fs')

  a()

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
     * 注意：不能找硬链接的
     */
    const hardRealPath = fs.readlinkSync('./extra/1for-hard.txt')
    console.log('hardRealPath:', hardRealPath)
  }

}
