"use strict";

var slcGenres;
var movies;
var huidigOnderdeel, indexHuidigeMovie;

window.addEventListener('load', Initialize);

function Initialize() {
  KoppelElementen();
  KoppelEvents();
  VulStandaardwaarden();
  LeesMovie();
};

function KoppelElementen () {
  sidenav = document.getElementById("sidenav");
  main = document.getElementById("main");
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
//   fetch("https://brendyverstreken.github.io/WFA-EE-Proberen/api/movies.json")
//     .then(function (response) { return response.json(); })
//     .then(function (arr) {
//       data = arr;
//       //ToonDetails(arr);
//     });
// }

function VulStandaardwaarden() {
  sidenav.classList.add('hidden');
  Maak.classList.add('hidden');
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



function ToonDetails(movies) {
  sidenav.classList.add('hidden');
  MediaDeviceInfo.classList.remove('hidden');

  for (let index = 0; index < movies.length; index++) {
    const movie = movies[index];
    console.log('Movie: ' + movie);
    let divMovie = document.createElement('div');
    let movieAfbeelding = movie.Image;
    let movieTitel = movie.Title;
    let moviePrijs = movie.Price;
    let movieActeurs = movie.Stars;
    let movieDescription = movie.Description;
    let samenvatting = `<h3>${movieTitel}</h3><br/>
    <img src="img:${movieAfbeelding}" alt="afbeelding van movie ${movieTitel}" width="100px" class="logo"/><br/><br/>
    Acteurs: ${movieActeurs}<br/><br/>
    Uitleg: ${movieDescription}<br/><br/>
    Prijs: €${moviePrijs}<br/><br/>`;

    sidenav.class="movieInfo";
    sidenav.id = index;
    sidenav.innerHTML = samenvatting;
    sidenav.addEventListener('click', () => {
      indexHuidigeMovie = sidenav.id;
    });
    main.appendChild(sidenav);
  }
}
