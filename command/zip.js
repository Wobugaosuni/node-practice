'use strict'
const chalk = require('chalk')

module.exports = () => {
  /**
   * 压缩
   */
  var fs = require('fs')
  var zlib = require('zlib')

  var gzip = zlib.createGzip()

  var inFile = fs.createReadStream('./extra/compress.txt')
  var outFile = fs.createWriteStream('./extra/compress.txt.gz')

  inFile.pipe(gzip).pipe(outFile)

  console.log(chalk.green(`\n √ 压缩成功!`))
}
