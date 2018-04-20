/**Object构造函数创建方式 */
var Persion1 = new Object();
Persion1.name = 'xoex';
Persion1.age = 123;
console.log(Persion1);

/**对象字面量 */
var Persion2 = {}
var Persion2 = {
    name: 'xxx',
    age: 12
}

/**工厂模式 */
function createPersion(name, age, job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function() {
        console.log(this.name);
    };
    return o;
}
var persion1 = createPersion('Nike', 22, 'teacher');
var persion2 = createPersion('xxx', 33, 'sutdent');

/**使用构造函数创建对象 */
function Persion(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function() {
        console.log(this.name);
    }
}
var persion1 = new Persion();

/**原型创建对象模式 */
function Persion() {}
Persion.prototype.name = 'Nike';
Persion.prototype.age = 22;
Persion.prototype.job = 'teacher';
Persion.prototype.sayName = function() {
    console.log(this.name);
}
var persion1 = new Persion();

/**混合构造模式和原型模式 */
function Persion(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
}
Persion.prototype = {
    constructor: Persion,
    sayName: function() {
        console.log(this.name);
    }
}
var persion1 = new Persion('Nike', 22, 'teacher');