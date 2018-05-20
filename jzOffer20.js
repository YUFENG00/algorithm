// 定义栈的数据结构，请在该类型中实现一个能够得到栈最小元素的min函数
var stack = [];
function push(node) {
    return stack.push(node);
}
function pop(node) {
    return stack.pop(node);
}
function top() {
    return stack[stack.length-1];
}
function getMin() {
    return Math.min.apply(null, stack);
}
