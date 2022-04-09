window.onload = () => {
  let check = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
  </svg>`;
  let X = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>`;
  let isCompleted = false;
  let TASKDOM = document.querySelector("#task"); // input
  let newSpan = document.querySelector("#liveToastBtn");
  newSpan.addEventListener("click", listfunction);

  function sil() {
    this.parentElement.remove();
  }

  function completed() {
    isCompleted = !isCompleted;
    if (isCompleted === true) {
      this.classList.add("list-completed");
      this.classList.add("check-icon-show");
    } else {
      this.classList.remove("list-completed");
      this.classList.remove("check-icon-show");
    }
  }

  function listfunction() {
    if (TASKDOM.value && TASKDOM.value.trim() !== "") {
      let LIST = document.querySelector("#list"); // ul
      let liDOM = document.createElement("li");
      let spanDom = document.createElement("span");
      let divDOM = document.createElement("div");
      let checkDOM = document.createElement("span");
      checkDOM.innerHTML = check;
      checkDOM.classList.add("check-icon");
      divDOM.innerHTML = TASKDOM.value;
      spanDom.innerHTML = X;
      spanDom.classList.add("font-weight");
      liDOM.append(checkDOM, divDOM, spanDom);
      liDOM.classList.add(`list-item`);
      LIST.append(liDOM);
      liDOM.onclick = completed;
      spanDom.onclick = sil;
    } else {
      $(document).ready(function () {
        $(".error").toast("show");
      });
    }
  }
};
