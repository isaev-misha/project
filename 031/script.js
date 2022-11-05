const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');


const deleteElemet = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
}

//btn.addEventListener('click', deleteElemet);
//overlay.addEventListener('click', deleteElemet);

btns.forEach(btn =>{
    btn.addEventListener('click', deleteElemet, {once: true});
})


const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event.target);
});