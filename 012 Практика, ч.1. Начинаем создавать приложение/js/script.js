let numberOfFilms = +prompt('How many movies you have watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastFilm = prompt('Last film you have watched', '');
const rateTheMovie = prompt('Rate the movie from 0 to 10', '');

personalMovieDB.movies[lastFilm] = +rateTheMovie;

console.log(personalMovieDB);