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
 *   3-1 定宽，此时text-align: center无用，水平居中：margin：auto
 *   3-2 不定宽，
 *      3-2-1 在元素外加table标签，该元素写在td内，然后设置table的margin为auto
 *      3-2-2 给该元素设置display: inline方法，
 *      3-2-3 在父元素设置position:relative和left：50%，子元素设置position：relative和left：50%
 * 
 * 4 垂直居中     
 *   4-1 使用position：absolute，设置left、top、margin-left、margin-top的属性
 */