function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}

var flag = isPalindrome('level');
console.log(flag);