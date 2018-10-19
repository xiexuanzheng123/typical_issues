/**
 * 牛客网打卡学习
 * https://www.nowcoder.com/test/question/done?tid=18428993&qid=4688#summary
 * 
 * html中通过a标签打开一个链接，通过a标签的target属性规定在何处打开
 * _blank: 新窗口打开
 * _self: 相同的框架中
 * _parent 父框架集中打开
 * _top 在整个窗口中打开
 */
var bb = 1;
function aa(bb){//
    bb = 2;
    alert(bb);
}
aa(bb);
alert(bb);
/**
 * 如果不传bb，则外部的bb为2；参数写为其他参数的话，也属于没传的情况
 * 如果传了，参数必须bb，那么内部的bb相当于function的一个属性，结束后销毁不影响外部的bb
 */