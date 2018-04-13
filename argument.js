function sum(x) {
    console.log(arguments);
    if(arguments.length === 2) {
        return arguments[0] + arguments[1];
    } else {
        return function(y) {
            return x + y;
        }
    }
}
console.log(sum(2, 3));
console.log(sum(2)(3));

/**
 * 注意使用 argument
 */

