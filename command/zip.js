'use strict'
const chalk = require('chalk')

module.exports = () => {
  var fs = require('fs')
  var zlib = require('zlib')

  // 执行的函数
  a()

  /**
   * 压缩
   */
  function a() {
    var gzip = zlib.createGzip()

    var inFile = fs.createReadStream('./extra/niuniu.md')
    var outFile = fs.createWriteStream('./extra/niuniu.md.gz')

    inFile.pipe(gzip).pipe(outFile)

    console.log(chalk.green(`√ 压缩成功!`))
  }


  /**
   * 解压缩
   */
  function b() {
    var gunzip = zlib.createGunzip()

    var inFile = fs.createReadStream('./extra/compress.txt.gz')   // 通过文件流读取文件
    var outFile = fs.createWriteStream('./extra/compress.txt')

    inFile
      .pipe(gunzip)
      .pipe(outFile)

    console.log(chalk.green(`√ 解压成功!`))
  }
}
