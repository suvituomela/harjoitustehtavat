const nappi = document.querySelector('button');

function popup(evt){
  alert('Nappia klikattu');
}

nappi.addEventListener('click', popup);