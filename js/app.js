/* app.js */

// qwerty variable
const qwerty = $('#qwerty');
// phrase variable
const phrase = $('#phrase');
// missed counter
let missed = 0;
// starter overlay variable
const start_overlay = $('#overlay');
// Start Game button variable
const btn__reset = $('.btn__reset');
//
const scoreboard_ol = $("ol");
// Phrase array
const phrases = [
    'i am a developer',
    'deez nutz',
    'i am iron man',
    'panda panda panda',
    'honeymoon avenue'
];

let phraseArray = '';

/*
Clicking the btn_reset will trigger the game to start.
The start overlay will be hidden, all of the
 */
btn__reset.on("click", () => {

    start_overlay.hide();

    for (let i = 0; i < $('button').length; i++){
        $('button').eq(i).removeAttr("disabled");
        $('button').eq(i).removeClass("chosen");
    }

    for (let i = 0; i < $('.tries').length; i++){
        $('.tries').show();
    }

    phrase.empty();

    phraseArray = getRandomPhraseAsArray(phrases);

    addPhraseToDisplay(phraseArray);

    missed = 0;

});


/*
 Add event listener to the container for the keyboard
 */
qwerty.on('click', (event) => {
    if (event.target.tagName == "BUTTON") {
        event.target.className = "chosen";
        event.target.setAttribute("disabled", "true");

        let letterFound = checkLetter(event.target);

        if (letterFound == null) {

            scoreboard_ol.children().eq(missed).hide();

            missed++;
        }

        checkWin();

    }
});



/*
 Given an array, this function will return a random value from that array.
 The random function returns a random float number from 0 to 1 (not including 1)
 and the floor function rounds the number down to an integer.
 By writing the function this way, you are guaranteed to return a random integer value
 that will fall in the range of the length of the input array.
 */
function getRandomPhraseAsArray(arr){
    let random = Math.floor(Math.random()*arr.length)
    
    let random_arr = arr[random].split('');

    return random_arr;
}

/*
 Map a random phrase from the "phrases array" to the display.
 If the character you're currently looking at is ' ', add a new
 <li> child to the phrase element with className = "space".
 Otherwise, add a new <li> child to the phrase element with
 className="letter". Both also add the current arr index as a text value.
 */
function addPhraseToDisplay(arr){

    for(let i=0; i<arr.length; i++){

        if (arr[i] === ' '){
            phrase.first().append($('<li></li>')
                .addClass("space")
                .text(arr[i]));
        } else {
            phrase.first().append($('<li></li>')
                .addClass("letter")
                .text(arr[i]));
        }

    }

}

/*

 */
function checkLetter(qwertyButton){
    // init empty string to store the input letter
    // it will get the value of the phrase letter if and only if the clicked letter is in the phrase_ul
    let letter_tracker = '';
    for (let i = 0; i < phrase.first().find('.letter').length ; i++){
        if (qwertyButton.textContent == phrase.find('.letter')[i].textContent) {
            phrase.find('.letter')[i].className = "show";
            if (letter_tracker == ''){
                letter_tracker = qwertyButton.textContent;
            }
        }
    }

    if (letter_tracker != ''){
        return qwertyButton.textContent;
    }
    else {
        return null;
    }
}


function checkWin(){
    console.log("checkWin triggered.");
    if(document.getElementsByClassName('show').length == document.getElementsByClassName('letter')){
        start_overlay.className = ".win";
        $('.title').textContent = "CONGRATULATIONS, YOU'VE!";
        btn__reset.textContent = 'WANNA PLAY AGAIN?';
        start_overlay.show();
    }

    if(missed > 4){
        start_overlay.className = ".lose";
        $('.title').textContent = "SORRY, YOU'VE LOST.";
        btn__reset.textContent = 'WANNA PLAY AGAIN?';
        start_overlay.show();
    }
}
