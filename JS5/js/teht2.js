const ekakuva = document.getElementsByTagName('img')[0];
const tokakuva = document.getElementsByTagName('img')[1];

ekakuva.setAttribute('id','eka');
tokakuva.setAttribute('id', 'toka');

document.querySelector('#eka').style = "display: flex;";
document.querySelector('#toka').classList.toggle('visible');