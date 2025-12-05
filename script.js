//---------------------------------------//
//---------VARIABLES AND CLASSES---------//

const majorSize = 170;       //deck size for major arcana

let majorDeck = [];

    
class arcaneMajor {             //arcane major card
    constructor(index) {
        this.index = index+1;         //storage index in sorted deck. Value is same as index 
    }
}    

//--------------------------------//
//---------INITIALIZATION---------//


function createMajorDeck(){
    for(i=0; i<majorSize; i++){
        let newCard = new arcaneMajor(i);
        majorDeck.push(newCard);
    }
}


createMajorDeck();


//-------------------------//
//---------SHUFFLE---------//

let majorCurrent = majorDeck.slice();

//Fisher Yates Method to shuffle chosen deck
function shuffleDeck(deckToShuffle){
    for(i=deckToShuffle.length-1; i>0; i--) {
        j = Math.floor(Math.random()*i);
        k = deckToShuffle[i];
        deckToShuffle[i] = deckToShuffle[j];
        deckToShuffle[j] = k;
    }
}

function init() {
    shuffleDeck(majorCurrent);
}

init();

//----------------------//
//---------DRAW---------//

let majorCardIndex = 0;

//draw a card when button is pressed
function drawCard(currentDeck, deckType) {
    
    if(deckType === 'major'){
        document.getElementById('major_deck').src = "img/major/"+majorCurrent[majorCardIndex].index+".jpg";
        if (majorCardIndex > majorSize-2) {      //shuffle if empty
            shuffleDeck(majorCurrent);
            majorCardIndex = 0;
        }    
        else {
            hideBtn('shuffle_major');
        }
        majorCardIndex++;   
    }
}


document.getElementById('draw_major').addEventListener('click', function(){
    drawCard(majorCurrent, 'major');
});


//-------------------------//
//---------BUTTONS---------//

function showBtn(buttonID) {
    document.getElementById(buttonID).style.display = 'block';
}

function hideBtn(buttonID) {
    document.getElementById(buttonID).style.display = 'none';
}

document.getElementById('shuffle_major').addEventListener('click', function() {
    shuffleDeck(majorCurrent);
    majorCardIndex = 0;
    hideBtn('shuffle_major');
    document.getElementById('major_deck').src = "img/back.jpg";
});


//console.log(majorDeck);
//console.log(majorCurrent);

//console.log(gameStarting);

