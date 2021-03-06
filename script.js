// Global variables

var specials = "!@#$%^&*()=+"
var numbers = "0123456789"
var lowers = "qwertyuiopasdfghjklzxcvbnm"
var uppers = "QWERTYUIOPASDFGHJKLZXCVBNM"

var passbase = ""
var theChosenOne = "" // soon to be new password

// Assignment Code

/*

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
  var passLength = prompt("Please enter a number between 8 and 128.");

  if (passLength > 7 && passLength < 129) {
    var wantnumbers = confirm("numeric characters? ¯\\_(ツ)_/¯");
    // If user wants numbers in their password, the IF statement below will run.
    if (wantnumbers) {
      passbase += numbers;
    }
  
    var specChars = confirm("special characters? ¯\\_(ツ)_/¯");
    // If user wants special characters in their password, the IF statement below will run.
    if (specChars) {
      passbase += specials;
    }
  
    var lowercase = confirm("lowercase characters? ¯\\_(ツ)_/¯");
    // If user wants lowercase letters in their password, the IF statement below will run.
    if (lowercase) {
      passbase += lowers;
    }
  
    var uppercase = confirm("uppercase characters? ¯\\_(ツ)_/¯");
    // If user wants uppercase characters in their password, the IF statement below will run.
    if (uppercase) {
      passbase += uppers;
    }
  
    for (let i = 0; i < passLength; i++) {
      theChosenOne += passbase.charAt(Math.floor(Math.random()*passbase.length));
      
    }
    return theChosenOne;
  } else {
    alert("You did not enter a pasword length between 8 and 128.") 
  }
 
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
