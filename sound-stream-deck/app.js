window.onload = () => {
  let sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

  sounds.forEach((sound) => {
    let btn = document.createElement("button");
    btn.classList.add("btn");

    btn.innerText = sound;

    btn.addEventListener("click", () => {
      stopSong();
      document.getElementById(sound).play();
    });

    document.querySelector("#buttons").append(btn);
  });

  function stopSong() {
    sounds.forEach((sound) => {
      let durdur = document.getElementById(sound);
      durdur.pause();
      durdur.currentTime = 0;
    });
  }
};
