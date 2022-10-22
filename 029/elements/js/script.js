'use strict';

const box = document.getElementById('box'); 
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle')
const hearts = document.querySelectorAll('.heart');
const oneHeart = document.querySelector('.heart');
const wrapper = document.querySelector('.wrapper');
box.style.backgroundColor = 'blue';
box.style.width = '500px';
btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');

div.classList.add('black');
//document.body.append(div);
wrapper.append(div);
//hearts.after(div);
div.innerHTML = '<h1>hello world</h1>';