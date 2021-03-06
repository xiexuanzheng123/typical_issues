/**
 * https://blog.csdn.net/kebi007/article/details/54882425 2017年前端面试题整理汇总100题 
 * 
 * 一 position各相对于什么定位
 *  1 absolute相对于定位不是static的父级元素
 *  2 relative相对于自身在普通文档流中的位置定位
 *  3 fixed相对于浏览器窗口
 *  4 static默认值，正常文档流
 *  5 sticky粘性定位
 * 
 * 二 解决跨域问题
 *  JSONP：动态插入script标签，通过script标签引入一个js文件，这个js文件载入成功后会执行我们在url参数中指定的函数，并且会把我们需要的json数据作为参数传入
 *  由于同源策略的限制，XmlHttpRequest只允许请求当前源（协议，域名，端口）的资源，为了实现跨域请求，可以通过script标签实现跨域请求，然后再服务器端输出
 *  JSON数据并执行回掉函数，从而解决了跨域的数据请求
 *  缺点是只支持GET
 *  
 * CORS：服务器端对于CORS的支持，主要就是通过设置Access-Control-Allow-Origin,
 *  
 * 三 TCP三次握手
 *  为了准备无误的将数据传送到目标处，TCP采用三次握手，TCP标志，SYN和ACK
 *  发送端首先发送一个带SYN标志的数据包给对方，接收端收到后，回传一个带有SYN/ACK标志的数据包以示确认信息，
 *  最后，发送端再回传一个带ACK标志的数据包，代表‘握手结束’
 *  
 *  TCP UDP的区别：
 *   TCP：是基于连接的，在正式收发数据之前，必须和对方建立一个可靠的链接，一个TCP连接必须要经过三次对话
 *   UDP：它是面向非连接的协议，不与对方建立连接，直接发送数据包，适用于一次只传输少量数据对可靠性要求不高的环境
 * 
 * 四 渐进增强和优雅降级
 *  渐进增强：针对低版本浏览器进行构建页面，保证最基本的功能，然后针对高版本的浏览器进行效果/交互等改进和追加功能达到 更好的体验效果
 *  优雅降级：开始的时候构建完整的功能，然后去兼容低版本的浏览器
 *  
 * 五 常见web安全及防护管理
 *  sql注入：通过SQL命令插入到web表单递交或输入域名或页面请求的查询字符串，最终达到欺骗服务器执行恶意的SQL命令
 *   1 永远不要相信用户输入，对用户输入进行检查
 *   2 不要使用动态拼接SQL，
 *   3 数据库权限问题
 *   4 重要的文件加密
 * 
 *  XSS原理及防范
 *   XSS: 攻击者往web页面里插入恶意html标签或者javascript代码，
 *   防范：对用户输入的地方和变量都需要仔细检查特殊符号，避免cookie中暴露特殊信息，尽量采用POST
 *  
 * 六 WebSocket
 *  web应用程序的传输协议，提供了双向的按序到达的数据流。是一个HTML5协议，WebSocket的连接是持久的，通过在客户端和服务器之间保持双工连接，服务器的更新可以被及时
 *  推送到客户端，不需要客户端以一定的时间间隔去查询
 * 
 * 七 HTTP和HTTPS
 *  HTTP协议通常承载于TCP协议上，在HTTP和TCP之间添加一个安全协议层就成了HTTPS,默认的HTTP端口是80，HTTPS是443
 *  
 * 八 模块化
 *  AMD：RequireJS，提前执行
 *  CMD：SeaJS，延迟执行
 * 
 * 九 垃圾回收
 *  标记清除（mark and sweep）：最常见的垃圾回收方式，垃圾回收器标记变量进入环境还是离开环境，垃圾回收器会在运行的时候给存储在
 * 
 * 十 社么是Etag
 *  当发送一个服务器请求时，浏览器首先会进行缓存过期判断，浏览器根据缓存过期时间判断缓存文件是否过期
 *  1 若没有过期，则不向服务器发送请求，直接使用缓存中的结果，此时我们会看到200 ok，此时就是完全使用缓存，浏览器和服务器没有交互
 *  2 若已经过期，则向服务器发送请求，此时请求中会带上一步中设置的文件修改时间和Etag
 *   2-1 资源更新判断，服务器根据传过来的文件修改时间，判断自浏览器上一次请求之后文件是不是没有被修改过，如果没有被修改则使用缓存中的文件此时状态码304Not Modified
 *   2-2 若修改时间和文件内容判断有一个没有通过，则服务器重新返回文件
 * 
 * 十一 栈和队列的区别？
 *  栈的插入和删除操作都是在一端进行的，队的操作是两端
 *  队列先进先出，栈先进后出
 *  栈只允许在表尾进行插入和删除，队列在尾部插入，头部删除
 * 
 * 十二 堆和栈的区别
 *  1 栈：由编译器分配释放，存放函数的参数值，局部变量的值
 *  2 堆：由程序员分配释放，若程序员不释放，程序结束时可能有OS释放
 * 
 * 十三 splice
 *  splice(index, num, item)方法是向数组中添加项目，或是从数组中删除项目，并返回被删除的项目，结果是数组
 *  slice(start, end)返回新的数组
 * 
 * 十四 ES6新加功能
 *  模板字符串， 箭头函数， for-of， arguments对象可被不定参数和默认参数完美替代， promise， let和const， 块级作用域
 * 
 * 十五 继承
 *  原型链继承：将父类的实例作为子类的原型
 *  call继承：Animal.call(this)
 *  instance继承：return instance
 * 
 * 十六 HTTP2.0
 *  引入了‘服务端推（server push）’，允许服务端在客户端需要数据之前就主动将数据发送到客户端进行缓存，从而提高性能
 *  提供更多的加密支持
 *  多路技术，允许多个消息在一个连接上同时交差
 *  增加了头压缩
 * 
 * 十七 defer和async
 *  defer并行加载js文件，会按照页面script标签顺序执行
 *  async并行加载js文件，下载完成立即执行，不会按照页面上script标签的顺序执行
 * 
 * 十八 Cookie
 *  1 每个域名下最多生成20个cookie
 *  2 每个cookie的大小有限制（4kb）
 *  3 安全性存在问题
 *  4 cookie与session的区别：
 *   4-1 cookie存在客户端浏览器上，session存在服务器上
 *   4-2 cookie不是很安全，session比较安全
 *   4-3 session会占用服务器性能
 *   4-4 session存储数据大些
 *  
 * 十九 浏览器兼容问题
 *  1 浏览器默认的margin和padding不同，
 *  2 IE在请求URL时，不加时间戳不会重新请求
 *  3 IE6双边距bug
 * 
 * 二十 上下margin重合问题
 *  垂直两个元素避免设置margin-top和margin-bottom
 *  父元素子元素，子元素设置margin-top无效，解决方法：
 *      1 为父元素设置border 
 *      2 为父元素添加overflow：hidden 
 *      3 为父元素设置padding
 *      4 父元素设置position：fixed， relative不可以
 *      5 父元素设置display: table
 *      6 子元素前面添加兄弟元素content："", overflow: hidden
 *      7 给父元素加一个值
 * 
 * 二十一 float问题
 *  浮动元素脱离文档流，不占据空间，浮动元素碰到包含它的边框或者浮动元素边框停止
 *  1 使用空标签清除浮动，clear: both
 *  2 使用overflow： 给包含浮动元素的父标签添加css属性：overflow：hidden
 *  浮动元素引起的问题：
 *  1 父元素无法被撑开，影响父元素同级元素
 *  2 与浮动元素同级的非浮动元素紧跟
 *  
 * 二十二 HTML5新增加的特性
 *  header nav footer aside article section
 *  audio video
 *  canvas
 *  geolocation
 *  localStorage
 *  calendar date time email 
 *  webWorker websocket 
 * 
 * 二十三 new操作具体做了什么
 *  1 创建一个新对象
 *  2 将构造函数的作用域付给新对象（this指向了这个新对象）
 *  3 执行构造函数中的代码，对这个对象添加属性和方法
 *  4 返回新对象
 *  var obj = new Base();
 * 
 *  1 var obj = {};
 *  2 obj.__proto__ = Base.prototype;
 *  3 Base.call(obj);
 * 
 * 二十四 call和apply
 *  动态改变某个函数的运行上下文
 *  参数不一样call的参数是单个分开的，apply的是数组bind也是分开的
 * 
 * 二十五 哪些操作会造成内存泄漏
 *  内存泄漏是指任何对象在不需要的时候还存在
 *  
 * 二十六 从输入url到页面加载显示成功，中间发生了什么？
 *  分为四个步骤：
 *   1 DNS域名分析，找到远程IP
 *   2 浏览器与远程服务器的TCP三次握手建立连接，
 *   3 建立连接之后，浏览器通过HTTP的GET请求，获取远程服务器上的文档
 *   4 浏览器渲染页面
 *   5 解析html生产dom树，
 * 
 * 二十七 javascript对象的几种创建方式
 *  工厂模式
 *  构造函数
 *  原型模式
 *  混合构造函数和原型模式
 *  动态原型模式
 *  寄生构造函数模式
 *  稳妥构造函数模式
 * 
 * 二十八 http状态码
 *    100：Continue 继续，一般在发送post请求时，已发送了http header之后服务端将返回此信息，表示确认，之后发送具体参数
 *  √ 200：OK，正常返回信息
 *    201：Created 请求成功并且服务器创建了新的资源
 *    202：Accepted 服务器已接受请求，但尚未处理
 *    301：Moved Permanently 请求的网页已永久移到新的位置
 *  √ 302：Found 临时性重定向
 *    303：See Other 临时性重定向，且总是使用GET请求新的URI
 *  √ 304：Not Modified，自从上次请求之后没有发生过变化
 *  √ 400：Bad Request 服务器无法理解请求的格式，客户端不应当尝试再次使用同样的请求
 *  √ 401：Unauthorized 请求未授权
 *  √ 403：Forbidden 禁止访问
 *  √ 404：Not Found 找不到匹配资源
 *  √ 500：Internal Server Error 服务器端错误
 *  √ 503：Server Unavailable 服务器端暂时无法处理i请求
 * 
 * 二十九 promise
 *  四种状态：
 *   1 pending初始状态
 *   2 fulfilled 成功的操作
 *   3 rejected 失败的操作
 *   4 settled 已被fullfilled或者rejected
 *  构造异步函数
 *   var promise = new Promise(function(resolve, reject){
 *      if(successed){
 *          resolve()
 *      } else {
 *          rejected()
 *      }       
 *   })
 * 
 * 三十 删除cookie
 *  通过设置时间来删除
 *  
 * 三十一 AMD和CMD的理解
 *  CommonJS是服务器端模块的规范，Node采用了这个规范，Commonjs规范是同步的，也就是说只有加载完成，才能执行后面的操作
 *  AMD规范是非同步加载模块，允许回调，Requirejs
 * 
 * 三十二 网络七层模型
 *  物理层
 *  数据链路层
 *  网络层
 *  传输层
 *  会话层
 *  表示层
 *  应用层
 */