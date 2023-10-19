
var generateBtn = document.querySelector("#generate");


function generatePassword(){

var passwordLength;
while (true) {
passwordLength = parseInt(prompt("Please enter the password length between 8 and 128"));
if (passwordLength >= 8 && passwordLength <=128) {
  break;
} else {
  alert("Please enter a valid length number");
}
}

var characters = "";
var useSpecialCharacters = confirm("Do You want special Characters too?");
var useLower = confirm("Do You want lower letters too?");
var useUpper = confirm("Do You want upper letters too?");
var useNumbers = confirm("Do You want numbers too?");

if (useSpecialCharacters) characters += "!@#$%^&*()_+-=,.<>?";
if (useLower) characters += "abcdefghijklmnopqrstuvwxyz";
if (useUpper) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
if (useNumbers) characters += "0123456789";

var password = "";

for (var i = 0; i < passwordLength; i++) {
  var randomIndex = Math.floor(Math.random() * characters.length);
  password += characters[randomIndex];
}

return password;

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
