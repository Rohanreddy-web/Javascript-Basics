const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("rohan")
        resolve("promice is resolve")
    }, 3000);
})
p1.then((value) => {
    console.log(value)
    return  2
}).then((value) => {
    console.log(value)
    return "p3"
}).then((y)=>{console.log(y)})
// p1.then((x) => console.log("multy handlers")).catch((x)=>console.log("error"))