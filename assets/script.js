// Assignment Code
let generateBtn = document.querySelector("#generate");


function generatePassword(){
  // Obtain User parameters
  let passwordLength = prompt("Enter the desired password length of the password: ");

    if (!passwordLength){
      return "Good Luck creating your own.";
    }
    console.log("desired password length of password is: "+passwordLength);

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


  // Creating a for loop that generate the desired amount of characters into the final array based on user input.
  var finalArray = [];
  for (let i=0; i<passwordLength; i++){
    // Time to randomly choose elements from the genArray to create our custom password.
    let randomIndexVal = Math.floor(Math.random()*genArray.length);
        console.log("random index number is "+ randomIndexVal);

    var chosenEl = genArray[randomIndexVal];
      console.log("The randomly chosen element is " + chosenEl);
    finalArray.push(chosenEl);
  }
    console.log("The final array is "+ finalArray);

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
