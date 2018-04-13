function gcd(a,b) {
    if(b==0) {
        return a;
    }else {
        return gcd(b, a%b);
    }
}
function div(num){
    a = 1;
    for(var i = 1; i < num + 1; i++) {
        now = i / gcd(a,i);
        a = a*now;
    }
    return a;
}

console.log(div(10));