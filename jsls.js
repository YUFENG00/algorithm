
var a = [2,3,4,5,6,7,654,8,9,5,54,3,2,12,78,3,54,55,43,2,1,4,45]
function findNum(a) {
  //我把a当做数组了，里面有一百个数
  if(a.length < 10) {
    return false;
  }
  var b = [];
  while(b.length <= 10) {
    i = Math.ceil(Math.random()*a.length-1);
    if(b.indexOf(a[i]) == -1) {
      b.push(a[i]);
      a.splice(i,1);
    }
    if(a.length == 0) {
      return false;
    }
  }
  return b;
}
console.log(findNum(a));