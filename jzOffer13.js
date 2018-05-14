/**
 * 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，
 * 所有的偶数位于数组的后半部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变
 */
function reOrder(array) {
    if(array.length === 0) {
        return array;
    }
    var odd = [];
    var even = [];
    array.forEach(element => {
        if(element%2 === 0) {
            even.push(element);
        }else {
            odd.push(element);
        }
    });
    return odd.concat(even);
}
var a = [1,2,4,5,6,7,8,2,4,5]
console.log(reOrder(a));