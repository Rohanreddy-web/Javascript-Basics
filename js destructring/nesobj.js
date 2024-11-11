let obj = {
    "Name": "rohan",
    "last": {
        "date": "232004",
        "year": "2004",
        "no":["rohan","reddy"]

    },
    
}
let { Name, last: { date:d1, year:d2  ,no }} = obj
console.log(Name);
console.log(d1)
console.log(d2);
console.log(no[1])
let p=[{"main":"rain"}]
let[{main}]=p
console.log(main)
let x=[1,2,3]
let sum=(a,b,c)=>{
return a+b+c
}
console.log(sum(...x));
var v=[4,5,"d",4.5,true]
m=[2,5,6]
let o=[{
    n:"rohan"
}]
console.log(...v,...m,...x,...o);





