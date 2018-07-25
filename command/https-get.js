'use strict'
const chalk = require('chalk')
const https = require('https')

module.exports = () => {
  /**
   * HTTP小爬虫
   */
  const url = 'https://juejin.im/welcome/frontend'
  let html = ''

  https.get(url, res => {
    console.log('状态码：', res.statusCode);
    console.log('请求头：', res.headers);

    res.on('data', data => {
      // process.stdout.write(d)
      html += data
    })

    res.on('end', () => {
      console.log('html:', html)
    })
  }).on('error', e => {
    console.log(e)
  })
}
