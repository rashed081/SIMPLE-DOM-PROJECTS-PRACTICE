function randomColorSelector() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

window.onload = () => {
  const root = document.getElementById("root");
  const btn = document.getElementById("btn");
  const inputField = document.getElementById("color-code");

  btn.addEventListener("click", function () {
    const bgcolor = randomColorSelector();
    console.log(bgcolor);
    root.style.backgroundColor = bgcolor;
    inputField.value = bgcolor;
  });
};
