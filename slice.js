var arr1 = "john".split('');
var arr2 = arr1.reverse(); //arr2和arr1引用的是同一个对象
var arr3 = "jones".split('');
arr2.push(arr3);
console.log(arr1);
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));