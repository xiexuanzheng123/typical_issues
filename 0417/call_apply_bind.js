// var name = '小王', age = 17;
// var obj = {
//     name: '小张',
//     objAge: this.age,
//     myFun: function() {
//         console.log(this.name + " 年龄 " + this.age);
//     }
// }
// console.log(obj.objAge);
// obj.myFun();

// var fav = "盲僧";
// function shows() {
//     console.log(this.fav);
// }
// shows();

/*使用call apply bind重新定义this */

// var name = '小王', age = 17;
// var obj = {
//     name: '校长',
//     objAge: this.age,
//     myFun: function(fm, t) {
//         console.log(this.name + " 年龄： " + this.age, " 来自 " + fm + " 去往 " + t);
//     }
// };
// var db = {
//     name: "dema",
//     age: 99
// };
// obj.myFun.call(null, '成都', '上海');//如果是null，则this指向全局
// obj.myFun.apply(db, ['成都', '上海']);
// obj.myFun.bind(db, '成都', '上海')();//bind返回的是一个新的函数
// obj.myFun.bind(db, ['成都'], ['上海'])();
// console.log(obj.myFun.bind(db));

// var obj = {
//     name: 'object',
//     sayName: function() {
//         console.log(this.name);
//     }
// }
// obj.sayName();

/*********************************** */

// var test = function() {
//     this.message = 1;
// }
// test();//隐式声明全局变量message
// console.log(message);

/************this在构造函数内***************/

// var name = 'global';
// function Persion() {
//     this.name = 'someone';
// }
// var sam = new Persion();//当声明一个构造函数实例时，构造函数内部的this指向实例，
// console.log(sam.name);

// var sayName = function() {
//     console.log(this.name);
// }

// var peter = {
//     name: 'peter'
// }
// sayName.call(peter);

// function Persion1() {
//     this.name = 'persion1';
//     this.sayName = function() {
//         console.log(this.name);
//     }
// }
// function Persion2() {
//     this.name = 'persion2';
// }
// var sam = new Persion2();

// Persion1.call(sam);//将Persion1的name属性和sayName方法赋给sam

// sam.sayName();//persion1
// console.log(sam instanceof Persion1);//false
// console.log(sam instanceof Persion2);//true
// var message = 'hi';

// function class1() {
//     this.message = 'yeah';
// }
// function class2() {
//     this.message = 'hello';
//     this.sayMessage = function() {
//         console.log(this);
//         console.log(this.message);
//     }
// }
// class2.call(class1);
// console.log(class1.sayMessage);
// class1.sayMessage();//hello
// /**
//  * 执行class2.call（class1）的时候，class1获得了class2中的属性和方法，此时class1.message = 'hello' class1.sayMessage = function() {...}
//  */
// class1.message = 'msg';
// class1.sayMessage();//msg
/** */

// function class1() {
//     this.message = 'yeah';
// }
// function class2() {
//     this.sayMessage = function() {
//         console.log(this.message);
//     }
// }
// class2.call(class1);
// console.log(class1.sayMessage);
// class1.message = 'why';
// class1.sayMessage();//undefined class1中的this.message并不是class1.message，而是class1的实例采用有这个message属性

function Class1() {
    this.showTxt = function () {
        console.log(this.name);
    }
}
function Class2() {
    this.name = 'class2';
}
var class1 = new Class1();
class1.showTxt.call(Class2);
console.log(Class2.showTxt);