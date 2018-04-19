function quickSort(arr) {
    if(arr.length <= 1) {
        return arr;
    }
    var num = Math.floor(arr.length / 2);

    var numValue = arr.splice(num, 1);
    var left = [];
    var right = [];

    for(var i = 0; i < arr.length; i++) {
        if(arr[i] < numValue) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(numValue, quickSort(right));
}
console.log(quickSort([32, 45, 37, 16, 2, 87]));