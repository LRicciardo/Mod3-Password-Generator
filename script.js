// generate Password button
var generateBtn = document.querySelector("#generate");

// password criteria variables set with default values
var passwordCriteria = {
  pwLength: 8,
  upperCaseFlag: true,
  numericFlag: true,
  specialCharFlag: true,
};
var availableChars = [];

// >>>>>>>>>>>>>>>  program flow
// getUserCriteria();
// buildCharSet();
// generatePassword();
// writePassword();

// console.log('var availableChars =>>' + availableChars );
// console.log('var availableChars typeof =>>' + typeof availableChars);
// console.log('var availableChars length =>>' + availableChars.length);
// console.log('var availableChars[1] =>>' + availableChars[1]);
// generatePassword();
// console.log('var newPassword =>>' + newPassword);

//  This will query user for Password Criteria
function getUserCriteria() {
  console.log('inside getUserCriteria function ==>')
  var lengthMsg = 'How many characters should the password be? ';
  lengthMsg += 'Enter a number from 8 to 128. (Default is 8.)';
  
  const yesNoMsg = 'Enter "Y" for Yes or "N" for No. (Default is Yes)';
  const upperMsg = 'Do you want Uppercase characters? ' + yesNoMsg;
  const numericMsg = 'Do you want Numeric characters? ' + yesNoMsg;
  const specialMsg = 'Do you want Special characters? ' + yesNoMsg;
  
  // password length user prompt -- If invalid answer, set default is 8
  var promptAnswer = prompt(lengthMsg);
  if (promptAnswer >= 8 &&
    promptAnswer <= 128) {
      passwordCriteria.pwLength = promptAnswer;
    } else {
      passwordCriteria.pwLength = 8;
    }; 
    
    // Uppercase Message user prompt. If invalid answer, default is true
    var charMsg = 'Uppercase characters? ';
    promptAnswer = prompt('Do you want ' + charMsg + yesNoMsg);
    if (promptAnswer == 'n' ||
    promptAnswer == 'no') {
      passwordCriteria.upperCaseFlag = false;
    } else {
      passwordCriteria.upperCaseFlag = true;
    }; 
    
    // Numeric Message user prompt. If invalid answer, default is true
    var charMsg = 'Numeric characters? ';
    promptAnswer = prompt('Do you want ' + charMsg + yesNoMsg);
    if (promptAnswer == 'n' ||
    promptAnswer == 'no') {
      passwordCriteria.numericFlag = false;
    } else {
      passwordCriteria.numericFlag = true;
    }; 
    
    // Scpecial character Message user prompt. If invalid answer, default is true
    var charMsg = 'Special characters? ';
    promptAnswer = prompt('Do you want ' + charMsg + yesNoMsg);
    if (promptAnswer == 'n' ||
    promptAnswer == 'no') {
      passwordCriteria.specialCharFlag = false;
    } else {
      passwordCriteria.specialCharFlag = true;
    }; 
    console.log('var passwordCriteria =>>');
    console.table( passwordCriteria );
    return;
  }
  
  function buildCharSet () {
    console.log('inside buildCharSet function ==>')
    const alphaChars = 'abcdefghijklmnopqrstuvwxyz';
    const numericChars = '0123456789';
    const specialChars = '?!#$%@&';
    // default character set is lower characters.
    var availableString = alphaChars;
    
    if (passwordCriteria.upperCaseFlag) {
      availableString += alphaChars.toUpperCase();
    };
    if (passwordCriteria.numericFlag) {
      availableString += numericChars;
    };
    if (passwordCriteria.specialCharFlag) {
      availableString += specialChars;
    };
    // make an array
    availableChars = availableString.split('');
    console.log('var availableChars =>>' + availableChars);
    return;
  };
  
  // build the password from available characters
  function generatePassword() {
    console.log('inside generatePassword function ==>')
    var newPassword = '';
    var i = 0
    while (i < passwordCriteria.pwLength) {
      newPassword += availableChars[Math.floor(Math.random() * availableChars.length)];
      i++;
    };
    console.log('var newPassword =>>' + newPassword);
    return newPassword;
  }
  
  // Write password to the #password input
  // This in the main progran flow 
  function writePassword() {
    console.log('inside write function ==>')
    getUserCriteria();
    buildCharSet();
    var password = generatePassword();
    console.log('var password =>>' + password);
    var passwordText = document.querySelector("#password");
    
  passwordText.value = password;
}
console.log(">>>> This is before the event listener -- Let's Begin!")

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
