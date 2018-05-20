// 输入两棵二叉树A,B，判断B是不是A的子结构。（空树不是任意一个树的子结构）
function hasSubTree(pRoot1, pRoot2) {
    if(pRoot1 == null || pRoot2 == null) {
        return false;
    }
    if(isSubTree(pRoot1, pRoot2)) {
        return true;
    }else {
        return hasSubTree(pRoot1.left, pRoot2) || hasSubTree(pRoot1.right, pRoot2);
    }
    function isSubTree(pRoot1, pRoot2) {
        if(pRoot2 == null) {
            return true;
        }
        if(pRoot1 == null) {
            return false;
        }
        if(pRoot1.val === pRoot2.val) {
            return isSubTree(pRoot1.left, pRoot2) && isSubTree(pRoot1.right, pRoot2);
        }else {
            return false;
        }
    }
}