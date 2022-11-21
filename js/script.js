"use strict"

const numberOfFilms = +prompt('How many films have u watched already', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('one of recently viewed films', ''),
        b = prompt('how can u rate it', '')

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done;')
    } else {
        console.log('error');
        i--;
    }

}


if (personalMovieDB.count < 10) {
    console.log("u've watched a small number of films");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('u r an avarage film watcher');
} else if (personalMovieDB.count >= 30) {
    console.log('u r an film enjoyer');
} else {
    console.log('error');
}



console.log(personalMovieDB);