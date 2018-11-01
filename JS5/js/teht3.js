const kuvat = [
  'http://placekitten.com/321/240',
  'http://placekitten.com/320/241',
  'http://placekitten.com/322/242',
  'http://placekitten.com/321/240',
  'http://placekitten.com/331/240',
];


const uul = document.getElementsByTagName('ul')[0];
uul.setAttribute('id','ul');


for (let i=0; i < kuvat.length; i+=1) {
  let lii = document.createElement('li');
  let kuva = document.createElement('img');

  const ul = document.querySelector('#ul');
  ul.innerHTML += '<li><img src=' + kuvat[i] + '></li>';
}