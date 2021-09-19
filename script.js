// Global Const Variables
const clearButton = document.querySelector('.button');
const firstPixelPaletteSelection = document.querySelector('.first');
const secondPixelPaletteSelection = document.querySelector('.second');
const thirdPixelPaletteSelection = document.querySelector('.third');
const fourthPixelPaletteSelection = document.querySelector('.fourth');
const palettePixes = document.querySelectorAll('.color');

// Function to create pixels on board
function createPixelsBoard() {
  const pixelBoard = document.querySelector('#pixel-board');
  for (let index = 0; index < 25; index += 1) {
    const createPixel = document.createElement('div');
    pixelBoard.appendChild(createPixel);
    createPixel.classList.add('pixel');
  }
}
createPixelsBoard();

// Set the default color selected black for every time the page loads
window.onload = () => {
  firstPixelPaletteSelection.classList.add('selected');
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    // For each click at the board, paint the clicked pixel with the selected color
    pixels[index].addEventListener('click', () => {
      pixels[index].style.backgroundColor = 'rgb(0, 0, 0)';
    });
  }
};

// Event Listeners with callback arrow functions
// Clear board setting all board pixels to white background
clearButton.addEventListener('click', () => {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'rgb(255, 255, 255)';
  }
});

// On click at first pixel of the palette select the color black
firstPixelPaletteSelection.addEventListener('click', () => {
  for (let index = 0; index < palettePixes.length; index += 1) {
    palettePixes[index].classList.remove('selected');
  }
  firstPixelPaletteSelection.classList.add('selected');
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    // For each click at the board, paint the clicked pixel with the selected color
    pixels[index].addEventListener('click', () => {
      pixels[index].style.backgroundColor = 'rgb(0, 0, 0)';
    });
  }
});

// On click at second pixel of the palette select the color Royal Brown
secondPixelPaletteSelection.addEventListener('click', () => {
  for (let index = 0; index < palettePixes.length; index += 1) {
    palettePixes[index].classList.remove('selected');
  }
  secondPixelPaletteSelection.classList.add('selected');
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    // For each click at the board, paint the clicked pixel with the selected color
    pixels[index].addEventListener('click', () => {
      pixels[index].style.backgroundColor = 'rgb(82, 55, 45)';
    });
  }
});

// On click at third pixel of the palette select the color Russet
thirdPixelPaletteSelection.addEventListener('click', () => {
  for (let index = 0; index < palettePixes.length; index += 1) {
    palettePixes[index].classList.remove('selected');
  }
  thirdPixelPaletteSelection.classList.add('selected');
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    // For each click at the board, paint the clicked pixel with the selected color
    pixels[index].addEventListener('click', () => {
      pixels[index].style.backgroundColor = 'rgb(129, 79, 19)';
    });
  }
});

// On click at fourth pixel of the palette select the color Satin Sheen Gold
fourthPixelPaletteSelection.addEventListener('click', () => {
  for (let index = 0; index < palettePixes.length; index += 1) {
    palettePixes[index].classList.remove('selected');
  }
  fourthPixelPaletteSelection.classList.add('selected');
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    // For each click at the board, paint the clicked pixel with the selected color
    pixels[index].addEventListener('click', () => {
      pixels[index].style.backgroundColor = 'rgb(207, 157, 60)';
    });
  }
});
