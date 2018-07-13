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

- [资源压缩(zlib)]()
- [fs-文件读取和写入，目录读取和递归遍历]()
- [fs-文件是否存在，文件权限，文件访问常量]()
- [fs-文件删除，文件重命名]()
- [fs-目录创建]()
- [f3-目录/文件监听]()

