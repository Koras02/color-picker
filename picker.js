const colorDisplay = document.getElementById("colorDis");
const colorInput = document.getElementById("colorInput");
const searchButton = document.getElementById("searchButton");

// use Mouse Pick
colorDisplay.addEventListener("mousemove", (event) => {
  const { offsetX, offsetY } = event;
  const width = colorDisplay.clientWidth;
  const height = colorDisplay.clientHeight;

  const red = Math.round((offsetX / width) * 255);
  const green = Math.round((offsetY / height) * 255);
  const blue = Math.round(((width - offsetX) / width) * 255);

  const rgbColor = `rgb(${red}, ${green}, ${blue})`;
  colorDisplay.style.backgroundColor = rgbColor;
});

searchButton.addEventListener("click", () => {
  const inputColor = colorInput.value.trim();
  colorDisplay.style.backgroundColor = inputColor;
});

colorDisplay.style.backgroundColor = "rgb(255,255,255)";

const setColor = (color) => {
  colorDisplay.style.backgroundColor = color;
};

// Enter Key Submit
colorInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const inputColor = colorInput.value.trim();
    setColor(inputColor);
    console.log("23");
  }
});
