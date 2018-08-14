## 启动

```bash
  ## 1. 安装依赖包
  npm install

  ## 2. 建立符号链接
  npm link

  ## 3. 执行bin/start下的命令行参数，如
  mynode zip
```

## 目录结构

```
  .
  ├── README.md
  ├── bin
  │   └── start           ---------------- 入口执行文件
  ├── command
  │   └── zip.js          ---------------- 相应命令行执行的文件
  ├── extra
  │   ├── compress.txt    ---------------- 练习用的额外文件
  ├── package-lock.json
  └── package.json
```

## 学习目录

- [资源压缩(zlib)](./command/zip.js)
- [fs1-文件读取，目录读取和递归遍历](./command/fs1.js)
- [fs6-文件写入，文件内容追加，文件内容截取](./command/fs6.js)
- [fs2-文件是否存在，文件权限，文件访问常量，修改文件/目录权限](./command/fs2.js)
- [fs3-文件删除，文件重命名](./command/fs3.js)
- [fs7-创建文件软链接、硬链接](./command/fs7.js)
- [fs8-找出软链接的真实路径，找出普通文件的真实路径](./command/fs8.js)
- [fs4-创建目录，创建临时目录](./command/fs4.js)
- [fs5-目录/文件监听](./command/fs5.js)
- [域名解析-dns](./command/dns.js)
- [url网址解析](./command/url.js)
- [querystring参数解析](./command/querystring.js)
- [http，启动一个服务](./command/http.js)
- [https.get，一个小爬虫，使用`cheerio`辅助小工具](./command/https-get.js)
- [https.get2，爬虫优化](./command/https-get2.js)
- [https，启动一个服务](./command/https.js)

## 文档参考

- [Node.js](http://nodejs.cn/api/)
- [nodejs-learning-guide](https://github.com/chyingp/nodejs-learning-guide)
- [进击Node.js基础（一）](https://www.imooc.com/learn/348)
