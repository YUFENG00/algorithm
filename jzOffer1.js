// 在一个二维数组中，每一行都按从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
//请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数
function find(target, array) {
    var rowCount = array.length - 1, i, j;
    for(i = rowCount, j = 0; i >= 0 && j < array[i].length;) {
        if(target == array[i][j]) {
            return true;
        } else if(target > array[i][j]) {
            j++;
            continue;
        } else if(target < array[i][j]) {
            i--;
            continue;
        }
    }
}

var a = 10;
var arr = [[1, 2, 4],[2, 4, 7],[3, 6, 10],[4, 8, 13]];
console.log(find(a, arr));