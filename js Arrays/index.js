// let a=3
// fact=1
// while (a != 0) {
//     fact = fact * a
//     a--
// }
// console.log(fact)
arr = [1, 2, 3, 4, 5, 6]
let x = arr.reduce((val1, val2) => {
    return val1*val2
})
console.log(x)
let fact=1
for (let i = 0; i<arr.length; i++){
    fact *= arr[i]
}
console.log(fact)
console.log(arr.slice(0, 4));
let f = arr.splice(0,1, 12, 30,20)
console.log(f)
delete arr[4]
  console.log(arr[4])
   var arr1=[1,2,3,44,5]
console.log(arr1.slice(-4,-2));
