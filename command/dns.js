'use strict'
const chalk = require('chalk')
const dns = require ('dns')

/**
 * 域名解析 dns.lookup() dns.resolve4()
 */

module.exports = () => {
  a()

  /*
   * 查找域名对应的ip: http://nodejs.cn/api/dns.html#dns_dns_lookup_hostname_options_callback
   * options:
   * all: <boolean> - 值为true时， 回调函数返回一个包含所有解析后地址的数组，否则只返回一个地址。默认值为false
   */
  function a() {
    /**
     * dns.lookup(hostname[, options], callback)
     * 返回一个ip
     */
    const hostname = 'annhuang.cn'
    dns.lookup(hostname, (error, address, family) => {
      if (error) throw error

      console.log(`${hostname} lookup ip: ${address}`);  // annhuang.cn lookup ip: 192.30.252.154
    })

    /**
     * 同一个域名，可能对应多个不同的ip。
     * dns.lookup()
     * 返回全部ip
     */
    dns.lookup(hostname, {all: true}, (error, addresses) => {
      if (error) throw error

      console.log(`${hostname} lookup ip:`, addresses);  // annhuang.cn ip: [ { address: '192.30.252.154', family: 4 }, { address: '192.30.252.153', family: 4 } ]
    })

    /**
     * * 同一个域名，可能对应多个不同的ip。
     * dns.resolve4(hostname[, options], callback)
     */
    dns.resolve4(hostname, (error, addresses) => {
      if (error) throw error

      console.log(`${hostname} resolve ip:`, addresses);  // annhuang.cn resolve ip: [ '192.30.252.154', '192.30.252.153' ]
    })

    /**
     * 那么 dns.lookup(hostname, {all: true}, (error, addresses) => {}) 和 dns.resolve4(hostname[, options], callback)有啥区别呢？
     * 如上实验结果，`dns.lookup`返回的数组元素是一个对象，包括`address`、`family`两个属性。而`dns.resolve4(hostname[, options], callback)`返回的数组元素是一个字符串
     * 还有第二个不同点，如果在`hosts`文件里配置如下：`127.0.0.1   annhuang.cn`，配置会影响`lookup`函数，但不会影响`resolve`函数
     * 在执行一遍，结果如下
     */
    // annhuang.cn lookup ip: 127.0.0.1
    // annhuang.cn lookup ip: [ { address: '127.0.0.1', family: 4 } ]
    // annhuang.cn resolve ip: [ '192.30.252.154', '192.30.252.153' ]
  }
}
