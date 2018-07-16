
'use strict'
const chalk = require('chalk')

module.exports = () => {
  var fs = require('fs')

  c()

  /**
   * 创建文件软链接
   * fs.symlink(target, path[, type], callback)
   * target：要创建软连接的文件
   * path：软连接文件路径
   */
  function a() {
    /**
     * 异步
     */
    fs.symlink('./extra/3.txt', './extra/symbol.txt', error => {
      if (error) throw error
      console.log('创建文件软链接成功')
    })
  }

  function b() {
    /**
     * 同步
     */
    try {
      fs.symlinkSync('./extra/1.txt', './extra/symbol2.txt')
      console.log('创建文件软链接成功');
    } catch (error) {
      console.log('创建软连接失败:', error);
    }
  }

  /**
   * 创建文件硬链接
   * 随意修改一个文件，另外一个文件会同步
   * fs.link(existingPath, newPath, callback)
   * existingPath
   * newPath
   */
  function c() {
    /**
     * 异步
     */
    fs.link('./extra/3.txt', './extra/hard.txt', error => {
      if (error) throw error
      console.log('创建文件硬链接成功')
    })

    /**
     * 同步
     */
  }

}
