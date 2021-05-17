// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// `generatePassword` function is called by `writePassword`. Returns `password` a random string based on user input criteria.
function generatePassword() {
// Create arrays containing all possible symbols, letters, and numbers for use in password.
  var passwordCharArray = [];

  var password = "";

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
  // Validate that provided value is a number between 8 and 128. If not then repromt.

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

// CONFIRM if user wants to have lowercase letters. If so add them to `char-array` and add 1 random lowercase letter to `password`
  if (confirm("Include lowercase letters?. (OK = Yes    Cancel = No)")) {
    password = password + randomChoice(lowercaseArray);
    passwordCharArray = passwordCharArray.concat(lowercaseArray);
    console.log(passwordCharArray);
  } else{
    console.log("No.")
  }
// CONFIRM if user wants to have uppercase letters. If so add them to `char-array` and add 1 random uppercase letter to `password`
  if (confirm("Include uppercase letters?. (OK = Yes    Cancel = No)")) {
    password = password + randomChoice(uppercaseArray);
    passwordCharArray = passwordCharArray.concat(uppercaseArray);
    console.log(passwordCharArray);
  } else{
    console.log("No.")
  }
// CONFIRM if user wants to have numbers. If so add them to `char-array` and add 1 random number to `password`
  if (confirm("Include numbers?. (OK = Yes    Cancel = No)")) {
    password = password + randomChoice(numberArray);
    passwordCharArray = passwordCharArray.concat(numberArray);
    console.log(passwordCharArray);
  } else{
    console.log("No.")
  }
// CONFIRM if user wants to have special characters. If so add them to `char-array` and add 1 random special character to `password`
  if (confirm("Include special characters?. (OK = Yes    Cancel = No)")) {
    password = password + randomChoice(specialCharArray);
    passwordCharArray = passwordCharArray.concat(specialCharArray);
    console.log(passwordCharArray);
  } else{
    console.log("No.")
  }
// Continue to add random characters from `char-array` to `password` UNTIL `password.length` is equal to the user provided `passwordLength`.

// RETURN `password`
  return password
}

function lengthPrompt() {
  userData = prompt("Please enter desired password length. (Between 8 and 128)")
  return parseInt(userData, 10)
}

function randomChoice(stringArrray) {
  return stringArrray[Math.floor(Math.random() * stringArrray.length)];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
