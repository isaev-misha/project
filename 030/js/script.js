'use strict';
/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)




2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

//const provoAdv = document.querySelector('.promo__adv');
const provoAdv = document.getElementsByClassName('promo__adv')
//provoAdv[0].style.display = 'none';
provoAdv[0].style.visibility = 'hidden';
//console.log(provoAdv);

//Задани 2
const promoGenre = document.querySelector('.promo__genre');

//promoGenre.innerHTML = 'Драмма';
promoGenre.textContent = 'Драма';

//Задание 3
const promoBg = document.querySelector('.promo__bg');
promoBg.style.backgroundImage = 'url("img/bg.jpg")';
//console.log(promoBg);

//Задание 4

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
/*
const promoInteractive = document.querySelectorAll('.promo__interactive-item');
let i = 0;
promoInteractive.forEach (item => {
    //console.log(movieDB.movies[item]);
    item.textContent = movieDB.movies[i];
    i++;
})
*/

const promoInteractivelist = document.querySelector('.promo__interactive-list');
promoInteractivelist.innerHTML = "";

movieDB.movies.sort();
console.log(movieDB.movies);
movieDB.movies.forEach((film, i) => {
    promoInteractivelist.innerHTML += `
        <li class="promo__interactive-item"> ${i+1} ${film}
            <div class="delete"></div>
        </li>
    `;

});



//const promoInteractive = document.querySelectorAll('.promo__interactive-item');
//promoInteractivelist.remove();
//document.querySelector('.promo__interactive-title').append('<li class="promo__interactive-item">МОРЖ<div class="delete"></div></li>')






