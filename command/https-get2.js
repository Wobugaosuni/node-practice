/**
 * cheerio：爬虫辅助小工具，实现了核心jQuery的子集
 * https://github.com/cheeriojs/cheerio/wiki/Chinese-version
 */

'use strict'
const https = require('https')
const cheerio = require('cheerio')
const fs = require('fs')

const baseUrl = 'https://www.imooc.com/learn/'
const coursesMembersUrl = 'https://www.imooc.com/course/AjaxCourseMembers?ids='
const coursesIdList = ['348', '637', '728', '197', '75']

// 数据结构格式
// const resultList = [{
//   courseName: '',
//   learningNumbers: '',
//   chapters: [{
//     title: '',
//     videos: []
//   }],
// }, {
//   。。。
// }]

/**
 * 处理数据
 */
function filterMessage(html, numbers) {
  var $ = cheerio.load(html)

  var courseName = $('.course-infos .hd h2').text()
  var result = {}

  result.courseName = courseName
  result.learningNumbers = numbers
  result.chapters = []

  var chapters = $('.course-chapters .chapter')

  chapters.each((index, element) => {
    let course = {}
    course.videos = []

    course.title = $('h3', element).text().trim()

    let chapters = $('ul.video >li', element)
    chapters.each((index, item) => {
      // 移除 a 下面的 button 节点
      $('a', item).find('button').remove()

      // 前后删掉空格，删掉多余的空白符
      let text = $('a', item).text().trim().replace(/(\s){3,}/gm, ' ')
      course.videos.push(text)
    })

    // console.log('course.chapters:', course.chapters)

    result.chapters.push(course)
  });

  // console.log('result:', result)
  return result
}

/**
 * 同步写入文件
 */
function writeFile(content, filePath) {
  try {
    fs.writeFileSync(filePath, content, 'utf8')
    console.log(filePath + '写入成功');
  } catch (error) {
    console.log('文件写入出错:', error);
  }
}

/**
 * 同步读取文件
 */
function readFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8')
    console.log(filePath + '读取成功')
    return data
  } catch(error) {
    console.log('读取文件出错：', error)
  }
}

function promiseHtml(courseId) {
  console.log(`正在爬取id为${courseId}的html...`);

  let html = ''
  return new Promise(function (resolve, reject) {
    https.get(baseUrl + courseId, res => {
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

function promiseNumbers(courseId) {
  console.log(`正在爬取id为${courseId}的人数...`);

  let numbers = ''
  return new Promise(function(resolve, reject) {
    https.get(coursesMembersUrl + courseId, res => {
      res.on('data', buffer => {
        numbers = JSON.parse(buffer).data[0].numbers
        // console.log('get coursesMembersUrl data success:', numbers);
        // console.log('get coursesMembersUrl buffer success:', buffer);
      })

      res.on('end', () => {
        resolve(numbers)
      })
    }).on('error', error => {
      console.log('获取学习人数出错:', error);
    })
  })
}

function getTotalData(courseId) {
  return Promise.all([promiseHtml(courseId), promiseNumbers(courseId)])
    .then(list => {
      // console.log('get promise.all list success:', list[1])

      // 把爬取到的文章保存起来
      writeFile(list[0], `./extra/courses/${courseId}.html`)

      // 读取文件
      const data = readFile(`./extra/courses/${courseId}.html`)
      // 数据处理
      const result = filterMessage(data, list[1])
      writeFile(JSON.stringify(result), `./extra/courses/${courseId}.json`)

    })
    .catch(error => {
      console.log('promise all fail:', error)
    })
}

module.exports = () => {
  /**
   * HTTP小爬虫
   */
  const promiseCourses = coursesIdList.map(courseId => {
    getTotalData(courseId)
  })

  // Promise.all(promiseCourses)
  //   .then(() => {
  //     console.log('allList:', allList);
  //   })
  //   .catch(error => {
  //     console.log('全部文章爬取失败');
  //   })
}
