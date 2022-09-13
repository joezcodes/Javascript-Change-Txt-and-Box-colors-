let btn1 = document.getElementById('btn');
let box1 = document.getElementById('box1');
let color1 = 'green';
let color2 = 'white';

// change color of box and text
function colorChg() {
    box1.style.color = color2;
    box1.style.background = color1;

}

// run function when button is clicked
btn1.addEventListener('click', () => {
    colorChg();
})