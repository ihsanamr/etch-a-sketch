const gridContainer = document.querySelector("#grid-container");
const gridInput = document.querySelector("#grid-density");
const submitBtn = document.querySelector("#update-btn");
const currentDensityText = document.querySelector("#current-density");
const clearBtn = document.querySelector("#clear-btn");
const rainbowMode = document.querySelector("#rainbow-mode");
const classicMode = document.querySelector("#classic-mode");

const defaultSize = 16;

let isDrawing = false;
let currentMode = "classic";

classicMode.classList.add("mode-active");

function getRandomColors() {
  let r, g, b;
  r = Math.floor(Math.random() * 256);
  g = Math.floor(Math.random() * 256);
  b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

function colorSquare(targetBox) {
  let hoverCount = Number(targetBox.dataset.count);
  // console.log(hoverCount);

  if (hoverCount === 0) {
    currentMode === "rainbow"
      ? (targetBox.style.backgroundColor = getRandomColors())
      : (targetBox.style.backgroundColor = "black");
  }

  if (hoverCount < 10) {
    hoverCount++;
    targetBox.dataset.count = hoverCount;
    targetBox.style.opacity = hoverCount * 0.1;
  }
}

function createGrid(inputSize) {
  gridContainer.innerHTML = "";

  // 500 - 40
  const availableSpace = 460;
  const boxSize = availableSpace / inputSize;

  for (let i = 0; i < inputSize ** 2; i++) {
    const box = document.createElement("div");

    box.style.opacity = "0.1";
    box.dataset.count = "0";

    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;

    box.classList.add("grid-item");

    box.addEventListener("mouseover", () => {
      if (isDrawing === true) {
        colorSquare(box);
      }
    });

    box.addEventListener("mousedown", () => {
      colorSquare(box);
    });

    gridContainer.append(box);
  }
}

submitBtn.addEventListener("click", () => {
  let size = parseInt(gridInput.value);

  if (!size) {
    alert(
      "Please enter a valid size value! (size has been reset to the default 16 x 16)",
    );
    size = 16;
  }

  if (size < 1) {
    alert(
      "Please enter a valid size value! (size has been reset to the default 16 x 16)",
    );
    size = 16;
  } else if (size > 100) {
    alert(
      "Please enter a valid size value! (size has been reset to the default 16 x 16)",
    );
    size = 16;
  }

  createGrid(size);

  currentDensityText.textContent = `${size} x ${size}`;
  gridInput.value = "";
});

document.addEventListener("mousedown", (e) => {
  isDrawing = true;
  // console.log(e);
  if (e.target.classList.contains("grid-item")) {
    e.preventDefault();
  }
});

document.addEventListener("mouseup", () => {
  isDrawing = false;
});

createGrid(defaultSize);

clearBtn.addEventListener("click", () => {
  const items = document.querySelectorAll(".grid-item");
  items.forEach((element) => {
    element.style.backgroundColor = "";
    element.style.opacity = "0.1";
    element.dataset.count = "0";
  });
});

rainbowMode.addEventListener("click", () => {
  currentMode = "rainbow";
  rainbowMode.classList.add("mode-active");
  classicMode.classList.remove("mode-active");
});

classicMode.addEventListener("click", () => {
  currentMode = "classic";
  classicMode.classList.add("mode-active");
  rainbowMode.classList.remove("mode-active");
});
