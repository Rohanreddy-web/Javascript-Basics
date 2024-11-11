let arr=[1,2,3]
let [a,b,c]=arr
// console.log(a,b,c)
let day=["one","two","three"]
let[x,...rest]=day
console.log(rest)
let obj={
    "firstname":"rohan",
    "lastname":"reddy",
}
let{firstname,lastname}=obj//In JavaScript, when you use destructuring assignment, the variable names on the left-hand side of the assignment must match the property names
// console.log(firstname,lastname)
// let{firstname:fname,lastname:lname}=obj
// console.log(fname,lname)//If you want to assign the values to variables with different names, you can use a colon (:) to specify the variable names:

// let n = 10;
// let u = 20;
// [n, u] = [u, n];
// console.log(`${u} ${n}`) 
let add=(...an)=>{
return an
}
let ar=[1,2,3]
console.log(add(...ar));
let a1=[1,2,3]
let b1=[4,5,6]
console.log(a1.concat(b1));
console.log(...a1,...b1);
function array(x,y){
    console.log(x+y);
}
a=[1,2,3]
array(...a)

