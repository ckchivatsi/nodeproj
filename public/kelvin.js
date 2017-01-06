var movies = require('./movies');

var kelvinMovies = movies();
kelvinMovies.favMovie = "SAW";
console.log("Kelvin's favorite movie is: " + kelvinMovies.favMovie);