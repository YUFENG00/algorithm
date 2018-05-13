/**
 * 一只青蛙一次可以跳上一级台阶，也可以跳两级台阶。求该青蛙跳上n级的台阶总共有多少跳法
 */
function jumpFloor(n) {
    if(n < 0) {
        return 0;
    }
    if(n == 1) {
        return 1;
    }
    if(n == 2) {
        return 2;
    }
    var temp = 0, a = 1, b = 2;
    for(var i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    } 
    return temp;
}
console.log(jumpFloor(10));