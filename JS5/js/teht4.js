const kuvat = [
  'http://placekitten.com/321/240',
  'http://placekitten.com/320/241',
  'http://placekitten.com/322/242',
  'http://placekitten.com/321/240',
  'http://placekitten.com/331/240',
];

const uul = document.getElementsByTagName('ul')[0];
uul.setAttribute('id','lista');


for (let i=0; i < kuvat.length; i++) {
  let lii = document.createElement('li');
  let kuva = document.createElement('img');

  const ul = document.querySelector('#lista');

  kuva.src = kuvat[i];

  lii.appendChild(kuva);
  lista.appendChild(lii)

}