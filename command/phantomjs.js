'use strict'
const fs = require('fs')
var page = require('webpage').create();

var url = 'https://www.imooc.com/learn/637';

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

page.open(url, function(status) {
  var content = page.evaluate(function() {
    return JSON.stringify(document);
  });
  console.log('Page content is ' + content);
  // writeFile(JSON.stringify(content), '../extra/spider.txt')

  // console.log('Page is ' + content);
  phantom.exit();
});
