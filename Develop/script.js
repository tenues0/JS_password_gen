// Global variables

var specials = "!@#$%^&*()=+"
var numbers = "0123456789"
var lowers = "qwertyuiopasdfghjklzxcvbnm"
var uppers = "QWERTYUIOPASDFGHJKLZXCVBNM"

var passbase = ""
var theChosenOne = "" // soon to be new password

// Assignment Code

/*
use alert(), confirm(), and prompt()
think about data types

Q's for person who wants the password:
1) password length?
2) special characters?
3) numeric characters?
4) lowercase characters?
5) uppercase characters?

function generates password...
*/

var generateBtn = document.querySelector("#generate");
console.log(passbase)
var generatePassword = function () {
  // goal of function is to return password
  var passLength = prompt("password length? insert shrug");
  console.log(passbase)
  var wantnumbers = confirm("numeric characters? insert shrug");
  if (wantnumbers) {
    passbase += numbers;
  }

  var specChars = confirm("special characters?");
  if (specChars) {
    passbase += specials;
  }

  var lowercase = confirm("lowercase characters?");
  if (lowercase) {
    passbase += lowers;
  }

  var uppercase = confirm("uppercase characters?");
  if (uppercase) {
    passbase += uppers;
  }

  for (let i = 0; i < passLength; i++) {
    theChosenOne += passbase.charAt(Math.floor(Math.random()*passbase.length));
    
  }
  return theChosenOne;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
