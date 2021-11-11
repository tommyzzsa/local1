
 //第一种创建方式
var obj = new Object();
obj.name = 'Emma Watson';
obj.age = 22;
console.log (obj);
//第二种创建方式
var obj = {
    name1:'Emma Watson',
    age :22
}
console.log(obj);
//第三种创建方式
function Person(){
    this.name = 'Emma Watson';
    this.age = 22;
}
let p = new Person();
console.log (p);

let a = {name:"Billy",age:21,gender:'female'};
let b = {name:"Zoey",age:22,gender:'female'};
let c = {name:"Emma Watson",age:22,gender:'female'};
function copy(insertObj){
let newObj = {};
    for(let i in insertObj)
    {
    newObj[i] = insertObj[i];
    }
    return newObj;
}

let obj1 = copy(a);
let obj2 = copy(b);
let obj3 = copy(c);


let arr = [];

arr.push(obj1,obj2,obj3,obj4,obj5,obj6);

console.table(arr);
