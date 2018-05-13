function jumpFloor(number)
{
    // write code here
    if(number < 2) {return number}
    var f1 = 1;
    var f2 = 2;
    var t = 0;
    for(var i = 2; i < number; i++) {
        t = f1 + f2;
        f1 = f2;
        f2 = t;
    }
    return t;
}
console.log(jumpFloor(10));