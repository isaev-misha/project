"use sctrict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?','');
            while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
                personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?','');
        }       
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько оцените его?', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    sjowMyDB: function(hidden) {
        if (!hidden) {
            console.log("выводим объект");
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i=1; i< 4; i++) {
            personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`,'');
            while(personalMovieDB.genres[i - 1] == '' || personalMovieDB.genres[i - 1] == null || isNaN(personalMovieDB.genres[i - 1])) {
                personalMovieDB.genres[i - 1]  = prompt(`Ваш любимый жанр под номером ${i}`,'');
            }                 
        }
        personalMovieDB.genres.forEach(function(item, y, arr) {
            console.log(`Любимый жанр # ${y} - это ${arr}`);
        });
        //console.log("genres = "+personalMovieDB.genres);
    },
    toggleVisiblemyBD: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};

//personalMovieDB.writeYourGenres();