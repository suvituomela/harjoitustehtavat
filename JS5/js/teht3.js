const kuvat = [
  'http://placekitten.com/321/240',
  'http://placekitten.com/320/241',
  'http://placekitten.com/322/242',
  'http://placekitten.com/321/240',
  'http://placekitten.com/331/240',
];


const uul = document.getElementsByTagName('ul')[0];
uul.setAttribute('id','ul');


for (let i=0; i < kuvat.length; i++) {
  let lii = document.createElement('li');
  let kuva = document.createElement('img');

  const ul = document.querySelector('#ul');
  const html =
      "<li><img src="+kuvat[0]+"></li><br>" +
      "<li><img src="+kuvat[1]+"></li><br>" + "<li><img src="+kuvat[2]+"></li><br>" +
      "<li><img src="+kuvat[3]+"></li><br>" + "<li><img src="+kuvat[4]+"></li><br>";
  ul.innerHTML = html;
}