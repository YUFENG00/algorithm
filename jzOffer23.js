// 输入一个整数数组，判断该数组是不是某二叉树的后序遍历的结果。如果是则输出Yes，否者输出No。假设输入的数组的任意两个数字都互不相同
/**
 * function TreeNode(x) {
 *  this.val = x;
 *  this.left = null;
 *  this.right = null;
 * }
 */
function VerifySequenceOfBST(sequence) {
    var len = sequence.length;
    if(!len) {
        return false;
    }
    return adjustSequence(0, len - 1);

    function adjustSequence(start, end) {
        if(start >= end) {
            return true;
        }
        var root = sequence[end];
        for(var i = start; i < end && sequence[i] < root; i++);
        var index = i;
        for(var i = i + 1; i < end; i++) {
            if(sequence[i] < root) {
                return false;
            }
        }
        return adjustSequence(start, index - 1) && adjustSequence(index, end -1);
    }
}