const containerBall = document.getElementById('containerBall');
const balls = document.getElementsByClassName('ball');
const labelColor = document.getElementById('rgb-color');
const labelIndication = document.getElementById('answer');
const buttonReset = document.getElementById('reset-game');
const labelCount = document.getElementById('score');
let count = 0;

function random(props = 255) {
  const number = Math.floor(Math.random() * props);
  return number;
}

function fillDivBall() {
  for (const ball of balls) {
    ball.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`;
  }
}

function selectorOfColor() {
  const colorSelect = balls[random(6)].style.backgroundColor;
  labelColor.innerHTML = colorSelect.replace('rgb', '');
  localStorage.setItem('color', colorSelect);
}

function colorComparator(myColor) {
  console.log(localStorage.getItem('color'));
  if (myColor === localStorage.getItem('color')) {
    labelIndication.innerHTML = 'Acertou!';
    fillDivBall();
    selectorOfColor();
    count += 3;
    labelCount.innerHTML = count;
  } else {
    labelIndication.innerHTML = 'Errou! Tente novamente!';
  }
}

function getColorDivBackground(event) {
  const myColor = event.target.style.backgroundColor;
  colorComparator(myColor);
}

for (let index = 0; index < 6; index += 1) {
  const divBall = document.createElement('div');
  divBall.classList.add('ball');
  divBall.addEventListener('click', getColorDivBackground);
  containerBall.appendChild(divBall);
  fillDivBall();
}

selectorOfColor();

buttonReset.addEventListener('click', () => {
  fillDivBall();
  selectorOfColor();
  labelIndication.innerHTML = 'Escolha uma cor';
});
