// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordCharArray;
var password;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// `generatePassword` function is called by `writePassword`. Returns `password` a random string based on user input criteria.
function generatePassword() {
// Create arrays containing all possible symbols, letters, and numbers for use in password.
  passwordCharArray = [];

  password = "";

  var lowercaseArray = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" 
  ];

  var uppercaseArray = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
  ];

  var numberArray = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
  ];

  var specialCharArray = [
    " ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"
  ];

// PROMPT user for `passwordLength`.
  // Validate that provided value is a number between 8 and 128. If not then reprompt.

  // Boolean for logging whether a given password length is valid. Starts false.
  var validationBool = false;

  // Will loop unitl `validationBool` is true.
  while (!validationBool){
    // Prompt user for password and store response. Response will be either an int or NaN.
    passwordLength = lengthPrompt();
    // Check to see if password length is valid. Valid means it is an int and between 8 and 128 inclusive. If password is valid set `validationBool` to true.
    if (passwordLength !== NaN && passwordLength > 7 && passwordLength < 129) {
      validationBool = true
    }
  }

// Check which charcters the user wants to include in the password and add those characters to the pool.
  confirmAndAdd("lowercase letters", lowercaseArray);
  confirmAndAdd("uppercase letters", uppercaseArray);
  confirmAndAdd("numbers", numberArray);
  confirmAndAdd("special characters", specialCharArray);

// Continue to add random characters from `char-array` to `password` UNTIL `password.length` is equal to the user provided `passwordLength`.
  while (password.length < passwordLength) {
    password = password + randomChoice(passwordCharArray)
  }
// RETURN `password`
  return password
}

// Prompts a user for a password length and returns an integer or NaN if the input is not an integer.
function lengthPrompt() {
  userData = prompt("Please enter desired password length. (Between 8 and 128)")
  return parseInt(userData, 10)
}

// Returns a random element from the given array.
function randomChoice(stringArrray) {
  return stringArrray[Math.floor(Math.random() * stringArrray.length)];
}

// Confirms with user if they would like to include characters, if yes adds the given array to `passwordCharArray` and adds a random character to the password to guarantee at least 1 of each of the desired character types appears.
function confirmAndAdd(arrayName, stringArrray){
  if (confirm("Include " + arrayName + "? (OK = Yes    Cancel = No)")) {
    password = password + randomChoice(stringArrray);
    passwordCharArray = passwordCharArray.concat(stringArrray);
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
