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
const boxPreview = document.querySelector('.box-preview');

const images = [
    'src="./img/01.webp" alt="spiderman"',
    'src="./img/02.webp" alt="Ratchet & Clank"',
    'src="./img/03.webp" alt="Fortnite"',
    'src="./img/04.webp" alt="Gatto"',
    'src="./img/05.webp" alt="Avengers" class="avengers"'
];

let slideIndex = 0;
let slides = '';
let slidesPreview = '';
for(i = 0; i < images.length; i++){
    slides += `
        <div class="slide">
            <img ${images[i]}>
        </div>
    `
    slidesPreview += `
        <div class="preview">
            <img ${images[i]}>
        </div>
    `
}
boxSlide.innerHTML += slides;
boxPreview.innerHTML += slidesPreview;
document.querySelectorAll('.slide')[slideIndex].classList.add('active');
document.querySelectorAll('.preview')[slideIndex].classList.add('selected');

const up = document.querySelector('.up');
const down = document.querySelector('.down');

up.addEventListener('click', goUp);

function goUp(){
    document.querySelectorAll('.slide')[slideIndex].classList.remove('active');
    document.querySelectorAll('.preview')[slideIndex].classList.remove('selected');
    if(slideIndex === 0){
        slideIndex = images.length - 1;
    } else {
        slideIndex--;
    }
    document.querySelectorAll('.slide')[slideIndex].classList.add('active');
    document.querySelectorAll('.preview')[slideIndex].classList.add('selected');
}

down.addEventListener('click', goDown);

function goDown(){
    document.querySelectorAll('.slide')[slideIndex].classList.remove('active');
    document.querySelectorAll('.preview')[slideIndex].classList.remove('selected');
    if(slideIndex ===  images.length - 1){
        slideIndex = 0;
    } else {
        slideIndex++;
    }
    document.querySelectorAll('.slide')[slideIndex].classList.add('active');
    document.querySelectorAll('.preview')[slideIndex].classList.add('selected');
}

setInterval(goUp, 2000);