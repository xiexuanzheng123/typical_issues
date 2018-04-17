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
 * 原型链继承：将父类的实例作为子类的原型
 * 特点：
 * 1 非常纯粹的继承关系，实例是子类的实例也是父类的实例
 * 2 父类新增原型方法/原型属性，子类都能访问
 * 3 简单易于实现
 * 
 * 缺点：
 * 1 要想为子类新增属性和方法，需要new之后，不能发在构造器中
 * 2 无法实现多继承
 * 3 来自原型对象的引用属性是所有实例共享的
 * 4 创建子类实例时，无法向父类构造函数传参
 */

function Cat() {

}
Cat.prototype = new Animal();
Cat.prototype.name = 'cat';//这里不是太懂啊

var cat = new Cat();
console.log(cat);
console.log(cat.name);
console.log(cat.eat('fish'));
console.log(cat.sleep());
console.log(cat instanceof Animal);
console.log(cat instanceof Cat);