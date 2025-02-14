const colorDisplay = document.getElementById("colorDis");
const colorInput = document.getElementById("colorInput");
const searchButton = document.getElementById("searchButton");
const languageSelect = document.getElementById("language");
const title = document.getElementById("title");

// Language
fetch("language.json")
  .then((response) => response.json())
  .then((translations) => {
    // default language
    const defaultLanguage = "ko";
    setLanguage(translations, defaultLanguage);

    languageSelect.addEventListener("change", (event) => {
      const selectedLanguage = event.target.value;
      setLanguage(translations, selectedLanguage);
    });
  });

// language setting function
const setLanguage = (translations, lang) => {
  title.textContent = translations[lang].title;
  colorInput.placeholder = translations[lang].placeholder;
  searchButton.textContent = translations[lang].buttonText;
};

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

// Language Select Event
languageSelect.addEventListener("change", (event) => {
  const selectedLanguage = event.target.value;

  title.textContent = translations[selectedLanguage].title;
  colorInput.placeholder = translations[selectedLanguage].placeholder;
  searchButton.textContent = translations[selectedLanguage].buttonText;
});
