const text = document.getElementsByTagName('p')[0];
text.setAttribute('id','teksti');
text.setAttribute('class', 'teksti');

document.getElementById("kuva").addEventListener("mouseenter", mouseEnter);
document.getElementById("kuva").addEventListener("mouseleave", mouseLeave);

function mouseEnter() {
  document.getElementById("teksti").style.opacity = 1;
}

function mouseLeave() {
  document.getElementById("teksti").style.opacity = 0;
}