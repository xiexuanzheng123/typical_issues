(function(){  
    var a = b = 3;
})();
console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
//var a = b = 3相当于
//b = 3; var a = b;所以b成为了外部全局变量