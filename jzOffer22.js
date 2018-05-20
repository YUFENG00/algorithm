// 从上往下打印出二叉树的每个节点，同层节点从左至右打印
/**
 * function TreeNode(x) {
 *  this.val = x;
 *  this.left = null;
 *  this.right = null;
 * }
 */
function PrintFromTopToBottom(root) {
    if(!root) {
        return [];
    }
    var queue = [];
    queue.push(root);
    var result = [];
    while(queue.length) {
        var temp = queue.shift();
        result.push(temp.val);
        if(temp.left) {
            result.push(temp.left);
        }
        if(temp.right) {
            result.push(temp.right);
        }
    }
    return result;
}