const p1 = new Promise((resolve, reject) => {
    let a = Math.random()
    if (a < 0.5) {
        reject("reject your promice")
    }
    else {
        setTimeout(() => {
            console.log("rohan")
            resolve("promice is resolve")
        }, 3000);
    }
})
p1.then((value) => {
    console.log(value+"13")
}).catch((err) => {
    console.log(err)
}).finally(()=>{
  
})

