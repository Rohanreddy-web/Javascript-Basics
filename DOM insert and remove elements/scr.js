// let a = document.createElement("div");
// a.setAttribute("style", "padding:100px");
// a.textContent = "hello world";
// a.innerHTML="<div>hello</div>"
document.getElementsByClassName("cont")[0].prepend(a);
let s = a.getAttribute("style")
 console.log(s)
let x = document.querySelector(".cont")
x.insertAdjacentHTML("beforeend",`<div>bhvd</div>`)
// let a = document.querySelectorAll(".box");
// let b = document.createElement("div");
// b.innerHTML = "helloworld";
// b.setAttribute("style","color:red")
// a[1].insertAdjacentElement("afterend", b)
// let c = document.getElementById("id1")
// c.insertAdjacentText("afterbegin","hello")
let fun = () => {
    let a = document.querySelector(".butt")
    a.style.color="red"
}