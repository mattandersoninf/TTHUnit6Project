// app.js

// qwerty variable
const qwerty = document.querySelector('#qwerty');
// phrase variable
const phrase = document.querySelector('#phrase');
// missed counter
let missed = 0;
// starter overlay variable
const start_overlay = document.querySelector('.start');
// Start Game button variable
const btn__reset = document.querySelector('.btn__reset');
// Add the event listener to the Start Game button so that when it is clicked
// the start overlay will be hidden
btn__reset.addEventListener("click", start_overlay.className='hidden', false);

// map constant
const map = Array.prototype.map


// Phrase array
const phrases = [
    '',
    '',
    '',
    '',
    '',
];

// Given an array, this function will return a random value from that array
// The random funnction returns a random float number from 0 to 1 (not including 1)
// and the floor function rounds the number down to an integer.
// By writing the function this way, you are guaranteed to return a random integer value
// that will fall in the range of the length of the input array
// Then, use the map function to create an array of every letter from that phrase
function getRandomPhraseAsArray(arr){
    let random = Math.floor(Math.random()*arr.length)
    
    let random_arr = map.call(arr[random], eachLetter=>{
        return '${eachLetter}'
    })

    return random_arr;
};

// Map a random phrase from the "phrases array" to the display
function addPhraseToDisplay(arr){
    
}