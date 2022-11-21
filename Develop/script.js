
// Assignment code here
function generatePassword(){

  var lowerCaseLetters = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] ;
  var numbers =['0','1','2','3','4','5','6','7','8','9'];
  var specialCharacters = [
    '@','%','+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.',
  ];
  var wantedCharacters = [];
  
  var passwordLength = parseInt(prompt("How long you want password to be ?"), 10);

  if ( Number.isNaN(passwordLength)){
    alert("It's not a number, password length should be a number");
    return ;
  }
  if (passwordLength < 8 ){
    alert("Password should be mimimum 8 character length");
    return ;
  }
  if (passwordLength > 128){
    alert("Password should not be more than 128 character length");
    return ;
  }
  

  
  var hasLowercaseletters = confirm("Will the password have lowercase letters");
  var hasUppercaseletters = confirm("Will the password have Uppercase letters");
  var hasSpecialcharacters = confirm("Will the password have special characters");
  var hasNumbers = confirm("Will the password have numbers");

  if (hasLowercaseletters === false && hasUppercaseletters === false && hasSpecialcharacters === false && hasNumbers === false){
    alert ("Password must contain aleast combination of the lower , upper & special characters") ;
    return ;
  }
  
  if(hasLowercaseletters){
     wantedCharacters.concat(lowerCaseLetters);
  }
  if(hasUppercaseletters){
    wantedCharacters.concat(upperCaseLetters);
 }
 if(hasNumbers){
  wantedCharacters.concat(numbers);
}
if(hasSpecialcharacters){
  wantedCharacters.concat(specialCharacters);
}
 for ( var i =0 ; i <= passwordLength ; i ++){
   var randomNumber = Math.floor( Math.random() * wantedCharacters )
 }

}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
