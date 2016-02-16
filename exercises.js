/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(a, b){
    "use strict";

    if(a === b) {
      console.log(a + " and " + b + " are equal!");
      return a;
    } else if (a > b) {
        console.log(a + " is greater than " + b + "!");
        return a;
      } else {
          console.log(b + " is greater than " + a + "!");
          return b;
    }
}

console.assert(max(5, 6) == 6, "Error!");
console.assert(max(4, 4) == 4, "Error!");
console.assert(max(8, 7) == 8, "Error!");
//
// max(5, 6);
// max(4, 4);
// max(8, 7);
// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(a, b, c){
    "use strict";

    if(a === b && b === c) { // are the all equal?
      console.log(a + ", " + b + " and " + c + " are equal!");
      return a;
    } else if (a > b && a > c) {  // Test if a is great than both
        console.log(a + " is greater than " + b + " and " + c + "!");
        return a;
      } else if (b > a && b > c) {// Test if b is great than both
          console.log(b + " is greater than " + a + " and " + c + "!");
          return b;
        } else if (c > a && c > b) {// Test if c is great than both
            console.log(c + " is greater than " + a + " and " + b + "!");
            return c;
          } else if (a === b && a > c) {// Test if a and b are the same and greater than c
              console.log(a + " and " + b + " are equal, and greater than " + c + "!");
              return a;
            } else if (a === c && a > b) {// Test if a and c are the same and greater than b
                console.log(a + " and " + c + " are equal, and greater than " + b + "!");
                return a;
              }    else if (b === c && b > a) {// Test if b and c are the same and greater than a
                  console.log(b + " and " + c + " are equal, and greater than " + a + "!");
                  return b;
                }   else {
                    console.log("Error!");
                }
}

console.assert(maxOfThree(1, 1, 1) == 1, "Error!");
console.assert(maxOfThree(4, 3, 2) == 4, "Error!");
console.assert(maxOfThree(3, 5, 4) == 5, "Error!");
console.assert(maxOfThree(4, 5, 6) == 6, "Error!");
console.assert(maxOfThree(7, 7, 6) == 7, "Error!");
console.assert(maxOfThree(8, 7, 8) == 8, "Error!");
console.assert(maxOfThree(8, 9, 9) == 9, "Error!");



// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    "use strict";

  if (char === "a" || char === "e" || char ===  "i" || char === "o" || char ===  "u") {
      console.log(char + " is a vowel!");
      return char;
    } else if (char === "y") {
        console.log(char + " is sometimes a vowel!");
        return char;
      } else {
          console.log(char + " is not a vowel, it's a consonant!");
          return char;
        }
}

console.assert(isVowel("a") == "a", "Error!");
console.assert(isVowel("y") == "y", "Error!");
console.assert(isVowel("d") == "d", "Error!");

// isVowel("a");
// isVowel("y");
// isVowel("d");


// ---------------------
// Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    "use strict";

    var word = ""; //define word as empty string to add to

    for(var i=0; i < phrase.length; i++) { // loop through each letter of the phrase passed in

      var letter = phrase.charAt(i); // define letter as the currently looping character of phrase

      if(letter.match(/[b-df-hj-np-tv-z]/)) { // if the current character is a consonant

          word += letter + "o" + letter; // add the current letter plus an "o" then the current letter again

      } else {
          word += letter; // otherwise its a vowel, so just add it to the word
              }
            }
  console.log(word); //print the final output
  return(word);
}

console.assert(rovarspraket("Javascript") == "Javovasoscocroripoptot", "Error!");

rovarspraket("Javascript");



// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(numberArray){
    "use strict";
    //...
    var sum = 0;

    for(var i = 0; i < numberArray.length; i++) {
        sum += numberArray[i];
        console.log("the sum is " + sum);
      }
      return sum;
}

console.assert(sum([1,2,3,4]) === 10, "Error!");
console.assert(sum([4,5,6,7]) === 22, "Error!");

sum([1,2,3,4]);
sum([4,5,6,7]);

function multiply(numberArray){
    "use strict";

    var equation = "";

    for(var i = 0; i < numberArray.length; i++) {
      if(i+1 === numberArray.length) {
        equation += numberArray[i];
      } else {
        equation += (numberArray[i] + "*");
      }

    }
      // console.log(equation);
      // console.log(eval(equation));
      // return eval(equation);
}

// console.assert(multiply([1,2,3,4]) === 24, "Error!");
// console.assert(multiply([4,5,6,7]) === 840, "Error!");

