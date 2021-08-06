// Assignment Code
let generateBtn = document.querySelector("#generate");


function generatePassword(){
  // Obtain User parameters
  let characterLength = prompt("Enter the desired character length of the password: ");

    if (!characterLength){
      return "Good Luck creating your own.";
    }
    console.log("desired character length of password is: "+characterLength);

  let specialCrts = window.confirm("Include SPECIAL CHARACTERS in password?");
    console.log("specialCrts value is:" + specialCrts);

  let numericCrts = window.confirm("Include NUMERIC CHARACTERS in password?");
    console.log("numericCrts value is:" + numericCrts);

  let lowerCrts = window.confirm("Include LOWER CASE LETTERS in password?");
    console.log("lowerCrts value is:" + lowerCrts);

  let upperCrts = window.confirm("Include UPPER CASE LETTERS in password?");
    console.log("upperCrts value is:" + upperCrts);


  //Utilize the user input to generate the array we will chose random values from
  let specialArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
  let numericArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  let lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let upperArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

  let genArray = [];

  if (specialCrts === true) {
     genArray = [...genArray, ...specialArray];
  }
  if (numericCrts) {
    genArray = [...genArray, ...numericArray];
  }
 if (lowerCrts) {
  genArray = [...genArray, ...lowerArray];
  }
  if (upperCrts) {
  genArray = [...genArray, ...upperArray];
  }
  console.log("The gen array so far"+genArray);

  
return "test";
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
