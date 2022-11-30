"use strict"

const personalMovieDB = {

    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function () {
        personalMovieDB.count = +prompt("скільки фільмів подивився за життя?");

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("скільки фільмів подивився за життя?");
        }
    },

    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            let oneOfTheLastFilms = prompt("введи останній переглянутий фільм", "");
            let evaluteFilm = +prompt("на скільки оціниш (по 10 бальній шкалі)?", "");

            if (oneOfTheLastFilms != null && evaluteFilm != null && oneOfTheLastFilms != '' && evaluteFilm != '' && oneOfTheLastFilms.length < 50) {
                personalMovieDB.movies[oneOfTheLastFilms] = evaluteFilm;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },

    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log(" мало фільмів ви глянули. ");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("ти звичайна людина яка іноді дивиться фільми");
        } else if (personalMovieDB.count >= 30) {
            console.log("кіноман");
        } else {
            console.log("error");
        }
    },

    showMyDB: function () {
        if (personalMovieDB.private === false) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },

    writeYourGenres() {
        for (let i = 1; i <= 3; i++) {
            let genres = prompt(`введи улюблений жанр під номером ${i}`);

            if (genres === '' || genres == null) {
                console.log('ви ввели неправильні дані або ніц');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genres;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`ваш улюблений жанр ${i + 1} - це ${item}`);
        });
    }
};


