// 输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否为该栈的弹出顺序。假设压入栈的所有数字均不相等。
// 例如序列1 2 3 4 5是某栈的压入顺序，顺序4 5 3 2 1是该压栈序列对应的一个弹出序列，但 4 3 5 1 2就不可能是该栈的弹出序列
// 先将序列1,2,3,4,5依次压入栈s，每次压栈时都判断栈s的当前栈顶元素跟序列4,5,3,2,1的第一个元素是否相等
function isPopOrder(pushV, popV) {
    if(!pushV.length || !popV.length) {
        return false;
    }
    var temp = [];
    var popIndex = 0;
    var len = pushV.length;
    for(var i = 0; i < len; i++) {
        temp.push(pushV[i]);
        while(temp.length && temp[temp.length - 1] === pop[popIndex]) {
            temp.pop();
            popIndex++;
        }
    }
    return temp.length === 0;
}