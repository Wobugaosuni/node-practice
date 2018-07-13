
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
}
