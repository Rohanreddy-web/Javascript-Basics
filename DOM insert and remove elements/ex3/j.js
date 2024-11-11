let fun = (image, name, VI, mo) => {
  let a = document.querySelector(".box");
  a.insertAdjacentHTML(
    "beforeend",
    `<div class="box">
  <iframe src="${image}"
 allowfullscreen width="180" height="100"></iframe>
<span class="name">${name}
</span><div class="view">
<span> ${VI}k views</span>
<span> ${mo} months ago</span>
</div>

</div>`
  );
};
let button = document.querySelector(".click");
button.addEventListener("click", (e) => {
  button.classList.add("color")
  button.textContent = "Add The Song";
  let inp = prompt("enter");
  switch (inp) {
    case "1":
      fun(
        "https://www.youtube.com/embed/hgQeo55s4So?si=fzw_YMbKp_46SqMh",
        "Orange : Rooba Rooba",
        10,
        5
      );
      break;
    case "2":
      fun(
        "https://www.youtube.com/embed/QntqP3PrW3c?si=hrnewV3xzdBOygdl",
        "Orange : Hello Rammante",
        80
      );
      break;
    case "3":
      fun(
        "https://www.youtube.com/embed/63SIoywCnlM?si=ZF9GwfxB2ACLXAk_",
        "Orange : O Range Love",
        100,
        6
      );
      break;
    case "4":
      fun(
        "https://www.youtube.com/embed/_ZasoOaCNlI?si=8XwieywCEfXJf-Q8",
        "Orange : Sydney nagaram",
        10,
        5
      );
      break;
    case "5":
      fun(
        "https://www.youtube.com/embed/_ZasoOaCNlI?si=8XwieywCEfXJf-Q8",
        "Orange : Sydney nagaram",
        12,
        8
      );
      break;
  }
});
