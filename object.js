var a={},
    b={key:'b'},    
    c={key:'c'};

a[b]=123;
console.log(a);//{{[object Object]: 123}
a[c]=456;
console.log(a);//{{[object Object]: 456}

console.log(a[b]);

/**
 * 当设置对象属性时，javascript会自动将key字符串化，a和b字符串化都是“[object Object]”
 */