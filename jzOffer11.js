/**
 * 输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示
 */
function numOf1(n) {
    if(n < 0) {
        n = n << 0;
    }
    var arr = n.toString(2).split("");
    console.log(arr);
    return arr.reduce(function(a, b) {
        return b === "1"?a + 1 : a;
    }, 0)
}
console.log(numOf1(5));