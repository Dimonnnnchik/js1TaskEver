
'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const advertisement = document.querySelectorAll('.promo__adv img');

    const genre = document.querySelector('.promo__genre');

    const background = document.querySelector('.promo__bg');

    const list = document.querySelector('.promo__interactive-list');

    const formAdd = document.querySelector('form.add');

    const formInput = document.querySelector('.adding__input');

    const formCheckbox = document.querySelector('[type = "checkbox"]');



    formAdd.addEventListener('submit', (event) => {
        let newFilm = formInput.value;
        event.preventDefault();

        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = newFilm.substring(0, 22) + '...';
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            if (formCheckbox) {
                console.log('adding favorite film');
            }

        }


        createMovieList(list, movieDB.movies)
        event.target.reset();
    })





    for (let i = 0; i < advertisement.length; i++) {
        advertisement[i].remove();
    }


    genre.textContent = 'drama';

    background.style.backgroundImage = 'url(img/bg.jpg)';



    function sortArr(arr) {
        arr.sort();
    }



    function createMovieList(parent, movies) {

        parent.innerHTML = "";
        sortArr(movies)

        movies.forEach((film, i) => {

            parent.innerHTML += ` 
                <li class="promo__interactive-item"> ${i + 1}. ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(list, movieDB.movies)
            });
        });
    }
    createMovieList(list, movieDB.movies)
});







