'use strict'
const chalk = require('chalk')
const EventEmitter = require('events').EventEmitter

const myEmitter = new EventEmitter()

module.exports = () => {
  // 每个事件默认最多可以注册 10 个监听器
  // 单个 EventEmitter 实例的限制可以使用 emitter.setMaxListeners(n) 方法改变
  const defaultMaxListeners = myEmitter.getMaxListeners()  // 默认十个
  myEmitter.setMaxListeners(defaultMaxListeners + 5)

  const callback1 = who => {
    console.log(who + ' learn Node.js');
  }

  // 注册事件 learn 的监听器
  myEmitter.on('learn', callback1)
  // 注册事件 learn 的监听器，上面的别名
  myEmitter.addListener('learn', who => {
    console.log(who + ' learn 2');
  })
  // 注册事件 learn 的监听器
  myEmitter.on('learn', who => {
    console.log(who + ' learn 3');
  })
  // 注册事件 learn 的监听器
  myEmitter.on('learn', who => {
    console.log(who + ' learn 4');
  })
  // 注册事件 learn 的监听器
  myEmitter.on('learn', who => {
    console.log(who + ' learn 5');
  })
  // 注册事件 learn 的监听器
  myEmitter.on('learn', who => {
    console.log(who + ' learn 6');
  })
  // 注册事件 learn 的监听器
  myEmitter.on('learn', who => {
    console.log(who + ' learn 7');
  })
  // 注册事件 learn 的监听器
  myEmitter.on('learn', who => {
    console.log(who + ' learn 8');
  })
  // 注册事件 learn 的监听器
  myEmitter.on('learn', who => {
    console.log(who + ' learn 9');
  })
  // 注册事件 learn 的监听器
  myEmitter.on('learn', who => {
    console.log(who + ' learn 10');
  })
  // 注册事件 learn 的监听器
  myEmitter.on('learn', who => {
    console.log(who + ' learn 11');
  })

  // 注册事件 play 的监听器
  myEmitter.on('play', what => {
    console.log('He play ' + what);
  })
  myEmitter.on('play', what => {
    console.log('She play ' + what);
  })

  // 移除某个监听器
  myEmitter.removeListener('learn', callback1)

  // 移除全部或指定 eventName 的监听器
  myEmitter.removeAllListeners('play')

  // 触发事件
  // 如果事件有监听器，则返回 true ，否则返回 false
  const learnEvent = myEmitter.emit('learn', 'ann')
  const playEvent = myEmitter.emit('play', 'games')
  const nullEvent = myEmitter.emit('null')

  console.log('learnEvent:', learnEvent)  // true
  console.log('playEvent:', playEvent)  // false，移除了监听器
  console.log('nullEvent:', nullEvent)  // false，没有此监听器

  // 返回正在监听的事件的监听器的数量
  // const learnCount = myEmitter.listenerCount('learn')
  // 或者
  const learnCount = myEmitter.listeners('learn').length
  const playCount = myEmitter.listenerCount('play')
  console.log('learnCount:', learnCount)
  console.log('playCount:', playCount)
}
