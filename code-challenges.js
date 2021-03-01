// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Fahrenheit.
// Use the test variables provided below. Expected outcome: "85 is below boiling point" "350 is above boiling point" "212 is at boiling point"

//create custom function with temp as an arguement
//set boiling point as variable at 212 degrees
//run an if/else statement that compares arguement to boiling point variable
//log results on each if/else statement to declare comparison result

//Wanted to have some fun with the arguement name - yes I know it should be named something relative to what it's purpose is....just wanted to start the problem with some humor!


var temp1 = 85;
var temp2 = 350;
var temp3 = 212;

const compareBoilPoint = (banana) => {
  let boilPoint = 212;
  if (banana < boilPoint){
    return `${banana} is below boiling point.`;
  } else if (banana > boilPoint){
    return `${banana} is above boiling point.`;
  } else if (banana === boilPoint){
    return `${banana} is at boiling point`;
  } else{
    return "oopsie....you seem to have tripped on a banana!";
  }
}

console.log(compareBoilPoint(temp1))
console.log(compareBoilPoint(temp2))
console.log(compareBoilPoint(temp3))



// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45] [10, 25, -40, 100, 160]

//Write a custom function that takes an array as an arguement
//write a for loop that starts at index 0 and runs for the length of the array.
//use .push to send modified array (array times 5) to new let variable
//Return new arrayXFive variable

var myForNumbers1 = [3, 7, 0, 6, -9]
var myForNumbers2 = [2, 5, -8, 20, 32]

const multByFive = (array) => {
  let arrayXFive = []
  for (let i = 0; i < array.length; i++){
    arrayXFive.push(array[i] * 5)
  }
  return arrayXFive
}

console.log(multByFive(myForNumbers1))
console.log(multByFive(myForNumbers2))
//
//
//
// // --------------------3) Create a function that multiplies each number in the array by 5 using map.
// // Use the test variable provided below. Expected outcome: [435, 30, 140, 80, 10] [40, -35, 0, 30, 60]

//Create a custom function that takes an array as an arguement
//map array with value returned times 5
//return mapped array
//log result

var myMapNumbers1 = [87, 6, 28, 16, 2]
var myMapNumbers2 = [8, -7, 0, 6, 12]

const mapXFive = (array) => {
  return array.map(value => value * 5)
}

console.log(mapXFive(myMapNumbers1));
console.log(mapXFive(myMapNumbers2));



// // --------------------4) Create a function that removes all the vowels from a string.
// // Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"


//Create a function that takes a string as an arguement
//break strings down into arrays
//filter array with if else statement that determines if there are vowels by using includes
//join new array into a new string
//log result


//Tried multiple options to get to this, I still feel it's a little clunky for having a string typed out for each vowel, uppercase and lowercase, however all of the other functions I tried seemed to come up with errors.

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"

const noVowels = (string) => {
  let stringArray = string.split("")
  let noVowelArray = stringArray.filter(value =>{
    if (!['A','a','E','e','I','i','O','o','U','u'].includes(value)){
      return true
    }
})
  return noVowelArray.join("")
}
console.log(noVowels(stringWithVowels1));
console.log(noVowels(stringWithVowels2));


// // --------------------5) Copy/paste your code from #4. Refactor your code to include non-string edge cases. Inform your user that the variable passed into the vowel removal function is not a string.
// // Use the test variables provided below. Expected output: "true is not a string" "42 is not a string" "mCdngMstr"


var refactorTester1 = true
var refactorTester2 = 42
var refactorTester3 = "IAmACodingMaster"
//

//ADD before running string through split if else statement
//check in if else statement for string, if not string -return "not a string "

const noVowelString = (string) => {
  if (typeof string !== 'string'){
    return `${string} is not a string.`
  }
  let stringArray = string.split("")
  let noVowelArray = stringArray.filter(value =>{
    if (!['A','a','E','e','I','i','O','o','U','u'].includes(value)){
      return true
    }
  })
  return noVowelArray.join("")
}

console.log(noVowelString(refactorTester1));
console.log(noVowelString(refactorTester2));
console.log(noVowelString(refactorTester3));
//
//
//
//
// // --------------------6) Create a function that takes in an array of strings and returns the string with the most characters.
// // Expected output: "chopsticks" "stemware"
//
var utensils = ["fork", "knife", "tongs", "chopsticks", "skewer"]
var vessels = ["cup", "mug", "stemware", "glass", "tumbler", "tea cup"]
//
//Make custom function that takes an array of strings as an arguement
//Use sort to arrange arrays by length
//return only the first word by using shift function on sorted variable.
//log result

//I originally was trying the pop function in a variety of patterns, with if/else statements but was coming up with errors or the wrong results.  I later came accross the sort function and thought that if I simply sort it by length and THEN execute the command shift to remove the first element and return just that it coul work!

const mostChar = (array) => {
    let charFilter = array.sort (function(a, b) {
      return b.length - a.length;
    })
    return charFilter.shift ()
}

console.log(mostChar(utensils))
console.log(mostChar(vessels))
//
//
//
// // --------------------7) Create a function that takes in an array of strings and returns an array with the last letter removed from each string.
// // Expected output: ["Luig", "Peac", "Toa", "Yosh"] ["Ink", "Blink", "Pink", "Clyd"]
//
var mario = ["Luigi", "Peach", "Toad", "Yoshi"]
var pacman = ["Inky", "Blinky", "Pinky", "Clyde"]


//Make a function that takes an array as an arguement
//use the splice built in method to remove last letter of each string by specifying the index to start , the to check the length of string and remove last letter.
//log results

//Had to rethink this -- took alot of research to get to substring and lots of trial and error.  Found that substring has a similar setup as a for loop.  It asks for index, the length of string and then what you want done on it (-1).  First tried .forEach thinking I wanted a for loop to get the substring, then thought to try .map since I already had a for loop with substring and got the results!


const noLastLetter = (array) => {
  return array.map(value => {
    return value.substring (0, value.length - 1)
  })
}
console.log(noLastLetter(mario))
console.log(noLastLetter(pacman))
