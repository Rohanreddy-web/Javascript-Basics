// let callback = (Name) => {
//     // alert(Name)
// }
// let creat_fun = (src, callback_fun) => {
//     let new_script = document.createElement("script")
//     new_script.src = src
//     document.body.append(new_script)
//     new_script.onload = callback_fun("rohan calling a function inside a function")
// }
// creat_fun('rohan', callback)

// let creat_fun = (src, callback_fun) => {
//     let new_script = document.createElement("script")
//     new_script.src = src
//     document.body.append(new_script)
//     new_script.onload = rohan(callback_fun(`miami`))
// } 

let obj={
    movies: ()=>`https://api.openweathermap.org/data/2.5/weather?units=metric&q=miani`
}
rohan(obj.movies())
function rohan(ur_1) {
    console.log(ur_1)

}

