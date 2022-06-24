function returnRandomString(
  includeLower,
  includeNumeric,
  includeSpecial,
  includeUpper,
  passLength
) {
  var password = "";
  // generate password based on criteria
  var lower = "abcdefghiklmnopqrstuvwxyz";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var special = "`~@#$%^&*()_-+=[]|;:',<.>/?";
  var chars = "";
  if (includeLower) {
    chars = chars + lower;
  }
  if (includeUpper) {
    chars = chars + upper;
  }
  if (includeNumeric) {
    chars = chars + numeric;
  }
  if (includeSpecial) {
    chars = chars + special;
  }
  console.log(chars);
  for (var i = 0; i < passLength; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    password += chars.substring(rnum, rnum + 1);
  }
  return password;
}

function generatePassword() {
  // set initial length to zero
  var passLength = 0;
  // while length is not in range
  while (!(passLength <= 128 && passLength >= 8)) {
    passLength = window.prompt(
      "Enter a password length between 8 and 128 characters:"
    );
    console.log(passLength);
    console.log(passLength>128);
    console.log(passLength<8);
  }
  // declare character properties
  var includeLower;
  var includeUpper;
  var includeNumeric;
  var includeSpecial;
  // until at least one character property is true
  while (!(includeLower || includeUpper || includeNumeric || includeSpecial)) {
    window.alert(
      "Password must include one of the following options: Uppercase, lowercse, numeric or special."
    );
    // ask if should include lower case
    var includeLower = window.confirm(
      "Should password contain lower case characters?"
    );
    // ask if should include upper case
    var includeUpper = window.confirm(
      "Should password contain upper case characters?"
    );
    // as if should include numeric
    var includeNumeric = window.confirm(
      "Should password contain numeric characters?"
    );
    // ask if should include special characters
    var includeSpecial = window.confirm(
      "Should password contain special characters?"
    );
  }
  // call random string generator until criteria is met
  return returnRandomString(
    includeLower,
    includeNumeric,
    includeSpecial,
    includeUpper,
    passLength
  );
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
