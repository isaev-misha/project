'use strict';
// закончил на 24:40 минуте
document.addEventListener('DOMContentLoaded', () =>{


    const addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type=checkbox]'),
          movieList = document.querySelector('.promo__interactive-list'),
          adv = document.querySelectorAll('.promo__adv img'),
          deleteMovie = document.querySelector('.delete');

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
        let newFilm = addInput.value;
        const favorite = checkbox.checked;
        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0 , 22)}...`;
            }
            //const newFilm = newFilm.slice(0,20);
            movieDB.movies.push(newFilm);
            
            if (!!favorite) {
                console.log('добавляем любимый фильм');
            }

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

   

    

    function createMovieList (films, parent) {
        parent.innerHTML = "";
        sortArr(films);
        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item"> ${i+1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        
        });
        document.querySelectorAll('.delete').forEach((btn, i) =>{
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(films, parent);
            })
        });
    };


//  console.log(deleteMovie);
//    deleteMovie.addEventListener('mouseover', (event) => {
//        console.timeLog(event);
//   });
        
/*
    checkbox.addEventListener('click', (e) =>{
        // console.log('добавляем любимый фильм');
        if (e.target.checked == true) {
        console.log('добавляем любимый фильм');
        }
    });
  */      

    makeChanges();
    deleteAdv(adv);
    createMovieList(movieDB.movies, movieList);




});

