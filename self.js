var myObject = {
    foo: "bar",
    func: function() {        
        var self = this;        
        console.log("outer func:  this.foo = " + this.foo);    //bar    
        console.log("outer func:  self.foo = " + self.foo);     //bar
        (function() {            
            console.log("inner func:  this.foo = " + this.foo);   //undefined    
            console.log("inner func:  this = " + this);     
            console.log("inner func:  self.foo = " + self.foo);     //bar
        }());
    }
};
myObject.func();

/**
 * 在外部self和this都指向myObject
 * 在IIFE中this不指向myObject，this.foo没有在内部函数中被定义
 * self保持在范围内，可以访问
 * 
 * ES5之前IIFE中的this指向Windows
 * ES5之后没有定义
 */