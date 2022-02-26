let div = null;

function colorGeneratorDecimal() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  return {
    red,
    green,
    blue,
  };
}
//hex code generator
function randomHexColorSelector({ red, blue, green }) {
  const getTwoCode = (value) => {
    return value < 16 ? `0${value.toString(16)}` : value.toString(16);
  };
  const rgbColor = `#${getTwoCode(red)}${getTwoCode(green)}${getTwoCode(blue)}`;
  return rgbColor;
}

function generateColorRGB({ red, blue, green }) {
  return `rgb(${red},${green},${blue})`;
}
function isValidHex(color) {
  if (color.length !== 6) return false;
  return /^[0-9A-Fa-f]{6}$/i.test(color);
}

window.onload = () => {
  const root = document.getElementById("root");
  const colorChangingBtn = document.getElementById("changeBtn");
  const output = document.getElementById("color-code");
  const output2 = document.getElementById("color-code2");
  const copyBtn = document.getElementById("copyBtn");
  const copyBtn2 = document.getElementById("copyBtn2");

  //color changing button event handler
  colorChangingBtn.addEventListener("click", function () {
    const color = colorGeneratorDecimal();
    const bgcolor = randomHexColorSelector(color);
    const bgColorRGB = generateColorRGB(color);
    root.style.backgroundColor = bgcolor;
    output.value = bgcolor.substring(1).toUpperCase();
    output2.value = bgColorRGB;
  });

  //copy button 1 event handler
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
  //copy button 2 event listerner
  copyBtn2.addEventListener("click", () => {
    navigator.clipboard.writeText(`#${output2.value}`);
    generateToastMessage(`${output2.value} copied`);
  });
  // getting input from user
  output.addEventListener("keyup", function (e) {
    const color = e.target.value;
    console.log(color.toString(16));
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
