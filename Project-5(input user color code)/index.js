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
function isValidHex(color) {
  if (color.length !== 7) return false;
  if (color[0] !== "#") return false;

  color = color.substring(1);

  return /^[0-9A-Fa-f]{6}$/i.test(color);
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
    if (isValidHex(output.value))
      generateToastMessage(`${output.value} copied`);
    else {
      alert("Invalid Color Code");
      output.value = "";
    }
  });
  output.addEventListener("keyup", function (e) {
    const color = e.target.value;
    if (color && isValidHex(color)) {
      root.style.backgroundColor = color;
    }
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
