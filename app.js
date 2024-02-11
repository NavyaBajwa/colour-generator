var container = document.querySelector('.container');
var colourCard = document.querySelector('.colour-card');
var btn = document.querySelector("button");
var hex = document.querySelector("span");


function getNewColour(){
    var symbols = '0123456789ABCDEF'
        /* to generate colours we need a code of length min 6 made 
        of a combinations of digits 0-9 and letters A-F */
    // to generate colour with combination //

    var colour = '#';

    for(var i = 0; i<6; i++){
        colour = colour + symbols[Math.floor(Math.random() * 16)];
    }
    //body
    document.body.style.background = colour;
    //colour-card
    colourCard.style.background = colour;

    hex.innerHTML = colour;
}

btn.addEventListener("click", getNewColour);

document.addEventListener("keydown", function(event) {
    if (event.keyCode == 13); {
        getNewColour();
    }
});

document.addEventListener("keydown", function(event) {
    if (event.keyCode == 32); {
        getNewColour();
    }
});