class A {}
class B extends A {

}
console.log(B.__proto__ === A);//子类的__proto__,构造函数的继承，指向父类
console.log(B.prototype.__proto__ === A.prototype);//子类的prototype属性的__proto__表示

Object.setPrototypeOf(B.prototype, A.prototype);//B的实例继承A的实例
Object.setPrototypeOf(B, A);//B的实例继承A的静态方法

Object.setPrototypeOf(B.prototype, A.prototype);
B.prototype.__proto__ = A.prototype;
Object.setPrototypeOf(B, A);
B.__proto__ = A;


var p1 = new A();
var p2 = new B();
p2.__proto__.__proto__ === p1.__proto__;

