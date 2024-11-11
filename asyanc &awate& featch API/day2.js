document.getElementById("id").textContent="hi coder..."
document.getElementsByClassName("class")[0].style.backgroundColor="skyblue"
let div=document.createElement("div")
let ul=document.getElementsByTagName("ul")[0]
div.classList.add("d")
div.textContent="rohan reddy"
document.body.append(div)
let div1=document.createElement("li")
div1.classList.add("d")
div1.textContent="list item"
ul.prepend(div1)
// div1.remove()
ul.lastElementChild.remove()
let img=document.getElementsByTagName("img")[0]
img.setAttribute("src","rohan.jpg")




