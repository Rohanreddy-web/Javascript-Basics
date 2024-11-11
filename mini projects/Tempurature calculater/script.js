let enter = document.getElementById("input");
let temp = document.querySelector("#temp");
let cen = document.getElementById("kal");
let div = document.querySelectorAll(".box2")[0];
let create = document.createElement("div");
let butt = document.getElementsByTagName("button")[0];

butt.addEventListener("click", (object) => {
  if (enter.value == "") {
    alert("please enter the value");
    object.preventDefault();
  } else if (temp.checked) {
    create.classList.add("red");
    div.append(create);
    let t = Number(enter.value);
    let cal = (t * 9) / 5 + 32;
    create.innerHTML = `${t} degrees in Fahrenheit is ${cal}`;
  } else if (cen.checked) {
    create.classList.add("red");
    div.append(create);
    let t2 = Number(enter.value);
    let cal2 = (t2 - 32)*5/9;
    create.innerHTML = `${t2} degrees in Fahrenheit is ${cal2}`;
  }
});
