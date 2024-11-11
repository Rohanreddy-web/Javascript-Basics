
//  const p1=new Promise((resolve, reject) => {
// setTimeout(() => {
//     resolve(20)
// }, 3500);
// })
// console.log("name1....")
// p1.then((value)=>{
//     console.log(value);
// console.log("name2....")
// console.log("name3....")

// })
//asyanc and awate
console.log("running1......")
async function data_fetch() {
    let prom1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("running2.....")
        }, 3000);
    })
 return prom1
}
let call_fun = async()=>{
    let x=  await data_fetch()
    console.log(x)
    console.log("running3......")
    console.log("running4......")
}
call_fun()

