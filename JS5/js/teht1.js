const etunimi = document.getElementsByTagName('td')[0];
const sukunimi = document.getElementsByTagName('td')[1];
const nikki = document.getElementsByTagName('td')[2];
const osoite = document.getElementsByTagName('td')[3];
const eka = document.getElementsByTagName('tr')[0];
const toka = document.getElementsByTagName('tr')[1];
const nikkiotsikko = document.getElementsByTagName('th')[2];


etunimi.innerHTML = 'Suvi';
sukunimi.innerHTML = 'Tuomela';
nikki.innerHTML = 'supikka';
osoite.innerHTML = 'Suviniitynkatu 4 B 32, 02770 Espoo';

eka.setAttribute('id','ekatr');
toka.setAttribute('id', 'tokatr');
nikki.setAttribute('id', 'nikki');
nikkiotsikko.setAttribute('id', 'nikkiostikko');


let puh = document.createElement("th");
let puhteksti = document.createTextNode("Puhelinnumero");
puh.appendChild(puhteksti);
let puhotsikko = document.getElementById("ekatr");
puhotsikko.appendChild(puh);


let numero = document.createElement("td");
let numeroteksti = document.createTextNode("044-3180317");
numero.appendChild(numeroteksti);
let puhnumero = document.getElementById("tokatr");
puhnumero.appendChild(numero);


let elem = document.getElementById("nikki");
elem.remove();
let elem2 = document.getElementById("nikkiostikko");
elem2.remove();
