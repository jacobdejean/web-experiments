let card1_regions = [ document.getElementById("card1_top_left"), document.getElementById("card1_top_right"), document.getElementById("card1_bottom_left"), document.getElementById("card1_bottom_right") ];
let card2_regions = [ document.getElementById("card2_top_left"), document.getElementById("card2_top_right"), document.getElementById("card2_bottom_left"), document.getElementById("card2_bottom_right") ];


for(let i = 0; i < 4; i++) {
    card1_regions[i].addEventListener('mouseenter', handleMouseEnter);
    card1_regions[i].addEventListener('mouseleave', handleMouseLeave);

    card2_regions[i].addEventListener('mouseenter', handleMouseEnter);
    card2_regions[i].addEventListener('mouseleave', handleMouseLeave);
}

function handleMouseEnter(evt) {
    let card = evt.target.parentElement.parentElement;
    let region = evt.target.getAttribute('data-region');
    let transform = 'perspective(800px) '
    let rX, rY, rZ, deg;

    deg = 3;
    rZ = 0;

    console.log(region);

    if(region.includes('top'))
        rX = 1;

    if(region.includes('bottom'))
        rX = -1;

    if(region.includes('left'))
        rY = -1;

    if(region.includes('right'))
        rY = 1;

    transform += 'rotate3d(' + rX + ', ' + rY + ', ' + rZ + ', ' + deg + 'deg)';

    card.style.transform = transform;
}

function handleMouseLeave(evt) {
    let card = evt.target.parentElement.parentElement;
    card.style.transform = 'perspective(800px) translateZ(0px) rotate3d(1, 1, 0, 0deg)';
}

let body = document.getElementById('body');
let darkModeButton = document.getElementById('dark-mode-button');
let darkMode = false;

darkModeButton.addEventListener('click', toggleTheme);

function toggleTheme() {
    darkMode = !darkMode;

    body.style.setProperty('--m-text-color', darkMode ? 'white' : 'black');
    body.style.setProperty('--m-background-color', darkMode ? 'black' : 'white');

    darkModeButton.style.filter = 'invert(' + (darkMode ? 100 : 0 )+ '%)';
}