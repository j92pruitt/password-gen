// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// `generatePassword` function is called by `writePassword`. Returns `password` a random string based on user input criteria.
function generatePassword(){
// Create arrays containing all possible symbols, letters, and numbers for use in password.

  var lowercaseArray = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" 
  ];

  var uppercaseArray = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
  ];

  var numberArray = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
  ]

  var specialCharArray = [
    " ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"
  ]

// PROMPT user for `passwordLength`.
  // Validate that provided value is a number between 8 and 128. If not then repromt.

  passwordLength = prompt("Please enter desired password length. (Between 8 and 128)")

  console.log(passwordLength); //check to see if passwordength is being stored correctly.

// CONFIRM if user wants to have lowercase letters. If so add them to `char-array` and add 1 random lowercase letter to `password`

// CONFIRM if user wants to have uppercase letters. If so add them to `char-array` and add 1 random uppercase letter to `password`

// CONFIRM if user wants to have numbers. If so add them to `char-array` and add 1 random number to `password`

// CONFIRM if user wants to have special characters. If so add them to `char-array` and add 1 random special character to `password`

// Continue to add random characters from `char-array` to `password` UNTIL `password.length` is equal to the user provided `passwordLength`.

// RETURN `password`
  return "Password"
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
