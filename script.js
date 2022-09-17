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
var errorFlag = false;
var errorMsg = ''

// >>>>>>>>>>>>>>>  program flow
// >> generateBtn manipulates the HTML button with the id of generate
// getUserCriteria();
// buildCharSet();
// generatePassword();
// writePassword();

// writePassword gets called from the Event Listener then 
//      calls the other functions.

// future improvements: 
//    Improve UI (User Interface) adding a checkbox or list. Something to 
//        think about.

//  This will query user for Password Criteria
function getUserCriteria() {
  // console.log('inside getUserCriteria function ==>')
  var lengthMsg = 'How many characters should the password be? ';
      lengthMsg += 'Enter a number from 8 to 128. (Default is 8.)';
  const yesNoMsg = 'Enter "Y" for Yes or "N" for No. (Default is Yes)';
  
  // password length user prompt -- If invalid answer, set default is 8
  var promptAnswer = prompt(lengthMsg);
  if (promptAnswer >= 8 &&
    promptAnswer <= 128) {
      passwordCriteria.pwLength = promptAnswer;
  } else {
      passwordCriteria.pwLength = 8;
  }; 
  // Lowercase Message user prompt. If invalid answer, default is true
  var charMsg = 'Lowercase characters? ';
  promptAnswer = prompt('Do you want ' + charMsg + yesNoMsg);
  if (promptAnswer == 'n' ||
    promptAnswer == 'no') {
      passwordCriteria.lowerCaseFlag = false;
  } else {
      passwordCriteria.lowerCaseFlag = true;
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
    if (passwordCriteria.lowerCaseFlag ||
        passwordCriteria.upperCaseFlag ||
        passwordCriteria.numericFlag ||
        passwordCriteria.specialCharFlag) {
      // no error because at least one is true
      errorFlag = false;
      errorMsg = "";
    } else {
      // no Characterset has been selected
      errorFlag = true;
      errorMsg = "ERROR: Please select at least one character set. Try again."
    };
  // console.log('var passwordCriteria =>>');
  // console.table( passwordCriteria );
  return;
};
    
function buildCharSet () {
  // console.log('inside buildCharSet function ==>')
  const alphaChars = 'abcdefghijklmnopqrstuvwxyz';
  const numericChars = '0123456789';
  const specialChars = '?!#$%@&';
  var availableString = '';

  if (passwordCriteria.lowerCaseFlag) {
    availableString += alphaChars;
  };
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
  // console.log('var availableChars =>>' + availableChars);
  return;
};
  
// build the password from available characters
function generatePassword() {
  // console.log('inside generatePassword function ==>')
  const lowerCasePattern = /[a-z]/;
  const upperCasePattern = /[A-Z]/;
  const numericPattern   = /\d/;
  const specialPattern   = /\W/;
  var test4Lowercase = true;
  var test4Uppercase = true;
  var test4Numeric = true;
  var test4Special = true;
  var validPassword = true;
  do {
    // build password to the length required
    var newPassword = '';
    var i = 0
    while (i < passwordCriteria.pwLength) {
      newPassword += availableChars[Math.floor(Math.random() * availableChars.length)];
      i++;
    }
    // test the new password for each criteria selected
    if (passwordCriteria.lowerCaseFlag) {
      test4Lowercase = lowerCasePattern.test(newPassword);
    };
    if (passwordCriteria.upperCaseFlag) {
      test4Uppercase = upperCasePattern.test(newPassword);
    };
    if (passwordCriteria.numericFlag) {
      test4Numeric = numericPattern.test(newPassword);
    };
    if (passwordCriteria.specialCharFlag) {
      test4Special = specialPattern.test(newPassword);
    };
    //  set the do while exit switch
    if (test4Lowercase &&
        test4Uppercase &&
        test4Numeric   &&
        test4Special) {
          validPassword = true;
    } else {
          validPassword = false;
          // console.log('var newPassword did not pass test =>>' + newPassword);
          // console.log('var test4Lowercase =>>' + test4Lowercase);
          // console.log('var test4Uppercase =>>' + test4Uppercase);
          // console.log('var test4Numeric =>>' + test4Numeric);
          // console.log('var test4Special =>>' + test4Special);
    };

  } while (!validPassword);

  return newPassword;
}
  
// Write password to the #password input
// This in the main progran flow 
function writePassword() {
  // console.log('inside write function ==>')
  // text string is passed to the textarea with the password id in the HTML
  var passwordText = document.querySelector("#password");
  
  getUserCriteria();
  if (errorFlag) {
    password = errorMsg;
  } else  {
    buildCharSet();
    var password = generatePassword();
  };
  // console.log('var password =>>' + password);
  
  passwordText.value = password;
}
// console.log(">>>> This is before the event listener -- Let's Begin!")

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
