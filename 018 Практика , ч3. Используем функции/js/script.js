"use strict";

let numberOfFilms;

function start(){
    numberOfFilms = +prompt('How many movies you have watched?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many movies you have watched?', '');
    }
}
start();



const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



function rememberMyFilms() {
    for(let i = 0; i < 2; i++){
        const a = prompt('Last film you have watched', ''),
              b = prompt('Rate the movie from 0 to 10', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('Done!');
        }else{
            console.log('error');
            i--;
        }
    }
}
rememberMyFilms();



function detectPersonalLevel (){
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
        console.log('Вы классический зритель');
    }else if(personalMovieDB.count > 30){
        console.log('Вы киноман');
    }else{
        console.log('Произошла ошибка');
    }
}
detectPersonalLevel();


//Первый вариант
// function showMyDB () {
//     if (personalMovieDB.privat == false) {
//         console.log(personalMovieDB);
//     }else{
//         console.log('Object is not defined');
//     }
// }
// showMyDB();

// Второй вариант
function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }else{
        console.log('Object is not defined');
    }
}
showMyDB(personalMovieDB.privat);




function writeYourGenres () {
    for(let i = 1; i <= 3; i++){
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres();


console.log(personalMovieDB.genres);


console.log(personalMovieDB);