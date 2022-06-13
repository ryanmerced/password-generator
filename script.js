var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = [" !#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("")];
var lowercase = ["abcdefghijklmnopqrstuvwxyz".split("")];
var uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")];

function generatePassword() {
  //prompt the user for their password lenght and store into a variable
  //validate the password length and make sure it is = to 8 and 128 (if statement)
  //prompt the user if they want special characters and store into a variable

};

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
