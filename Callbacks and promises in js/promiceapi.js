const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promice is resolve1")
        // reject(3)
    }, 3000);

})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promice is resolve2")
        // reject("reeject")

    }, 2000);

})
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("promice is r")
        // resolve(3)

    }, 1000);
})
// let Promise_all=Promise.all([p1,p2,p3])
let Promise_all=Promise.allSettled([p1,p2,p3])
// let Promise_all = Promise.race([p1, p2, p3])
// let Promise_all=Promise.any([p1,p2,p3])
// let Promise_all=Promise.resolve(10)
// let Promise_all=Promise.reject(10)
Promise_all.then((value) => {
    console.log(value)
}).catch((value) => { console.log(value) })
console.log(Promise_all)