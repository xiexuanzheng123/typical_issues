function Animal(name) {
    this.name = name || 'Animal';
    this.sleep = function() {
        console.log(this.name + '正在睡觉');
    }
}
Animal.prototype.eat = function(food) {
    console.log(this.name + ' 正在吃：' + food);
}


/**
 * 使用父类的构造函数来增强子类实例，等于是赋值父类的实例属性给子类（没有用到原型）、
 * 特点：
 * 1 解决了1中，子类实例共享父类引用属性的问题
 * 2 创建子类实例时，可以向父类传递参数
 * 3 可以实现多继承
 * 
 * 缺点：
 * 1 实例不是父类的实例，只是子类的实例
 * 2 只能继承父类的实例属性和方法，不能继承原型属性和方法
 * 3 无法实现函数复用，每个子类都有父类实例函数的副本
 * 
 */

function Cat(name) {
    Animal.call(this);
    this.name = name || 'Tom';
}

var cat = new Cat();
console.log(cat.name);//Tom
console.log(cat.sleep());//Tom正在睡觉
console.log(cat instanceof Animal);//false
console.log(cat instanceof Cat);//true