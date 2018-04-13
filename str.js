function subStr(str) {
    var arr = str.split('');
    var strLen = 0;
    for(var i = 1; i < arr.length; i++) {
        if(arr[i] == arr[0]) {
            strLen = i;
            break;
        }
    }
    var strTmp = arr.slice(0,strLen).join('');
    var arrStr = str.split(strTmp);
    for(var i = 0; i < arrStr.length; i++) {
        if(arrStr[i] != '') {
            return false;
        }
    }
    return strTmp;
}
console.log(subStr('abcabcabc'));