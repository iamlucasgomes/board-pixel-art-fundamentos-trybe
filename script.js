const header = document.querySelector('header');
const main = document.querySelector('main');
// const footer = document.querySelector('footer');
const white = 'rgb(255, 255, 255)';

function header1() {
  const headerOne = document.createElement('h1');
  headerOne.id = 'title';
  headerOne.innerText = 'Paleta de Cores';
  header.appendChild(headerOne);
}
header1();

function colorPalette() {
  const section = document.createElement('section');
  section.id = 'color-palette';
  main.appendChild(section);
}
colorPalette();

function colorClass() {
  const color1 = `rgb(${+Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
  const color2 = `rgb(${+Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
  const color3 = `rgb(${+Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
  const paletteColor = document.querySelector('#color-palette');
  const colors = ['black', color1, color2, color3];
  for (let index = 0; index < colors.length; index += 1) {
    const div = document.createElement('div');
    div.classList.add('color');
    div.style.background = colors[index];
    paletteColor.appendChild(div);
  }
}
colorClass();

function sectionButton() {
  const buttonSection = document.createElement('section');
  buttonSection.id = 'section-button';
  main.appendChild(buttonSection);
}
sectionButton();

function createLabel() {
  const sectButton2 = document.querySelector('#section-button');
  const label = document.createElement('label');
  label.innerText= 'Tamanho do quadro:';
  sectButton2.appendChild(label);
}
createLabel()

function createInput() {
  const sectButton2 = document.querySelector('#section-button');
  const input = document.createElement('input');
  input.setAttribute('type', 'number');
  input.setAttribute('min', '1');
  input.setAttribute('placeholder', 'min: 5 max: 50')
  input.classList.add('input-wrapper');
  input.id = 'board-size';
  sectButton2.appendChild(input);
}
createInput();

function vqv() {
  const sectButton2 = document.querySelector('#section-button');
  const buttonVqv = document.createElement('button');
  buttonVqv.id = 'generate-board';
  buttonVqv.setAttribute('type', 'submit');
  buttonVqv.innerText = 'VQV';
  sectButton2.appendChild(buttonVqv);
}
vqv();

function button() {
  const sectButton = document.getElementById('section-button');
  const buttonClear = document.createElement('button');
  buttonClear.id = 'clear-board';
  buttonClear.innerText = 'Limpar';
  sectButton.appendChild(buttonClear);
}

button();
function sectionBoard() {
  const quadro = document.createElement('section');
  quadro.id = 'pixel-board';
  main.appendChild(quadro);
}

sectionBoard();

function initialGrid(size) {
  const paintingId = document.querySelector('#pixel-board');
  paintingId.style.setProperty('--size', size);
  for (let index = 0; index < size * size; index += 1) {
    const pixelDiv = document.createElement('div');
    pixelDiv.classList.add('pixel');
    pixelDiv.style.backgroundColor = white;
    paintingId.appendChild(pixelDiv);
  }
}
initialGrid(5);

const color = document.querySelector('.color');

function black() {
  color.classList.add('selected');
}
black();
const colorItems = document.querySelectorAll('.color');

function verifySelect(event) {
  const select = document.querySelector('.selected');
  select.classList.remove('selected');
  event.target.classList.add('selected');
}

for (let index = 0; index < colorItems.length; index += 1) {
  colorItems[index].addEventListener('click', verifySelect);
}

function pickAndPainting(event) {
  const select = document.getElementsByClassName('selected')[0];
  const evento = event.target;
  if (select.style.backgroundColor !== evento.style.backgroundColor) {
    evento.style.backgroundColor = select.style.backgroundColor;
  }
}
const pixel = document.getElementsByClassName('pixel');
for (let index = 0; index < pixel.length; index += 1) {
  pixel[index].addEventListener('click', pickAndPainting);
}

function clear() {
  const pixelDiv = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixelDiv.length; index += 1) {
    pixelDiv[index].style.backgroundColor = white;
  }
}
const buttonClear = document.querySelector('#clear-board');
buttonClear.addEventListener('click', clear);

const buttonVqv = document.querySelector('#generate-board');

function verifyInput() {
  const inputValue = document.querySelector('input').value;
  if (inputValue.length === 0) {
    alert('Board inválido!');
  }
}

function callFunction() {
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].addEventListener('click', pickAndPainting);
  }
}

function pixelAdd() {
  const pixelsRemove = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixelsRemove.length; index += 1) {
    pixelsRemove[index].outerHTML = '';
  }
  let inputValues = document.querySelector('#board-size').value;
  const paintingId = document.querySelector('#pixel-board');
  if (inputValues < 5) {
    inputValues = 5;
  } else if (inputValues > 50) {
    inputValues = 50;
  }
  paintingId.style.setProperty('--size', inputValues);
  for (let index = 0; index < inputValues * inputValues; index += 1) {
    const pixelDiv = document.createElement('div');
    pixelDiv.classList.add('pixel');
    pixelDiv.style.backgroundColor = white;
    paintingId.appendChild(pixelDiv);
  } callFunction();
}
const inputEl = document.querySelector('#board-size');
function enter(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    buttonVqv.click();
  }
}

inputEl.addEventListener('keyup', enter);

buttonVqv.addEventListener('click', pixelAdd);
buttonVqv.addEventListener('click', verifyInput);
