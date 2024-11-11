let a = [1, 2, 3, 4, 5]
let empty = []
for (let i = 0; i < a.length; i++) {
  const element = a[i]
  empty.push(element ** 2)//1,2,3,4,5
}
console.log(empty)
let b = [1, 3, 5, 6]
b.forEach((a, b, c) => {// it returns a value,index,array
    console.log(a,b,c)
})

// let c = [2, 4, 6, 8, 9, 10]//forof loop for itteratate data structurs
// let v=[]
// for (let i of c) {
//     v.push(i)
// }
// console.log(v)
