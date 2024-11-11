let arr = [1, 2, 1.23, true, "rohan"]//in javascript array is a collection of different datatypes
// arr[2]=106
console.log(arr, typeof arr)
let a = [1, 2, 3, 4, 5, 6]
console.log(a[2])// print by indux
console.log(a);
a[0] = 16//arrays are mutible in js
console.log(a)
console.log(a.toString())//convert a array to a   String of comma seperated value
let b = [2, 3, 4, 5, 6, 7, 8, 9]
console.log(b.join("->"))//joins all the elements with a symbole and returns a String
console.log(b.pop())//removes last element
console.log(b)
let c = [3, 4, 5, 6]
console.log(c.push("rohan reddy"))//add the new element at end and returns the length of new array
console.log(c)
console.log(c.shift())//removes the first element and return it 
console.log(c);
console.log(c.unshift(120))//adds it to first of array and returns the new length
console.log(c);
let d = [3, 4, 5, 6, 8, 9]
console.log(delete d[2])//it is a operation which delets the value but not the memory allocation
console.log(d)
let e = [4,3,2,1]
console.log(e.sort())
console.log(e.slice(0, 3))// slice form 0 to n-1(3-1=2) index
let w = [1, 2, 3]
let r = [4, 5, 6]
console.log(w.concat(r))//concate an array
let q = [3, 4, 5, 6, 7]
console.log(q.splice(0, 4, 12,13),"bzdmv")//delet the elements and add the new element in the place of del elements
console.log(q.reverse())//reverses the array
let rm=[1,2,3,4] 

console.log(rm.reverse());
console.log(rm);





