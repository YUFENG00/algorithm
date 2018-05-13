function coin(str) {
    var data = str.split('');
    var count = 0;
    if(str='') {return}
    if(data[0] != data[1]) {count++};
    for(var i = 1; i < data.length-1; i++) {
        if(data[i] != data[i-1] || data[i] != data[i+1]) {
            count++;
        }
    }
    if(data[data.length-1] != data[data.length-2]) {count++};
    return count;
}

var a = 'THTHTTH';
console.log(coin(a))