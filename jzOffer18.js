// 操作给定的二叉树，将其变换为原二叉树的镜像
function mirror(root) {
    if(!root) {
        return null;
    }
    var temp = root.left;
    root.left = root.right;
    root.right = temp;
    if(root.left) {
        mirror(root.left);
    }
    if(root.right) {
        mirror(root.right);
    }
} 