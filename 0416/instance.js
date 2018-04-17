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
 * 为父类实例添加新特性，作为子类实例返回
 * 特点：
 *  不限制调用方式
 * 缺点：
 * 1 实例是父类的实例，不是子类的实例
 * 2 不支持多继承
 */

function Cat(name) {
    var instance = new Animal();
    instance.name = name || 'Tom';
    return instance;
}

var cat = new Cat();

console.log(cat.name);
console.log(cat.sleep());
console.log(cat instanceof Animal);
console.log(cat instanceof Cat);//false