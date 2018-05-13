/**
 * 一只青蛙一次可以跳上1级台阶，也可以跳两级，...，也可以跳n级。求该青蛙跳上一个n级的台阶总共有多少种跳法？
 */

 function jumpFloor(n) {
     return Math.pow(2, n-1);
 }
 console.log(jumpFloor(10));