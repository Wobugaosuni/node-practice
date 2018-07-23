'use strict'
const chalk = require('chalk')
const querystring = require('querystring')

module.exports = () => {

  d()

  function a() {
    /**
     * querystring.stringify(obj[, sep[, eq[, options]]])
     * url参数序列化
     * obj <Object> 要序列化成 URL 查询字符串的对象。
     * sep <string> 用于界定查询字符串中的键值对的子字符串。默认为 '&'。
     * eq <string> 用于界定查询字符串中的键与值的子字符串。默认为 '='。
     */
    const obj = { foo: 'bar', baz: ['qux', 'quux'], corge: '' }

    const a = querystring.stringify(obj)  // foo=bar&baz=qux&baz=quux&corge=
    const b = querystring.stringify(obj, ',')  // foo=bar,baz=qux,baz=quux,corge=
    const c = querystring.stringify(obj, ':')  // foo=bar:baz=qux:baz=quux:corge=

    console.log('a:', a)
    console.log('b:', b)
    console.log('c:', c)
  }

  function b() {
    /**
     * querystring.parse(str[, sep[, eq[, options]]])
     * url参数解析
     */
    querystring.parse('foo=bar&baz=qux&baz=quux&corge=')
    // ......
  }

  function c() {
    /**
     * querystring.escape(str)
     * 对给定的str进行url编码
     */
    const str = '<你好>'

    const a = querystring.escape(str)  // %3C%E4%BD%A0%E5%A5%BD%3E

    console.log('a:', a)
  }

  function d() {
    /**
     * querystring.unescape(str)
     * 对给定的字符串进行解码
     */
    const str = '%3C%E4%BD%A0%E5%A5%BD%3E'

    const a = querystring.unescape(str)  // '<你好>'

    console.log('a:', a)
  }
}
