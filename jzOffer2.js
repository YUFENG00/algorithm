// 实现一个函数，将一个字符串中的空格替换成“%20”。
function replaceSplace(str) {
    return str.replace(/ /g, "%20")
}
console.log(replaceSplace("I like the javaScript!"));