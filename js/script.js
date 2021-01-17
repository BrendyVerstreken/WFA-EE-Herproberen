"use strict";

var slcGenres;
var movies;
var huidigOnderdeel, indexHuidigeMovie;

window.addEventListener('load', Initialize);

function Initialize() {
  KoppelElementen();
  KoppelEvents();
  //FetchDataJson();
};

function KoppelElementen () {
  slcGenres = document.getElementById("slcGenres");
}

function KoppelEvents () {
  slcGenres.addEventListener('change', () => {
    let index = slcGenres.SelectedIndex;
    if (index >= 0) {
      ToonMovieDetails(index);
    }
  });
}

// function FetchDataJson() {
//   //Koppelingen naar een externe site.
//   fetch("https://brendyverstreken.github.io/WFA-EE-Herproberen/api/movies.json")
//     .then(function (response) { return response.json(); })
//     .then(function (arr) {
//       data = arr;
//       ToonDetails(arr);
//     });
// }

function ToonDetails(data) {

  //de data heeft verschillende keys (LuxeWagens, SUVAuto's, StadsAutos)
  //dit komt terecht in 'key'.
  for (let key in data) {

    //nu we door de verschillende keys lussen, lussen we ook nog eens door de verschillende auto's per category
    //vandaar mijn opmerking van daarnet dat deze misschien overbodig is.
    //dit is een array, dus heeft een .length property
    for (let index = 0; index < data[key].length; index++) {

      //Hier word de auto aangemaakt
      const film = data[key][index];
      console.log('Car: ' + film);

      let divCar = document.createElement('div');
      let filmNaam = film.Naam;
      let filmPrijs = film.Prijs;

      let samenvatting = `<h3>${filmNaam}</h3><br/>
                          Prijs: €${filmPrijs}<br/><br/>`;

      divCar.className = 'carInfo';
      divCar.id = index;
      divCar.innerHTML = samenvatting;

      //divContainer.appendChild(divCar);

      //auto's is de array, dus geef mij de zoveelste auto
      //en toon deze in de console
      console.log(data[key][index]);

    }
  }
}

function MaakOnderdeelNav (onderdeelNaam) {
  let onderdeelInfo = movies[onderdeelNaam];
  let figNavBulb = document.createElement('figure');
  figNavBulb.innerHTML = `<h2${onderdeelNaam}</h2>`;
  figNavBulb.addEventListener('click', () => {
    let genres = onderdeelInfo.Movies;
    huidigOnderdeel = onderdeelNaam;
    ToonDetails(movies);
  });
  sidenav.appendChild(figNavBulb);
}


