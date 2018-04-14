var str = ' 23 32 ';
var str2 = str.replace(/\s*/g, '');
console.log(str2);
console.log(str.replace(/^\s*/, ''));
console.log(str.replace(/(\s*$)/g, ''));

console.log(str.trim());