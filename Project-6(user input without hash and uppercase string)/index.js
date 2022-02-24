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
  if (color.length !== 6) return false;
  return /^[0-9A-Fa-f]{6}$/i.test(color);
}

window.onload = () => {
  const root = document.getElementById("root");
  const colorChangingBtn = document.getElementById("changeBtn");
  const output = document.getElementById("color-code");
  const copyBtn = document.getElementById("copyBtn");

  //color changing button event handler
  colorChangingBtn.addEventListener("click", function () {
    const bgcolor = randomColorSelector();
    root.style.backgroundColor = bgcolor;
    output.value = bgcolor.substring(1).toUpperCase();
  });

  //copy button event handler
  copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(`#${output.value}`);
    if (div !== null) {
      div.remove();
      div = null;
    }
    if (isValidHex(output.value))
      generateToastMessage(`#${output.value} copied`);
    else {
      alert("Invalid Color Code");
      output.value = "";
    }
  });
  output.addEventListener("keyup", function (e) {
    const color = e.target.value;
    if (color) {
      output.value = color.toUpperCase();
      if (color && isValidHex(color)) {
        root.style.backgroundColor = `#${color}`;
      }
    }
  });
};

function generateToastMessage(msg) {
  div = document.createElement("div");
  div.innerText = msg;
  div.className = "toast-message toast-message-slide-in bg-light";

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
