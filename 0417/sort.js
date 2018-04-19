var arr = [1,4,-8,-3,6,12,9,8];
function compare(val1, val2) {
    return val1 - val2;
}
arr.sort(compare);
console.log(arr);