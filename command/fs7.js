
'use strict'
const chalk = require('chalk')

module.exports = () => {
  var fs = require('fs')

  a()

  /**
   * 创建文件链接
   * fs.symlink(target, path[, type], callback)
   *
   */
  function a() {
    /**
     * 异步
     */
    fs.symlink('./extra/3.txt', './extra/symbol.txt', error => {
      if (error) throw error
      console.log('创建文件链接成功')
    })
  }

}