multiply([1,2,3,4]);
multiply([4,5,6,7]);

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(phrase){
    "use strict";

    var wordArray = phrase.split(""); // split string into an array of characters

    wordArray.reverse(); // reverse order of array

    var wordString = wordArray.join(""); // convert array back into a string with no comma separation
    // console.log(wordString);
    return wordString; // return for assertion test
}

// console.assert(reverse("hello how are you") == "uoy era woh olleh", "Error!");
reverse("hello how are you");

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){

    "use strict";

  var wordLengthofCurrentWord = 0; // stores length of currently looped word
  var longestWordSoFar = ""; // stores length of longest word so far

  for (var i = wordArray.length-1; i > 0; i--) { //starts at the end of the array (see i's starting value)
                                            // runs until back at the beginning of the array, and subtracts 1 each time
    wordLengthofCurrentWord = wordArray[i].length; // stores length of each word each time it loops through

    if (wordLengthofCurrentWord > longestWordSoFar.length) { //if the current word is longer than longest so far then run           below
      longestWordSoFar = wordArray[i];  //if the longest, then store it (using its array position) in this variable
      }
    }
    return longestWordSoFar; // whichever word is left at the end will be returned here
  }

  wordArray = ["First", "Second", "Third", "Eleven-Thousand", "Thirty Gazillion"];

  var theLongestWordinTheArray = findLongestWord(wordArray);

  console.assert(findLongestWord(wordArray) == "Thirty Gazillion", "Error!");
  // console.log(theLongestWordinTheArray);

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function arrayTest(arr1, arr2){ // this function is used so you can assert test arrays, it takes 2 arrays
  var sameContent = false; // start with this flag set to false

  if(arr1.length === arr2.length) {//test initial length first if equal run code if not return sameContent(false)

    for (var i = 0; i < arr1.length; i++) { // not loop through each item inside the array

      if(arr1[i].length != arr2[i].length){ // if at any point they arent equal, return false

        sameContent = false;
        return sameContent;

      } else {
        sameContent = true; //if all have matched, change flag to true
      }
    }
  } else {
    return sameContent;
  }
  return sameContent;
}

function filterLongWords(words, lengthTester){
    "use strict";
    //...
    var wordLengthofCurrentWord = 0; // stores length of currently looped word
    var longWordsPutInArray =[];

    for (var i = 0; i < wordArray.length; i++) { // loop through array and grab each word

      wordLengthofCurrentWord = wordArray[i].length; // stores length of each word each time it loops through

      if (wordLengthofCurrentWord > lengthTester) { //if the current word is longer than longest so far then run below
        longWordsPutInArray.push(wordArray[i]);  //if long enough, push it to the array of words lon
        }
      }
      return longWordsPutInArray; //words long enough will be returned here
    }

    wordArray = ["First", "Second", "Third", "Eleven-Thousand", "Thirty Gazillion"];

    var longEnoughWordsArray = filterLongWords(wordArray, 1); //this grabs the words that have been pushed to array in the loop

    console.assert(arrayTest(filterLongWords(wordArray, 1), wordArray), "Error!"); //uses above arrayTest function since assert doesnt let you list array items

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function objectTest(obj1, obj2) {
  var sameContent = false; // set to equal and make a match turn it true

    for (var x in obj1) { // for in loop console.logs the properties and values
        if(obj1[x].length != obj2[x].length){ // if at any point they arent equal, return false
          sameContent = false;
          return sameContent;
        } else {
          sameContent = true; //if all have matched, change flag to true
        }
    }

    for (var y in obj2) { //has to be run twice in case they match up to a point but one ends and one doesnt
        if(obj1[y].length != obj2[y].length){
          sameContent = false;
          return sameContent;
        } else {
          sameContent = true;
        }
    }

    return sameContent; //spit it out so value can be tested below
}


function charFreq(string){
    "use strict";

    var lettersObject = {}; //empty letters Object to store letters at properties

    for (var i=0; i < string.length; i++) { //loop through each letter in the string

        var letter = string.charAt(i); //store the current letter in a variable

        if (lettersObject[letter]) { //if the lettersObject has that property already, cant use dot notation

           lettersObject[letter]++; //then increment it up by one

        } else { //but if it doesnt have it yet

           lettersObject[letter] = 1; //set it to one
        }
    }

    for (var x in lettersObject) { // for in loop console.logs the properties and values
    console.log("There are " + lettersObject[x] + " " + x + "'s in that string.");
    }

    return lettersObject;

}
var objectToTest = charFreq("This is a Javascript test"); // storing this so it can be used in assertion

console.assert(objectTest(charFreq("This is a Javascript test"), objectToTest), "Error!"); // uses object test
