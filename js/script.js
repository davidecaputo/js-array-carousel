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

const immagini = [
    'src="./img/01.webp" alt="spiderman"',
    'src="./img/02.webp" alt="Ratchet & Clank"',
    'src="./img/03.webp" alt="Fortnite"',
    'src="./img/04.webp" alt="Gatto"',
    'src="./img/05.webp" alt="Avengers" class="avengers"'
];
console.log(immagini);

let slides = '';
for(i = 0; i < immagini.length; i++){
    slides += `
        <div class="slide">
            <img ${immagini[i]}>
        </div>
    `
}
console.log(slides);