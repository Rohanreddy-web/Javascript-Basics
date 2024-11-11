// let fetch_data = fetch("https://jsonplaceholder.typicode.com/todos/1")
// fetch_data.then((responce) => { let x= responce.json() 
// return x
//  }
// )
// .then((responce) => {
//     console.log(responce)
//     let div = document.querySelector(".div")
//     let creat=document.createElement("div")
// creat.style.backgroundColor="yellow"
// creat.style.color="red"
// creat.textContent=responce.title.slice(0,12)
// div.append(creat)
// }).catch((err)=>console.log(err))
async function get_data() {
    let data = await fetch("https://cat-fact.herokuapp.com/facts")
    let json = await data.json()
    return json
}
let a = async () => {
    let x = await get_data()
    for (const key in x) {
        if (Object.hasOwnProperty.call(x, key)) {
            const element = x[key];
            console.log(element)
            let div1=document.querySelector(".div")
        let div=document.createElement("div")
        div.classList.add("red")
        div.innerHTML=`  <div class=>${element.text}</div>`
        div1.append(div)
        }
       }
}

a()

