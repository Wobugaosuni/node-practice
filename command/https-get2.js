/**
 * cheerio：爬虫辅助小工具，实现了核心jQuery的子集
 * https://github.com/cheeriojs/cheerio/wiki/Chinese-version
 */

'use strict'
const https = require('https')
const cheerio = require('cheerio')
const fs = require('fs')

const baseUrl = 'https://www.imooc.com/learn/'
const courserMembersUrl = 'https://www.imooc.com/course/AjaxCourseMembers?ids='

// 数据结构格式
// const resultList = [{
//   courseName: '',
//   learningNumbers: '',
//   chapters: [{
//     title: '',
//     chapter: []
//   }],
// }, {
//   。。。
// }]

function filterMessage(html, numbers) {
  var $ = cheerio.load(html)

  var courseName = $('.course-infos .hd h2').text()
  var result = {}

  result.courseName = courseName
  result.learningNumbers = numbers
  result.chapters = []

  var chapters = $('.course-chapters .chapter')

  chapters.each((index, element) => {
    let chapter = {}
    let title = $('h3', element).text()
    chapter.title = title
    result.chapters.push(chapter)
  });
  return result
}

/**
 * 同步写入文件
 */
function writeFile(content) {
  try {
    fs.writeFileSync('./extra/spider.json', content, 'utf8')
    console.log('文件写入成功');
  } catch (error) {
    console.log('文件写入出错:', error);
  }
}

function promiseHtml() {
  console.log('正在爬取html...');

  let html = ''
  return new Promise(function (resolve, reject) {
    https.get(baseUrl + '637', res => {
      // console.log('状态码：', res.statusCode);
      // console.log('请求头：', res.headers);

      res.on('data', buffer => {
        // process.stdout.write(d)
        html += buffer
      })

      res.on('end', () => {
        // console.log('html:', html)
        // 信息过滤
        // const result = filterMessage(html)
        // console.log('result:', result);
        resolve(html)

        // 文件写入
        // writeFile(JSON.stringify(result))
      })
    }).on('error', error => {
      console.log('获取课程资源出错:', error)
    })
  })
}

function promiseNumbers() {
  console.log('正在爬取人数...');

  let numbers = ''
  return new Promise(function(resolve, reject) {
    https.get(courserMembersUrl + '637', res => {
      res.on('data', buffer => {
        numbers = JSON.parse(buffer).data[0].numbers
        // console.log('get courserMembersUrl data success:', numbers);
        // console.log('get courserMembersUrl buffer success:', buffer);
      })

      res.on('end', () => {
        resolve(numbers)
      })
    }).on('error', error => {
      console.log('获取学习人数出错:', error);
    })
  })
}

module.exports = () => {
  /**
   * HTTP小爬虫
   */
  Promise.all([promiseHtml(), promiseNumbers()])
    .then(list => {
      // console.log('get promise.all list success:', list[1])
      const result = filterMessage(list[0], list[1])

      console.log('result:', result)
    })
    .catch(error => {
      console.log('promise all fail:', error)
    })
}
