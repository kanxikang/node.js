var user = {
    name: '张三',
    age: 18,
    gender: '男'
}
let { name: name1, age, gender } = user
name = '李四'
console.log(user.name);
