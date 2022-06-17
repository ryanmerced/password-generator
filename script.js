//prompt the user for their password lenght and store into a variable
//validate the password length and make sure it is = to 8 and 128 (if statement)
//prompt the user if they want special characters and store into a variable



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

//Start of Code
//character sets
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@","[","^", "_", "`", "{", "|", "}", "~"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function generatePassword() {
  var passwordLength = [128];
  var useNumbers;
  var useSymbols;
  var useLower; 
  var useUpper;
  var generatedPassword = "";
  
  passwordLength = window.prompt ("How long would you like your password to be?");

     if(passwordLength >= 8 && passwordLength <=128) {

  useSymbols = window.confirm ("Would you like to use any special characters?");

  useLower = window.confirm("Would you like to use any lower case letters?");

  useUpper = window.confirm("Would you like to use any upper case letters?");

  }

  for (var i = 0; i <= passwordLength; i++) {
    var useNumbers = Math.floor(Math.random() * numbers.length);
    password += numbers.concat(useNumbers +1);
   }

   for (var i = 0; i <= passwordLength; i++) {
    var useSymbols = Math.floor(Math.random() * specialCharacters.length);
    password += specialCharacters.concat(useSymbols, useSymbols +1);
   }

   for (var i = 0; i <= passwordLength; i++) {
    var useLower = Math.floor(Math.random() * lowercase.length);
    password += lowercase.concat(useLower, useLower +1);
   }

   for (var i = 0; i <= passwordLength; i++) {
    var useUpper = Math.floor(Math.random() * uppercase.length);
    password += uppercase.concat(useUpper, useUpper +1);
   }
      return generatedPassword;
   }
   
