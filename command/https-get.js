'use strict'
const chalk = require('chalk')
const https = require('https')
var cheerio = require('cheerio')

function filterMessageExample(html) {
  const text = '<ul id="fruits"><li class="apple"><a>Apple</a></li><li class="orange"><a>Orange</a></li><li class="pear"><a>Pear</a></li></ul>'
  var $ = cheerio.load(text)

  var list = $('#fruits li')

  var result = []

  list.each((index, item) => {
    result.push($('a', item).text())
  })

  console.log('result:', result);
}

// 数据结构格式
// [{
//   article: '',
//   articleUrl: '',
//   author: '',
// }, {
//   。。。
// }]

function filterMessage(html) {
  const text = html
  var $ = cheerio.load(text)

  var list = $('ul.entry-list >li.item')

  var result = []

  list.each((index, item) => {
    let obj = {}

    // 文章标题
    obj.article = $('.title-row', item).find('a.title').text()

    // 文章url
    let articlePath = $('.title-row', item).find('a.title').attr('href')
    obj.articleUrl = `https://juejin.im${articlePath}`

    // 作者
    obj.author = $('.meta-row', item).find('.user-popover-box a').text()

    // 作者url
    // let authorPath = $('.meta-row', item).find('.user-popover-box a').attr('href')
    // obj.authorUrl = `https://juejin.im${authorPath}`

    result.push(obj)
  })

  return result
}

module.exports = () => {
  /**
   * HTTP小爬虫
   */
  const url = 'https://juejin.im/welcome/frontend'
  let html = ''

  https.get(url, res => {
    // console.log('状态码：', res.statusCode);
    // console.log('请求头：', res.headers);

    res.on('data', data => {
      // process.stdout.write(d)
      html += data
    })

    res.on('end', () => {
      // console.log('html:', html)
      // 信息过滤
      const result = filterMessage(html)
      console.log('result:', result);
    })
  }).on('error', error => {
    console.log('获取资源出错:', error)
  })
}
