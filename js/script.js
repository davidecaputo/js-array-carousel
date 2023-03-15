/*
            <div class="slide active">
                <img src="./img/01.webp" alt="spiderman">
            </div>
            <div class="slide">
                <img src="./img/02.webp" alt="Ratchet & Clank">
            </div>
            <div class="slide">
                <img src="./img/03.webp" alt="Fortnite">
            </div>
            <div class="slide">
                <img src="./img/04.webp" alt="Gatto">
            </div>
            <div class="slide">
                <img src="./img/05.webp" alt="Avengers" class="avengers">
            </div>
*/

const boxSlide = document.querySelector('.box-slide');

const images = [
    'src="./img/01.webp" alt="spiderman"',
    'src="./img/02.webp" alt="Ratchet & Clank"',
    'src="./img/03.webp" alt="Fortnite"',
    'src="./img/04.webp" alt="Gatto"',
    'src="./img/05.webp" alt="Avengers" class="avengers"'
];
console.log(images);

let slideIndex = 0;
let slides = '';
for(i = 0; i < images.length; i++){
    slides += `
        <div class="slide">
            <img ${images[i]}>
        </div>
    `
}
console.log(slides);
boxSlide.innerHTML += slides;
document.querySelectorAll('.slide')[slideIndex].classList.add('active');

const up = document.querySelector('.up');
const down = document.querySelector('.down');

up.addEventListener('click', goUp);

function goUp(){
    document.querySelectorAll('.slide')[slideIndex].classList.remove('active');
    if(slideIndex === images.length - 1){
        slideIndex = 0;
    } else {
        slideIndex++;
    }
    document.querySelectorAll('.slide')[slideIndex].classList.add('active');
}

down.addEventListener('click', goDown);

function goDown(){
    document.querySelectorAll('.slide')[slideIndex].classList.remove('active');
    if(slideIndex === 0){
        slideIndex = images.length - 1;
    } else {
        slideIndex--;
    }
    document.querySelectorAll('.slide')[slideIndex].classList.add('active');
}