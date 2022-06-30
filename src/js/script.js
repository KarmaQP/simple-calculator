'use strict';

const btns = document.querySelectorAll('.container__item');
const inputText = document.querySelector('.input-text');

btns.forEach(btn => {
  const btnValue = btn.dataset.value;
  switch (btnValue) {
    case '1':
      btnListener(btn, '1');
      break;
    case '2':
      btnListener(btn, '2');
      break;
    case '3':
      btnListener(btn, '3');
      break;
    case '4':
      btnListener(btn, '4');
      break;
    case '5':
      btnListener(btn, '5');
      break;
    case '6':
      btnListener(btn, '6');
      break;
    case '7':
      btnListener(btn, '7');
      break;
    case '8':
      btnListener(btn, '8');
      break;
    case '9':
      btnListener(btn, '9');
      break;
    case '.':
      btnListener(btn, '.');
      break;
    case 'C':
      btn.addEventListener('click', e => {
        inputText.value = '';
      });
      break;
    case '+':
      btnListener(btn, '+');
      break;
    case '-':
      btnListener(btn, '-');
      break;
    case '*':
      btnListener(btn, '*');
      break;
    case '/':
      btnListener(btn, '/');
      break;
    case '=':
      btn.addEventListener('click', e => {
        inputText.textContent = math.evaluate();
      });
  }
});

function btnListener(btn, value) {
  btn.addEventListener('click', e => {
    inputText.value += value;
  });
}
