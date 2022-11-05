'use strict';

document.addEventListener('DOMContentLoaded', () =>{


    const addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type=checkbox]'),
          movieList = document.querySelector('.promo__interactive-list'),
          adv = document.querySelectorAll('.promo__adv img');

        const sortArr = (arr) => {
            arr.sort();
        };

    const movieDB = {
            movies: [
                "ISAEV Король",
                "Логан",
                "Лига справедливости",
                "Ла-ла лэнд",
                "Одержимость",
                "Скотт Пилигрим против..."
            ]
        };

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const newFilm = addInput.value;
        const favorite = checkbox.checked;
        if (newFilm) {
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, movieList);
        }
        event.target.reset();
    });

    //Удалеие рекламы
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
        
    }


    const makeChanges = () => {
            const promoGenre = document.querySelector('.promo__genre');
            //promoGenre.innerHTML = 'Драмма';
            promoGenre.textContent = 'Драма';

            //Задание 3
            const promoBg = document.querySelector('.promo__bg');
            promoBg.style.backgroundImage = 'url("img/bg.jpg")';
    }

   

    sortArr(movieDB.movies);

    function createMovieList (films, parent) {
        parent.innerHTML = "";
        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item"> ${i+1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        
        });
    };

    makeChanges();
    deleteAdv(adv);
    createMovieList(movieDB.movies, movieList);

});