
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
}
