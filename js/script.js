"use strict"

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,

    start: function () {
        personalMovieDB.count = +prompt('How many films have u watched already', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many films have u watched already', '');
        }
    },


    rememberMyFilms: function () {
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

    },

    showMyDB: function () {
        if (personalMovieDB.private === false) {
            console.log(personalMovieDB);
        }
    },

    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("u've watched a small number of films");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('u r an avarage film watcher');
        } else if (personalMovieDB.count >= 30) {
            console.log('u r an film enjoyer');
        } else {
            console.log('error');
        }


    },

    toggleVisibleMyDB: function () {
        if (personalMovieDB.private === false) {
            personalMovieDB.private = true;
        } else {
            personalMovieDB.private = false;
        }

    },



    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ur fav genre under num ${i}`);
            if (genre === '' || genre === null) {
                console.log('wrong data or no data at all')
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }



        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`fav genre ${i + 1} - is ${item} `)
        });
    }
};




personalMovieDB.start();

personalMovieDB.rememberMyFilms();

personalMovieDB.detectPersonalLevel();

personalMovieDB.writeYourGenres();

personalMovieDB.toggleVisibleMyDB();

personalMovieDB.showMyDB();
