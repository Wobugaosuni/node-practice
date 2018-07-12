## 启动

```bash
  ## 1. 建立符号链接
  npm link

  ## 2. 执行bin/start下的命令行参数，如
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
