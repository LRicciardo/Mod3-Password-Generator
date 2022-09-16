// generate Password button
var generateBtn = document.querySelector("#generate");

// password criteria variables set with default values
var passwordCriteria = {
  pwLength: 8,
  lowerCaseFlag: true,
  upperCaseFlag: true,
  numericFlag: true,
  specialCharFlag: true,
};
var availableChars = [];
var newPassword = [];

// buildCharSet();
console.log('var availableChars =>>' + availableChars );
console.log('var availableChars typeof =>>' + typeof availableChars);
console.log('var availableChars length =>>' + availableChars.length);
console.log('var availableChars[1] =>>' + availableChars[1]);
// generatePassword();
writePassword();
console.log('var newPassword =>>' + newPassword);

function buildCharSet (inputCriteria) {
    const alphaChars = 'abcdefghijklmnopqrstuvwxyz';
    const numericChars = '0123456789';
    const specialChars = '?!#$%@&';
    var availableString = '';

    // prompt for password criteria
let doSwitch = true; 
  do {
      passwordCriteria.pwlength = prompt("Please enter the length of the password? (default = 8)")
    if (passwordCriteria.pwlength != NaN &&
        passwordCriteria.pwlength >= 8 &&
        passwordCriteria.pwlength <= 128){
            doSwitch = false
        }
    }
    while (doSwitch); 

  if (passwordCriteria.lowerCaseFlag) {
    availableString += alphaChars;
  };
  if (passwordCriteria.upperCaseFlag) {
    availableString += alphaChars.toUpperCase();
  };
  if (passwordCriteria.numericFlag) {
    availableString += numericChars;
  // availableChars.push(numericChars.split(''));
  };
  if (passwordCriteria.specialCharFlag) {
    availableString += specialChars;
  // availableChars.push(specialChars.split(''));
  };
  availableChars = availableString.split('');
  return;
};

// Write password to the #password input
function writePassword() {
//   var password = generatePassword();
  var password = newPassword;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
console.log(' var passwordCriteria.pwLength ==>' + passwordCriteria.pwLength)
 function generatePassword() {
   /*  while loop code  to create password*/
   var i = 0
   while (i < passwordCriteria.pwLength) {
     newPassword += availableChars[Math.floor(Math.random() * availableChars.length)];
     i++;
    };
   return 
 }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", buildCharSet);

function randomIdx ()  {
  return Math.floor(Math.random() * availableChars.length);
};
