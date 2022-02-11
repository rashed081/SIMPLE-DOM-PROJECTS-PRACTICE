function randomColorSelector() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
}

window.onload = () => {
  const root = document.getElementById("root");
  const btn = document.getElementById("btn");

  btn.addEventListener("click", function () {
    root.style.backgroundColor = randomColorSelector();
  });
};
