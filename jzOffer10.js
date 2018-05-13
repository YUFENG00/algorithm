/**
 * 用2*1的小矩形横着或者竖着去覆盖更大的矩形。用n个2*1的小矩形无重叠的覆盖一个2*n的大矩形，有对少种方法？
 */
function rectCover(n) {
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
    for(var i = 3; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return temp;
}
console.log(rectCover(10));