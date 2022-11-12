'use strict';
/*
const box = document.getElementById('box'); 
console.log(box);

const btns = document.getElementsByTagName('button');
console.log(btns[0]);
const circle = document.getElementsByClassName('circle')
console.log(circle);

const hearts = document.querySelectorAll('.heart');

hearts.forEach( item => {
    console.log(hearts);
});

const heart = document.querySelector('.heart');
console.log(heart);
*/
const hello = document.querySelector('.hello');
let newHello = document.createElement('attachment');
newHello.className = "attachment";
hello.append(newHello);
console.log(hello.innerHTML);
