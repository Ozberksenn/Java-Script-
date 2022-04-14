let JOKE = document.querySelector("#joke");
let BUTTON = document.querySelector("#JokeBtn");
let IMAGE = document.querySelector("#image");

BUTTON.addEventListener("click", generate);

function generate() {
  fetch("setting.json")
    .then((res) => res.json())
    .then((data) => {
      let tut = data[Math.floor(Math.random() * data.length)];
      JOKE.innerHTML = tut.Name;
      IMAGE.innerHTML = tut.img;
    });
}
