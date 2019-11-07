## 跨域

在根目录执行：
```bash
  mynode cors
```
启动一个端口8888的服务

再在目录执行：
```bash
  node ./command/CORS/server2.js
```
启动一个端口8881的服务

- 8888服务有一个访问8881的跨域请求

- 解决方法1，在服务处设置（server2.js）：
```
  // 请求文档资源
  response.writeHead(200, {
    'Access-Control-Allow-Origin': '*',
  })
```

- 解决方法2，脚本是可以跨域的（JSONP）
```
  <script src="http://127.0.0.1:8881">
    // 跨域方案2，JSONP
  </script>
```