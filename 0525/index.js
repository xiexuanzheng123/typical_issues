/**
 * for循环中，let声明的变量只在for循环体内有效，循环体外报错
 * for循环中，设置循环变量的那部分是父作用域，而循环体内是单独子作用域
 * 不存在变量提升
 * 只要在块中存在let，它所声明的变量就绑定到这个区域
 * 暂时性死区的存在，导致了typeof操作不再是一个安全的操作符
 * const声明之后必须立即赋值
 * 对象冻结 Object.freeze()
 * var let const function class import
 * 
 * 
 * 结构后面的表达式要么转化为对象时具有Iterator接口，要么本身具有Iterator接口
 * new Set()
 * function *fibs() {
 *  let a = 0;
 *  let b = 1;
 *  while(true) {
 *   yield a;
 *   [a, b] = [b, a + b];
 *  }
 * }
 * 具有Iterator接口
 * 结构赋值默认值的判断原则是===
 * 惰性表达式
 * 交换变量的值
 * 从函数返回多个值
 * 
 * includes endsWith startsWith
 * repeat
 * padStart() padEnd()
 * 
 * Number.isFinite()只有数字才返回true，其他返回false
 * Number.isNaN() 只有NaN以及和NaN运算的结果返回true
 * 
 * Number.parseInt()
 * Number.parseFloat()
 * Number.isInteger()
 * Math.trunc()
 * Math.sign() +1 -1 +0 -0 NaN
 * Math.cbrt()
 * Math.hypot()
 * 
 * 函数参数是默认声明的，在函数体中不可以使用let和const再次声明
 * 设置函数参数的默认值，将会改变函数的length属性，传入默认值的参数后面的参数都不计算在内了
 * 
 * getOwnPropertyDesciptor: 获取对象某个属性的描述，enumerable为false的话会被四个操作忽略
 
 * 1 for...in,忽略不可枚举属性，遍历自身的和 继承 的可枚举属性
 * 2 Object.keys() 返回自身的可枚举属性的键
 * 3 JSON.stringfy() 自身的可枚举的属性
 * 4 Object.assign() 忽略enumerable为false的属性
 * 尽量避免for。。。in操作，而使用Object.keys()来遍历键值
 * 
 * 遍历对象属性的五种方法
 * 1 for in
 * 2 Object.keys
 * 3 Object.getOwnPropertyNames()
 * 4 Object.getOwnPropertySymbols()
 * 5 Reflect.ownKeys(), 包含对象自身的所有键名，Symbol，字符串，也不管是否可枚举
 * 顺序：
 * 1 首先遍历所有数值键，按照升值排序
 * 2 遍历字符串，按照加入时间升值排序
 * 3 最后遍历所有Symbol，按照加入时间
 * 
 * 
 * __proto__属性
 * 用来读取或设置当前对象的prototype对象， 
 * 
 * Object.create方法的第二个参数添加的对象属性，如果不显式声明，默认的enumerable是false， Object.value遍历不到
 * 
 * super指向当前对象的原型对象
 * 
 */