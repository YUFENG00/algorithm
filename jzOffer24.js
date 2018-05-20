// 输入一棵二叉树和一个整数，打印出二叉树中节点值的和 为输入整数的 所有路径
/**
 * function TreeNode(x) {
 *  this.val = x;
 *  this.right = null;
 *  this.left = null;
 * }
 */

function FindPath(root, num) {
    var temp = [];
    var result = [];
    dfs(root, 0);
    return result;

    function dfs(root, sum) {
        if(!root) {
            return;
        }
        temp.push(root.val);
        sum += root.val;
        if(!root.left && !root.right && sum === num) {
            result.push(temp.concat());
        }
        if(root.left) {
            dfs(root.left, sum);
        }
        if(root.right) {
            dfs(root.right, sum);
        }
        temp.pop();
        return;
    }
}