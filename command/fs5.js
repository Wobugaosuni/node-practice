
'use strict'
const chalk = require('chalk')

module.exports = () => {
  var fs = require('fs')

  b()

  // 注意：fs.watch() 比 fs.watchFile 和 fs.unwatchFile 更高效。
  // 可能的话，应该使用 fs.watch 而不是 fs.watchFile 和 fs.unwatchFile
  function a() {
    /**
     * 监听
     * 文件
     * 本质：轮询
     */
    fs.watchFile('./extra/3.txt', {interval: 2000}, (curr, prev) => {
      console.log(`the current mtime is: ${curr.mtime}`);
      console.log(`the previous mtime was: ${prev.mtime}`)
    })
  }

  function b() {
    /**
     * 监听
     * 文件/目录
     * eventType: 'rename' 或 'change'。在大多数平台，当一个文件出现或消失在一个目录里时，'rename' 会被触发
     * filename: 触发事件的文件的名称
     */
    const options = {
      recursive: true,  // 全部子目录都被监听
    }
    fs.watch('./extra', options, (eventType, filename) => {
      console.log(`事件类型是: ${eventType}`);
      if (filename) {
        console.log(`提供的文件名: ${filename}`);
      } else {
        console.log('未提供文件名');
      }
    })
  }
}
