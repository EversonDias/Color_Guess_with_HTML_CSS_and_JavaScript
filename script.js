const containerBall = document.getElementById('containerBall');
const balls = document.getElementsByClassName('ball');
const labelColor = document.getElementById('rgb-color')


function random(props=255) {
  const number = Math.floor(Math.random() * props)
  return number
}

function colorGenerator() { 
  const color = `rgb(${random()}, ${random()}, ${random()})`;
  return color;
}

function fillDivBall() {
  for (const ball of balls) {
    // ball.setAttribute('style', `background: ${colorGenerator()}`)
    ball.style.backgroundColor = colorGenerator()
  }

}

function getColorDivBackground() {
  console.log('ok');
}

for (let index = 0; index < 6; index += 1) {
  const divBall = document.createElement('div');
  divBall.classList.add('ball');
  divBall.addEventListener('click', getColorDivBackground);
  containerBall.appendChild(divBall)
  fillDivBall()
}

const colorSelect = balls[random(6)].style.backgroundColor;
labelColor.innerHTML = colorSelect.replace('rgb', '')


