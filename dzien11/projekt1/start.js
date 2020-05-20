// 1. pobieramy potrzebne elementy z DOM

const btnIncrease = document.querySelector('.bigger');
const btnDecrease = document.querySelector('.smaller');
const text = document.querySelector('p');

//1b. określamy potrzebne dane

let textSize = 20; //początkowy fz dla p

//1c. parametry początkowe
text.style.fontSize = textSize + "px";

// 3. określenie akcji - napisanie funkcji

function textIncrease() {
    // console.log('klik')
    textSize++;
    text.style.fontSize = textSize + "px";

}

function textDecrease() {
    textSize--;
    text.style.fontSize = textSize + "px";
}

// 2. ustawienie nasłuchiwania na przyciskach na klik

btnIncrease.addEventListener('click', textIncrease);
btnDecrease.addEventListener('click', textDecrease);