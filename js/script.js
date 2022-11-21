
const numberOfFilms = prompt('How many films have u watched already', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt('one of recently viewed films', ''),
    b = prompt('how can u rate it', ''),
    c = prompt('one of recently viewed films', ''),
    d = prompt('how can u rate it', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB)