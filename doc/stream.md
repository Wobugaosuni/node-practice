## Stream种类

- 可读流（readable）
  * 两种模式
  * 流动中（flowing）
  * 已暂停（paused）


- 可写流（writable）


- Duplex（双工流）
  同时实现了 Readable 和 Writable 接口的流

- Transform（转换流）
  * 变换流是一种 Duplex 流
  * 在读写过程中可以修改和变换数据的 Duplex 流
  * 它的输出与输入是通过某种方式关联的
  * 和所有 Duplex 流一样，变换流同时实现了 Readable 和 Writable 接口
  * 不一样的是，变换流不保存数据。只负责处理流进来的数据，类似水管的阀门
