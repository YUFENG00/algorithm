//创建一个类
function Person(){};
//在原型上定义相关方法
Person.prototype ={
  name: 'xiaoming',
//   name:function(who) {
//       this.who = who;
//     return this;
//   },
  eat:function(food){
      this.food = food;
    return this;
  },
  play:function(ball){
      this.ball = ball;
    return this.name + ' eat' + ' ' + this.food + ' play' + ' ' + this.ball;
  }
}
function xiaoming() {
 var xiaoming = new Person();
 return xiaoming
}
console.log(xiaoming().eat("apple").play("football"));