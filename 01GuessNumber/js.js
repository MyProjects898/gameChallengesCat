// // EPIC Challenge
// // High/Low Game
// // Create an HTML page and link your JavaScript file
// // More information about linking HTML to JavaScript here
// As a user, I see a prompt or input where I can guess a number between 1 and 100 (both inclusive)
// As a user, when I see if my guess is too high or too low
// As a user, if I guess the number correctly I am notified that I won
// STRETCH: As a user, if I have not guessed the correct number in seven tries I see a losing message

var letsTry = prompt ("i am thinking of a number from 1 to 100... Can you guess it?");
var letters = new RegExp("^[a-zA-Z]+$");
var numberToGues = Math.floor(Math.random() * 100) +1;

if (letsTry === numberToGues){
    alert ("how did you do it? You are correct")
} else if(letsTry == " " || letsTry == null){
    alert ("what is wrong with you? no this aint right!!!")
} else{
    alert ("the number was" + ' ' + numberToGues)
}




// let guess = (numberGuess) =>{
//   for (i=0; i<numberGuess.length; i++){
//     if (numberGuess <= 100){
//       return alert ("how did you do it? You are correct")
//     } else if (numberGuess == "" || numberGuess == null || numberGuess == "a,b,c,d,e,f,g,h,i"){
//       return alert ("what is wrong with you? no this aint right!!!")
//     }
//   }
//   return numberGuess
// }
