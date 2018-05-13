function multi(num) {
    if(num < 1) {
        // print(0);
        return;
    }
    if(num == 2) {
        // print(1);
        return;
    }
    var num2 = 0;
    var num3 = 0;
    var max = 0;
    if(num%2 == 0) {
        num2 = (num%6)/2;
        num3 = (num-Math.pow(2,num2))/3;
        max = Math.pow(2,num2)*Math.pow(3,num3);
        // print(max);
    }else {
        num2 = ((num-3)%6)/2;
        num3 = (num-Math.pow(2,num2))/3;
        max = Math.pow(2,num2)*Math.pow(3,num3);
        // print(max);
    }
    return max;
}
console.log(multi(10));