const form = document.querySelector('form');
const numero1 = document.querySelector('input[name=numero1]');
const numero2 = document.querySelector('input[name=numero2]');
const submit = document.querySelector('input[name=submit]');
const p = document.querySelector('p');


function A() {
  form.onsubmit = function(evt) {
    const summa = +numero1.value + +numero2.value;
    evt.preventDefault();
    p.innerText = 'Lukujen yhteenlaskettu summa on ' + +summa;
  }
}

function B() {
  form.onsubmit = function(evt) {
    const ext = +numero1.value - +numero2.value;
    evt.preventDefault();
    p.innerText = 'Vähennyslaskun tulos on ' + +ext;
  }
}
function C() {
  form.onsubmit = function(evt) {
    evt.preventDefault();
    p.innerText = ' Kertolaskun tulos on ' + numero1.value * numero2.value;
  }
}
function D() {
  form.onsubmit = function(evt) {
    evt.preventDefault();
    p.innerText = 'Jakolaskun tulos on ' + numero1.value / numero2.value;
  }
}