/**
 * 文件访问常量
 * 以下常量由 `fs.constants` 输出，用于 `fs.access()`
 * `F_OK`: 表明文件对于调用进程是可见的（是否存在）
 * `R_OK`: 表明文件可被调用进程读取
 * `W_OK`: ...写入
 * `X_OK`: ...执行
 * 文档：http://nodejs.cn/api/fs.html#fs_file_access_constants
 */

/**
 * Error 常见的error code
 * 用 E 开头的大写字母
 * EACCES (拒绝访问)
 * ENOENT (无此文件或目录):
 * 文档：http://nodejs.cn/api/errors.html#errors_error_code_1
 */

'use strict'
const chalk = require('chalk')

module.exports = () => {
  var fs = require('fs')

  // const file = './command/fs1.js'  // 终端打印出来的权限如下： `-rw-r--r--   1 qiuxia  staff  2578 Jul 12 20:02 fs1.js`
  // const file = 'noexits.js'

  c()

  // 单个判断
  // 默认是 `fs.constants.F_OK`
  function a() {
    // 文件是否存在
    fs.access(file, fs.constants.F_OK, (error) => {
      // console.log('error:', error)
      console.log(`${file} : ${error ? '不存在' : '存在'}`)
    })
    // 文件是否可读
    fs.access(file, fs.constants.R_OK, (error) => {
      console.log(`${file} : ${error ? '不可读' : '可读'}`)  // 可读
    })
    // 文件是否可写
    fs.access(file, fs.constants.W_OK, (error) => {
      console.log(`${file} : ${error ? '不可写' : '可写'}`)  // 可写
    })
    // 文件是否可执行
    fs.access(file, fs.constants.X_OK, (error) => {
      console.log(`${file} : ${error ? '不可执行' : '可执行'}`)  // 不可执行
    })
  }

  // 检查多个
  function b() {
    fs.access(file, fs.constants.F_OK | fs.constants.X_OK, (error) => {
      console.log('error:', error);
      if (error.code === 'ENOENT') {
        console.log(`${file}不存在`);
        process.exit()
      }
      if (error.code === 'EACCES') {
        console.log(`${file}存在，不可执行`);
        process.exit()
      }
      console.log('文件存在且可执行');
    })
  }

  /**
   * 修改文件、目录权限
   * fs.chmod)、fs.fchmod()区别：传的是文件路径，还是文件句柄
   * fs.chmod()、fs.lchmod()区别：如果文件是软连接，那么fs.chmod()修改的是软连接指向的目标文件；fs.lchmod()修改的是软连接
   * File modes: http://nodejs.cn/api/fs.html#fs_file_modes
   */
  function c() {
    // 例如：drwxr-xr-x   3 qiuxia  staff    102 Jul 13 11:38 dir
    /**
     * 异步修改
     */
    fs.chmod('./extra/dir', '755', error => {
      if (error) {
        console.log('修改权限失败', error)
      } else {
        console.log('修改权限成功')
      }
    })

    // 例如：-rw-r--r--   1 qiuxia  staff     29 Jul 13 17:00 3.txt
    /**
     * 同步修改
     */
    fs.chmodSync('./extra/3.txt', '644')
  }
}
