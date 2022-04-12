window.onload = () => {
  let KEYCODE = document.querySelector("#keycode");

  window.addEventListener("keydown", (event) => {
    KEYCODE.innerHTML = `
    <div class="key">
            ${event.key === " " ? "Space" : event.key}
            <small>event-key</small>
        </div>
        <div class="key">
            ${event.keyCode}
            <small>even.keycode</small>
        </div>
        <div class="key">
            ${event.code}
            <small>event.code</small>
        </div>
    `;
  });
};
