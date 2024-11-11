// let n = [11, 1, 2, 3];
// let re = n.map(element =>return element ** 2);
// let c=[20,45,30]
// let v=c.find((value)=>{
//   if(value>30){
//     return true
//   }
// })
// console.log(v);
console.log(re, typeof re);
// const greater = (e) => {
//     return e<5
// }
// console.log(n.filter(greater))
let x = n.filter((value) => {// cllback function  returns boolien value true or false  x value depends on the condiction
  //filter method works
  if(value < 5){
  return true
  }
});
console.log(x);

// let red = (value1,value2) => {
//     return value1+value2
// }
// console.log(n.reduce(red))
let y = n.reduce((v1, v2, b) => {
  return v1 + v2 + b;
});
console.log(y);
let b = [
  { name: "rohan", class: 10, marks: 60 },
  { name: "sai", class: 9, marks: 81 },
  { name: "reddy", class: 8, marks: 90 },
];
// b[1].name="mohan"
let m=b.map((value)=>{
  return value.name
})
console.log(m);

console.log(b)
let g = b.filter((value) => {
//   if(value.marks == 80)
//     return true
return value.marks==81
 })

// console.log(g)
let g1 = b.filter((value) => {
    return value.name.endsWith("i")
})
// console.log(g1)
o={name:"roham"}
// console.log(o.name);
let{name}=o
// console.log(name);
let on=["rohan", "reddy" ,"mn"]
let v=on.filter((value)=>{
  if(value.endsWith("n")){
    return value
  }
  else{
    return false
  }
  
})
console.log(v);


