let berry = document.getElementById('berry');
console.log(berry);
let berryteksti = ('I found the berry: Strawberry');
console.log(berryteksti);
berry.style.background = "red";

let orange = document.querySelector("li[data-foodtype='squishy']");
console.log(orange);
let orangeteksti = ('I found the fruit: Orange');
console.log(orangeteksti);
orange.style.background = "orange";

let lista = document.getElementsByTagName('li');
console.log(lista);

for (i = 0; i < lista.length; i++) {
  lista[3].style.background = "green";
  lista[i].style.listStyleType = "none";
  lista[i].style.width = "100px";
}

const list = document.querySelectorAll('li');
console.log(list)

list.forEach(function(li) {
  li.style.border = '1px solid black';
});