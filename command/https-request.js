'use strict'
const https = require('https')
const querystring = require('querystring')

const postData = querystring.stringify({
  content: '我是精壮的美少女',
  cid: 348,
  mid: 8837,
})

const options = {
  host: 'www.imooc.com',
  port: 443,  // http默认端口80，https默认端口443
  method: 'POST',
  path: '/course/docomment',
  headers: {
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Content-Length': postData.length,
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Cookie': 'UM_distinctid=162a84508a6aaa-02ec70e5312a37-336c7b04-1aeaa0-162a84508a762a; imooc_uuid=ae29b513-995b-4b2b-981e-71ac210981af; imooc_isnew_ct=1531298421; imooc_isnew=2; PHPSESSID=sq6ot153sdvo1desqc4rb2n6u3; Hm_lvt_fb538fdd5bd62072b6a984ddbc658a16=1531833596,1531839745,1531839999,1532085062; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1531298424,1531833431,1532084982; loginstate=1; apsid=E1MmQ3OGUzNTZiYjQ1MTIxZDIzMGQ5M2Y1OWUwY2YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMzQxNDQ3MQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzOTc0MDEzNzRAcXEuY29tAAAAAAAAAAAAAAAAAAAAADBhY2ZkZjkzNmQ0MDk1ZTFhZGU1NWM2MDE2Nzc3YjA0OplZWyXwn1k%3DYT; last_login_username=397401374%40qq.com; IMCDNS=0; Hm_lpvt_fb538fdd5bd62072b6a984ddbc658a16=1532750885; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1532750885; cvde=5b51c2f5c8cc5-171',
    'Host': 'www.imooc.com',
    'Origin': 'https://www.imooc.com',
    'Pragma': 'no-cache',
    'Referer': 'https://www.imooc.com/video/8837',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36',
    'X-Requested-With': 'XMLHttpRequest',
  }
}

module.exports = () => {
  const req = https.request(options, res => {
    console.log('状态码：', res.statusCode);
    console.log('响应头：', res.headers);

    res.setEncoding('utf8')

    res.on('data', chunk => {
      console.log('响应主体：', chunk);
    })

    res.on('end', () => {
      console.log('响应中已无数据');
    })
  })

  req.on('error', error => {
    console.log('请求遇到问题：', error);
  })

  // 写入数据到请求主体
  req.write(postData)
  req.end()
}

