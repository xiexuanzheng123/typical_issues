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
 * 使用带clear的空元素
 * 使用css的overflow属性
 * 使用css的after
 * 使用邻接元素
 * 
 */