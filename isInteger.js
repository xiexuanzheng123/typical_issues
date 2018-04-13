/**
 * 自己写isInteger函数
 * 
 * 可以直接使用ES6中的Number.isInteger()
 */

 function isInteger(num) {
    return (typeof num === 'number') && (num % 1 === 0);
    //return (x^0 === x);
 }
