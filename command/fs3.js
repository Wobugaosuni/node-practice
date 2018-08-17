
'use strict'
const chalk = require('chalk')

module.exports = () => {
  var fs = require('fs')

  d()

  function b() {
    /**
     * 异步删除文件，不能删除目录
     * 文件不存在，报错
     */
    fs.unlink('./extra/2.md', error => {
      if (error) {
        console.log('删除失败:', error)
      } else {
        console.log('删除成功')
      }
    })

    /**
     * 同步删除文件
     * 文件不存在，报错
     */
    fs.unlinkSync('./extra/1.txt')
  }

  function c() {
    /*
     * 异步重命名文件
     * fs.rename(oldPath, newPath, callback)
     */
    fs.rename('./extra/3.txt', './extra/3.md', error => {
      if (error) {
        console.log('重命名失败:', error)
      } else {
        console.log('重命名成功')
      }
    })
  }

  function d() {
    /**
     * 同步重命名
     */
    fs.renameSync('./extra/3.md', './extra/3.txt')
  }
}
