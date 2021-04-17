"use strict";

const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click', function() {
    const newColor = makeRandColor(); 
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})


//need to test this to make sure it works 
const makeRandColor = function () {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    if (r < 230 && g < 230 && b < 230) {
        // let r = 255; 
        // let g = 255;
        // let b = 255;
        h1.style.color = "white";
    } else if (r < 50 && g < 50 && b < 50) {
        // let r = 0;
        // let g = 0;
        // let b = 0;
        h1.style.color = "black";
    }
    return `rgb(${r}, ${g}, ${b})`
}


