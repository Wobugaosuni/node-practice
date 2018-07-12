'use strict'
const chalk = require('chalk')

module.exports = () => {
  var fs = require('fs')
  var zlib = require('zlib')

  /**
   * 压缩
   */
  // var gzip = zlib.createGzip()

  // var inFile = fs.createReadStream('./extra/compress.txt')
  // var outFile = fs.createWriteStream('./extra/compress.txt.gz')

  // inFile.pipe(gzip).pipe(outFile)

  // console.log(chalk.green(`√ 压缩成功!`))

  /**
   * 解压缩
   */
  var gunzip = zlib.createGunzip()

  var inFile = fs.createReadStream('./extra/compress.txt.gz')
  var outFile = fs.createWriteStream('./extra/compress2.txt')

  inFile.pipe(gunzip).pipe(outFile)

  console.log(chalk.green(`√ 解压成功!`))
}
