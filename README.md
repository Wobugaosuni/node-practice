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

## 目录

- [资源压缩(zlib)]()
- [fs1-文件读取，目录读取和递归遍历]()
- [fs6-文件写入，文件内容追加，文件内容截取]()
- [fs2-文件是否存在，文件权限，文件访问常量，修改文件/目录权限]()
- [fs3-文件删除，文件重命名]()
- [fs7-创建文件软链接、硬链接]()
- [fs8-找出文件路径]()
- [fs4-创建目录，创建临时目录]()
- [f35-目录/文件监听]()

## 文档参考

- [Node.js](http://nodejs.cn/api/)
- [nodejs-learning-guide](https://github.com/chyingp/nodejs-learning-guide)
