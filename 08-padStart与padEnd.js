// padStart('长度','补充的值') 在前面补充
var a = new Date().getMonth()
console.log(a.toString().padStart('2', '0')); // 字符串类型才能调用padStart与padEnd

// padEnd('长度','补充的值')  在前面补充
console.log(a.toString().padEnd('2', '0')); // 字符串类型才能调用padStart与padEnd