//   in js we have three types of varibles
//  1.var->it is globelly scoped
//  2.let->it is block scoped and also we can scope globelly
//  3.const->it is block scoped but once we declare it we cant update it just like a constant.

// var a = 10;
// var b = "rohan reddy";
// var c = 12.106;
// console.log(a,b,c)
// console.log(typeof a, typeof b, typeof c);
// var x = 20;
// var y = 40;
// console.log(x + y);
// {
//     var x = 90;
//     console.log(x);
// }
// console.log(x);
// const __VR = 26;
// console.log(__VR);
let ob = {
    name: "rohan reddy",
    "first name": "sai",
    "age": 19,
    "study":"btech"
}
// console.log(ob);
// ob.last_name = "reddy";
// ob["name"] = "raju";
// console.log(ob);
// console.log(typeof ob["age"], ob["age"]);
// console.log(ob["last_name"]);
// let s = 10;

// {
//     s = s + 5;
//     console.log(s);
// }
// console.log(s);

let x = "rohan";
let y = 10;
let u = x + y;
console.log(u)
console.log(typeof u);
const o = {
    "name": "rohan",
    "age": 19
}
console.log(o);
o.name31 = "reddy";
o.age=20
o.d=106

console.log(o["name"]);
console.log(o)
let a = 12
{
    let a = 30
    console.log(a)
}
console.log(a);
var t = undefined
console.log(typeof t)
const j = undefined
console.log(typeof j)
let i=0
while (i<=10) {
    if (i==5) {
        i++
        continue
    }
    console.log(i);
    i++
}
for (let index = 0; index <=10; index++) {
    if (index==5) {
        continue
    }
    console.log(index);
}
let obj={onClick:()=>{
    console.log("rohan reddy!!!");
}}
console.log(obj);
function add (click){
    click()
    click()
}
add(obj.onClick)








