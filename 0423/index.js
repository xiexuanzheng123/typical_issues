/**http://web.jobbole.com/94152/?utm_source=blog.jobbole.com&utm_medium=relatedPosts
 * 50道css试题
 * 
 * 一 display 有哪些
 *  1 inline
 *  2 block
 *  3 inline-block
 *  4 table
 *  5 table-cell
 *  6 none
 *  7 list-item
 * 
 * 二 position的值
 *  1 static 默认的没有定位，LTRB无效
 *  2 relative：不脱离文档流，相对于自身默认位置的定位，LTRB有效
 *  3 absolute：漂出文档流，参考最近一个不是static的父级元素定位，LTRB有效
 *  4 fixed：所固定的参照对象是可是窗口
 * 
 * 三 css3新特性有哪些？
 *  1 RGBA和透明度
 *  2 background-image background-origin
 *  3 text-shadow
 *  4 border-radius
 *  5 box-shadow
 *  6 媒体查询
 * 
 * 四 常见的兼容性问题
 *  1 不同浏览器的默认margin padding不同 
 *  2 IE6
 * 
 * 五 visibility：collapse 
 *  相当于chrome中visibility：hidden，在文档中分配空间
 *  firefox中相当于display：none，在文档中不分配空间
 * 
 * 六 position跟display/overflow/float相互叠加什么后果
 *  display属性规定元素应该生产什么框的类型，
 *  position属性规定元素的定位类型，
 *  float属性是一种布局方式，定义元素在哪个方向浮动
 *  类似于优先机制，position：absolute/fixed优先级最高，有他们在时，float不起作用，display值需要调整。
 *  float或者absolute定位的元素，只能是块元素或表格
 * 
 * 七 为什么出现浮动，什么时候清除浮动，清除浮动的方式
 *  浮动元素碰到包含它的边框或者浮动元素的边框停留，浮动元素不在文档流中，所以文档流的块框变现得就像浮动框不存在一样
 *  浮动元素会漂浮在文档流的块框上
 *  浮动带来的问题：
 *     1 父元素的高度无法撑开(为零)，影响与父元素同级的元素（不换行了）
 *     2 与浮动元素同级的非浮动元素（内联元素）会跟随其后
 *     3 若非第一个元素浮动，则该元素之前的元素也需要浮动，否则会影响页面结构(float元素到第一位了)
 *  清除浮动的方法：
 *     1 父级div定义高度
 *     2 最后一个元素后加空标签，并添加样式clear：both
 *     3 包含浮动元素的父标签添加样式overflow：hidden
 */