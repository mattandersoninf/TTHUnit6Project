// app.js

// qwerty variable
const qwerty = document.querySelector('#qwerty');
// phrase variable
const phrase = document.querySelector('#phrase');
// missed counter
let missed = 0;
// starter overlay variable
const start_overlay = document.querySelector('#overlay');
// Start Game button variable
const btn__reset = document.querySelector('.btn__reset');
// Add the event listener to the Start Game button so that when it is clicked
// the start overlay will be hidden
btn__reset.addEventListener("click", () => {
    start_overlay.style.display = 'none';
});

// map constant
const map = Array.prototype.map;

// All buttons on the web page keyboard
const qwertyButtons = document.getElementsByTagName('button');

for (let i = 0; i < qwertyButtons.length; i++){
    qwertyButtons[i].addEventListener('click', () => {
        qwertyButtons[i].classList.add("chosen");
        qwertyButtons[i].setAttribute("disabled","true");
        let letterFound = checkLetter(qwertyButtons[i]);
    });
}



// Phrase array
const phrases = [
    'i am a developer',
    'deez nutz',
    'i am iron man',
    'panda panda panda',
    'honeymoon avenue'
];

// Given an array, this function will return a random value from that array
// The random function returns a random float number from 0 to 1 (not including 1)
// and the floor function rounds the number down to an integer.
// By writing the function this way, you are guaranteed to return a random integer value
// that will fall in the range of the length of the input array
// Then, use the map function to create an array of every letter from that phrase
function getRandomPhraseAsArray(arr){
    let random = Math.floor(Math.random()*arr.length)
    
    let random_arr = arr[random].split('');

    return random_arr;
}

// Map a random phrase from the "phrases array" to the display
function addPhraseToDisplay(arr){

    for(let i=0; i<arr.length; i++){
        let temp_list_item = document.createElement("li");
        let temp_text_node = document.createTextNode(arr[i]);
        temp_list_item.appendChild(temp_text_node);
        if (arr[i] === ' '){
            temp_list_item.className = "space";
        } else {
            temp_list_item.className = "letter";
        }
        phrase.appendChild(temp_list_item);
    }

}


const phaseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phaseArray);


function checkLetter(qwertyButton){
    // ul that holds all of the letters in the hidden phrase
    let phrase_ul = document.getElementById("phrase");
    // init empty string to store the input letter
    // it will get the value of the phrase letter if and only if the clicked letter is in the phrase_ul
    let letter_tracker = '';
    for (let i = 0; i < phrase_ul.children.length ; i++){
        if (qwertyButton.textContent == phrase_ul.children[i].textContent) {
            phrase_ul.children[i].classList.add("show");
            if (letter_tracker == ''){
                letter_tracker = qwertyButton.textContent;
            }
        }
    }

    if (letter_tracker !== ''){
        return qwertyButton.textContent
    }
    else {
        return null;
    }
}


