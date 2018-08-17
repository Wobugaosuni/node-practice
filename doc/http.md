## http.get() 该方法与 http.request() 唯一的区别是

- 它设置请求方法为 GET
- 自动调用 req.end()
- 详细可见[https-get](../command/https-get.js)、[https-request](../command/https-request.js)

## http vs https

https 在 http 的基础上，增加了 SSL/TLS (数据加密传输)


## http.Server类

- 'request' 事件
  每次接收到一个请求时触发。 注意，每个连接可能有多个请求（在 HTTP keep-alive 连接的情况下）
