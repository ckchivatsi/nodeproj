var movies = require('./movies');
var ruthMovies = movies();
ruthMovies.favMovie = "The Notebook";
console.log("Ruth's favorite movie is: " + ruthMovies.favMovie);