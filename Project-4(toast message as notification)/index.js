let div = null;

function randomColorSelector() {
  let red = Math.floor(Math.random() * 255);
  red < 16 ? (red = "0" + red.toString(16)) : red;
  //console.log(red);
  let green = Math.floor(Math.random() * 255);

  green < 16 ? (green = "0" + green.toString(16)) : green;
  //console.log(green);
  let blue = Math.floor(Math.random() * 255);

  blue < 16 ? (blue = "0" + blue.toString(16)) : blue;
  //onsole.log(blue);
  const rgbColor = `#${red.toString(16)}${green.toString(16)}${blue.toString(
    16
  )}`;
  //console.log(rgbColor);
  return rgbColor;
}

window.onload = () => {
  const root = document.getElementById("root");
  const btn = document.getElementById("changeBtn");
  const output = document.getElementById("color-code");
  const copyBtn = document.getElementById("copyBtn");

  btn.addEventListener("click", function () {
    const bgcolor = randomColorSelector();
    // console.log(bgcolor);
    root.style.backgroundColor = bgcolor;
    output.value = bgcolor;
    copyBtn.innerText = "Copy";
  });
  copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(output.value);
    if (div !== null) {
      div.remove();
      div = null;
    }
    generateToastMessage(`${output.value} copied`);
  });
};

function generateToastMessage(msg) {
  div = document.createElement("div");
  div.innerText = msg;
  div.className = "toast-message toast-message-slide-in";

  div.addEventListener("click", function () {
    div.classList.remove("toast-message-slide-in");
    div.classList.add("toast-message-slide-out");

    div.addEventListener("animationend", function () {
      div.remove();
      div = null;
    });
  });

  document.body.appendChild(div);
}
