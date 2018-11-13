const hakunappi = document.querySelector('button');
hakunappi.addEventListener('click', etsiSarjoja);

function etsiSarjoja() {
  const haku = document.getElementById('haku'.value);
fetch('http://api.tvmaze.com/singlesearch/shows?q=${haku}')             // Käynnistetään haku. Vakiometodi on GET.
    .then(function(vastaus){        // Sitten kun haku on valmis,
      return vastaus.json();        // muutetaan ladattu tekstimuotoinen JSON JavaScript-olioksi
    }).then(function(json){         // Sitten otetaan ladattu data vastaan ja
  naytaKuva(json);
});
}

  function naytaKuva() {
    const osoite = "http://api.tvmaze.com/singlesearch/shows?q=$haku"; // 'Kuvat' taulukon toisen objektin 'osoite' ominaisuus

    document.querySelector('a').href = osoite;
  }
