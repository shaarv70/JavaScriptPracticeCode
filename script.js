// script.js

// Prompt the user to enter a number
var num = prompt("Enter any number:");

// Display the result on the webpage or log it to the console
if (num !== null) { // If the user didn't cancel the prompt
    document.write("You entered: " + num);
    console.log("You entered: " + num);
} else {
    document.write("No input was provided.");
    console.log("No input was provided.");
}
