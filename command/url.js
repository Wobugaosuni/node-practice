'use strict'
const chalk = require('chalk')
const url = require('url')

/**
 * 地址解析
 */
module.exports = () => {
  /**
   * url.parse(urlString[, parseQueryString[, slashesDenoteHost]])
   * parseQueryString: <boolean> 如果为 true，则 query 属性总会通过 querystring 模块的 parse() 方法生成一个对象。 如果为 false，则返回的 URL 对象上的 query 属性会是一个未解析、未解码的字符串。 默认为 false。
   * slashesDenoteHost: <boolean> 如果为 true，则 // 之后至下一个 / 之前的字符串会被解析作为 host。 例如，//foo/bar 会被解析为 {host: 'foo', pathname: '/bar'} 而不是 {pathname: '//foo/bar'}。 默认为 false
   */
  const urlString = 'http://annhuang.cn/site-search/s?search=路演'
  const slashesUrl = "//annhuang.cn/site-search/s?search=路演"

  const normal = url.parse(urlString)
  const parse = url.parse(urlString, true)

  const slashesNotDenote = url.parse(slashesUrl, true)
  const slashesDenote = url.parse(slashesUrl, true, true)

  console.log('只传一个参数：', normal)  // 返回的对象属性query，是一个字符串，`query: 'search=路演',`
  console.log('parseQueryString：', parse)  // 返回的对象属性query，是一个键值对，`query: { search: '路演' },`

  console.log('slashesNotDenote: ', slashesNotDenote)  // 不可获得协议的，此方法不能识别 host、hostname、pathname
  console.log('slashesDenote: ', slashesDenote)  // 不可获得协议的，此方法能识别 host、hostname、pathname
}
