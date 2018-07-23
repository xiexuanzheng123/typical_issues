/**
 * http://web.jobbole.com/88041/ 整理总结的一些前端面试题
 * 
 * 一 XHTML HTML的区别
 * 1 XHTML元素必须被关闭
 * 2 XHTML元素必须被正确嵌套
 * 3 标签名必须小写
 * 4 XHTML文档必须拥有根元素
 * 
 * 二 HTML5为什么只需要写 <!DOCTYPE html>
 * HTML5不基于SGML，因此不需要对DTD进行引用，但是需要doctype来规范浏览器的行为
 * 
 * 三 Doctype作用？ 标准模式与兼容模式有什么区别
 * 告知浏览器的解析器用什么文档标准来解析这个文档，DOCTYPE不存在或格式不对会导致文档以兼容模式呈现
 * 标准模式的排版和js运作模式都是以该浏览器支持的最高标准来执行，兼容模式中页面以宽松的向后兼容的方式显示
 * 
 * 四 HTML5新特性，移除了哪些标签，兼容问题，如何区分
 * 新增了图像，存储，多任务等，
 * 绘画canvas
 * video
 * Audio
 * 离线存储localStorage长期存储数据，浏览器关闭后数据不消失，sessionStorage浏览器关闭后数据消失
 * article footer header nav section
 * calendar date time email
 * 新的技术webworker websocket 
 * 移除了可以使用css来实现的标签basefont big center font 
 * 负面元素frame frameset
 *                                                          
 * 五 cookie、sessionStorage、localStorage的区别
 * cookie在浏览器和服务器之间传递，storage只是存在浏览器中
 * storage存储更大
 * storage有更丰富的接口
 * storage有各自独立的存储空间
 * 
 * 六 css隐藏元素的方法
 * display：none 相当于不存在
 * opacity：0 元素占据原来位置
 * visibility：false
 * 
 * 七 清除浮动
 * 使用带clear的空元素,增加一个空的div，利用css清除浮动，让父级自动获取高度
 * 使用css的overflow属性, 必须定义width，同时不能定义height，不能和position同时使用
 * 使用css的after, 其实质跟空元素差不多
 * 使用邻接元素
 * 
 * 八 CSS居中
 * 1 水平据中设置：
 *   1-1 行内设置 在父元素中设置text-align: center
 *   1-2 Flex布局：display: flex; justify-content: center
 * 
 * 2 垂直居中设置：
 *   2-1 父元素高度确定的单行文本（内联元素）
 *      设置heigh=line-height
 *   2-2 父元素确定的多行文本（内联元素）
 *      2-2-1 插入table，然后设置vertical-align: middle
 *      2-2-2 先设置display: table-cell, 再设置verticle-align: middle
 * 
 * 3 水平居中
 *   3-1 定宽，此时text-align: center无用，水平居中：margin：auto;
 *       定宽+position：absolute的情况水平居中，margin：0 auto left:0 right:0
 *   3-2 不定宽，
 *      3-2-1 在元素外加table标签，该元素写在td内，然后设置table的margin为auto
 *      3-2-2 给该元素设置display: inline方法，
 *      3-2-3 在父元素设置position:relative和left：50%，子元素设置position：relative和left：50%
 * 
 * 4 垂直居中     
 *   4-1 使用position：absolute，设置left、top、margin-left、margin-top的属性
 *   left: 50%
 *   top: 50%
 *   margin: -(height/2) 0 0 -(width/2)
 * 
 * 九 CSS3有哪些新特性？
 *  css3实现圆角border-radius
 *  阴影，box-shadow：10px
 *  
 * 十 数组操作
 *  push（）、pop（）尾部操作插入去除
 *  unshift（）、shift（）头部操作插入去除
 * 
 * 十一 ajax请求时get和post的区别
 *  1 get请求时，参数在url中显示，post不会显示出了
 *  2 get请求发送数据量小，post请求发送数据量大
 *  3 get请求需注意缓存的问题，post不需要担心
 *  get方式可传送简单数据，但大小一般限制到1kb内，数据追加到url中发送（http的header传送），另外一点是浏览器会自动缓存，所以说存在安全问题
 *  post方式浏览器把数据作为http消息的实体内容发送，而不是作为URl地址的参数传送，传送数据量大
 * 
 * 十二 call和apply的区别
 *  参数不同： Object.call(this, obj1, obj2, obj3), Object.apply(this, arguments)
 * 
 * 十三 添加删除替换插入节点
 *  obj.appendChild()
 *  obj.insertBefore()
 *  obj.replaceChild()
 *  obj.removeChild()
 * 
 * 十四 javascript同源策略
 *  一段脚本只能读取来自于同一来源的窗口和文档的属性，同源是指主机名、协议、端口号
 * 
 * 十五 编写一个b继承a的方法 
 *  使用prototype方法来实现
 * 
 * 十六 阻止事件冒泡和默认事件
 * function stopBubble(e) {
 *  if(e && e.stopPropagation) {
 *      e.stopPropagation();
 *  } else {
 *      window.event.cancelBubble = true
 *  }
 * }
 * 
 * 十七 性能优化的方法
 *  1 减少http请求次数，CSS切图，js、css压缩打包
 *  2 减少DOM操作次数
 *  3 减少DNS查找次数
 *  4 javascript代码放在文件最后面
 *  5 CSS中不使用表达式
 *  6 使用浏览器缓存
 * 
 * 十八 http状态码内容及意义
 *  1 100-199 客户端相应的某些动作
 *  2 200-299 请求成功
 *  3 300-399 304 not modified
 *  4 400-499 客户端错误
 *    400：语义有误，当前请求无法被服务器理解
 *    401: 当前请求需要用户验证
 *    403：服务器理解请求，但是拒绝执行
 *    404：not found
 *  5 500-599 服务器错误
 * 
 * 十九 一个页面从输入URL到页面加载显示完成，这个过程都发生了什么？
 *  1 DNS域名查找，查找域名对应的IP地址
 *  2 进行HTTP协议会话
 *  3 客户端发送报头
 *  4 文档开始下载
 *  5 文档树建立
 *  6 文件显示
 *  7 渲染
 * 
 */


let promise = new Promise( (resolve, reject) => {
    if(success) {
        resolve(value); // pending -> resolved
    } else {
        reject(error); // pending -> rejected
    }
})