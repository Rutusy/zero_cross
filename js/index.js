console.log('Start game');

let fields = document.querySelectorAll('.field');
let control = document.querySelector('.control');
let p = true;
console.log('Всего ячеек: ' + fields.length);
let gameover = false;



for (let i=0; i<9; i++) {
fields[i].addEventListener('click', evclick);

function evclick() {
  console.log('Ход в ' + (i+1) + ' ячейку');
  if (p===true && fields[i].firstElementChild.className==='') {
  fields[i].firstElementChild.classList.add('zero');
  p = false;
  winner();
  } else if (p===false && fields[i].firstElementChild.className==='') {
  fields[i].firstElementChild.classList.add('cross');
  p = true;
  winner();
  } else {
    console.log('Ошибка! Выберите другую ячейку')
  }
;}
}

// Проверка условия победы
let filedsId = document.querySelectorAll('#id');
function winner() {
  for (let i = 0; i < 3; i++) {
  if (
    filedsId[i*3].className &&
    filedsId[i*3].className === filedsId[i*3+1].className &&
    filedsId[i*3+1].className === filedsId[i*3+2].className) {
    setwinner (filedsId[i*3].className);
  };
  }
  for (let i=0; i<3; i++) {
  if (
    filedsId[i].className &&
    filedsId[i].className === filedsId[i+3].className &&
    filedsId[i+3].className === filedsId[i+6].className) {
    setwinner (filedsId[i].className);
  }
  }
  if (
    filedsId[0].className &&
    filedsId[0].className === filedsId[4].className &&
    filedsId[4].className === filedsId[8].className
    ) {
    setwinner (filedsId[4].className);
  }
  if (
    filedsId[2].className &&
    filedsId[2].className === filedsId[4].className &&
    filedsId[4].className === filedsId[6].className
    ) {
    setwinner (filedsId[4].className);
  }
} 

function setwinner (who) {
  let pwin = document.querySelector('#win');
  pwin.style.display = 'block';
  if (who === 'zero') {
    pwin.innerHTML = `&#129395; Победили 0! 	
&#129395;`;
  } else {
    pwin.innerHTML = `&#129395; Победили Х! 	
&#129395;`;
  }
for (let i = 0; i < 9; i++) {
  fields[i].removeEventListener('click', evclick);
}
}