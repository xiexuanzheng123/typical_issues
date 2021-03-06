/**
 * 简单 高效 强大
 * 在传输层解决了之前遗留问题，通过完全的请求，响应多路复用，压缩头部减小头部体积，添加了优先级，服务端推送
 * 需要大量的协议增加头部请求字段来支持，例如新的流量控制，差错处理，升级机制，
 * 通过在客户端和服务器端传输的数据格式和传输，通过新的二进制帧层控制整个过程以及隐藏复杂性
 
 * 性能提升的核心在于二进制帧层，它指HTTP消息在客户端和服务端如何封装和传输，二进制编码和解码
 * 
 * 3 流 消息 帧
 * 流： 已经建立的链接之间双向流动的字节，它能鞋带一个至多个消息
 * 消息： 一个完整的帧序列，映射到逻辑的请求和响应消息
 * 帧： HTTP/2.0 通信的最小单元，每个帧包括一个帧头，里面有个很小的标志，来区别是属于哪个流
 * 
 * 所有的通信都建立在一个TCP连接上，可以传递大量的双向流通的流
 * 每个流都有独一无二的标志和优先级
 * 每个消息都是逻辑上的请求和响应消息，有一个或者更多个帧组成
 * 来自不同流的帧可以通过帧头的标志来关联和组装起来
 * 
 * Http1.0处于计算机网络中的应用层，HTTP是建立在TCP协议之上，所以HTTP协议的瓶颈及其优化技巧都是基于TCP协议本身的特性
 * tcp建立连接的3次握手和断开连接的4次挥手以及每次建立连接带来的RTT延迟时间
 * 早在HTTP建立之初，主要是为了将HTML文档从服务器传送到客户端的浏览器，
 * 
 * 影响一个HTTP网络请求的因素主要有两个：带宽和延迟
 * 带宽： 如果说在拨号上网的阶段，带宽可能会成为一个比较严重影响请求的问题，但是现在网络基础建设已经使得带宽得到极大的提升，所以不用担心带宽
 * 延迟：  1 浏览器阻塞（HOL blocking）浏览器会因为一些原因导致阻塞请求，浏览器对于同一个域名，同时只能连接4个。超过浏览器最大连接数限制，后续请求就被阻塞
 *        2 DNS查询（DNS lookup） 浏览器需要知道目标服务器的IP才能建立连接，将域名解析为IP的这个系统就是DNS，这个通常利用DNS缓存结果来减小这个时间
 *        3 建立连接（initial connection）HTTP是基于TCP协议的，浏览器最快也要在第三次握手时才能捎带HTTP请求报文，达到真正的建立连接，但是这些连接无法复用
 *          会导致每次请求都经历三次握手和慢启动，三次握手在高延迟的场景下影响较明显，慢启动则对文件类大请求影响
 * 
 * HTTP1.1 
 * 1 缓存处理 在HTTP1.0中，主要使用header里的If-Modified-Since，Expires来做为缓存判断的标准，HTTP1.1中则引入了更多的缓存控制策略例如Entity tag，
 *           If-Unmodified-Since,If-Match, If-None-Match等更多可供选择的缓存头来控制缓存策略
 * 2 带宽优化及网络连接的使用： HTTP1.0中不支持断点续传不支持传一部分，HTTP1.1中则在请求头引入range头域，它允许只请求资源的某个部分，返回代码206
 * 3 错误通知的管理，在HTTP1.1中新增了24个错误状态响应码409 410
 * 4 Host头处理，虚拟机可以共享一个IP地址，HTTP1.1支持Host头域，且如果消息中没有Host头域会报告一个错误
 * 5 长连接 HTTP1.1支持长连接和请求的流水线，在一个TCP连接上可以传送多个HTTP请求和响应，减少了建立和关闭的链接的消耗和延迟，默认开启connection：keep-alive
 * 
 * HTTP1.0和HTTP1.1现存的一些问题
 * 1 每次都建立连接，增加了大量的延迟时间，移动端更突出
 * 2 HTTP1.x在传输数据时，所有传输的内容都是明文，客户端和服务器端都无法验证对方的身份，无法保证数据安全性
 * 3 HTTP1.x中的header里携带的信息过大，影响速度
 * 
 * HTTPS和HTTP
 * 1 HTTPS需要用CA证书，需摇缴费
 * 2 HTTP协议运行在TCP之上，传输的内容都是明文， HTTPS运行在SSL/TLS之上，SSL/TLS运行在TCP之上，所有传输的内容都是经过加密的
 * 3 使用的是完全不同的连接方式，端口也不一样，HTTP是80，HTTPS是443
 * 4 HTTPS可以防止运营商劫持，
 * 
 * HTTPS改造
 * 1 安装CA证书，
 * 2 配置自己的域名
 * 3 HTTPS降低用户访问速度，
 * 4 降低CPU资源
 * 
 * HTTP2.0
 * 基于spdy设计的，HTTP2.0支持明文HTTP传输，而SPDY强制使用HTTPS
 * HTTP2.0消息头采用HPACK
 * 
 * 新特性
 * 新的二进制格式，1.x使用文本，2.0使用二进制帧流，每帧都有自己的类型，旨在实现不同的功能，
 * 多路复用，即连接共享，每一个request都是用户连接共享机制的，一个request对应一个id，一个连接上有多个request，每个连接的request可以混杂，
 * header压缩：
 * 服务端推送：
 * HTTP2.0中帧有优先级，允许客户端提供排序思路，让服务器优先处理一部分请求，仍然是以二进制帧的形式返回，
 * HTTP2.0只适用于HTTPS的场景
 */