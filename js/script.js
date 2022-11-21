"use strict"

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many films have u watched already', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many films have u watched already', '');
    }
}


start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};



function rememberMyFilms() {
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

}

rememberMyFilms();





function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("u've watched a small number of films");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('u r an avarage film watcher');
    } else if (personalMovieDB.count >= 30) {
        console.log('u r an film enjoyer');
    } else {
        console.log('error');
    }


}


detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.private === false) {
        console.log(personalMovieDB);
    }
}


function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt('Ur fav genre under num ' + ++i, '');
    }
}

writeYourGenres();

showMyDB() 