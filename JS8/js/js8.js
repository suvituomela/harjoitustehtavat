function etsiSarjoja() {
  const haku = document.getElementById('hakuteksti').value
  fetch(`https://api.tvmaze.com/search/shows?q=${haku}`)
  .then(vastaus => vastaus.json())
  .then(series => {
    console.log(series);
    const app = document.getElementById('app');
    app.innerHTML = series.map(({show}) => `
<div class="container">
            <div id="kuva">
            ${show.image ? `<img src="${show.image.medium}">` : ''}
            </div>
            <div>
               <h4>${show.name}</h4>
                    <h7><a href="${show.url}">${show.url}</a></h7><br>
                    <h7>${show.genres}</h7>
                    <h7>${show.summary}</h7><br>
               
               </div>
                 </div>
                 
`).join('');
  })
}

const nappi = document.getElementById('hakunappi');
nappi.addEventListener('click', etsiSarjoja);

