
// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'
function reverseString(str) {

    let newStr = ""; //Declare a new string
    //Start the string at the end and iterate from the end to the beginning
    //Store the old string into the new string and return it as a reverse string.
    for(let i = str.length - 1; i >= 0; i--){
        console.log(newStr);//check
        newStr += str[i]; //Store old string into new string
    }
    return newStr;
}

// let output = reverseString("Hello");
// console.log(output);

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false
function isPalindrome(str) {

    //Compare if the str getting passed is equal to the reversed of the string
    //If it matches then return true
    //else false
    if(str === reverseString(str)){
        console.log("True");
        return true;
    }
    else{
        console.log("false");
        return false;
    }
}

// let output = isPalindrome("anna");
// console.log(output);

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125
function reverseInt(int) {

    let temp = int.toString(); //Store the integer as a string
    let newInt = "";
    for(let i = temp.length - 1; i >= 0; i--){
        console.log(newInt);//check
        newInt += temp[i]; //Store old string into new string
    }
    console.log(typeof Number(newInt));
    
    return Number(newInt); //Should return as a integer
    //return +newInt also return it as a number too
}

// let output = reverseInt(123456789);
// console.log(output);

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {

    let strArr = str.toLowerCase().split(' '); //lowercase all the words and store it in an array.
    console.log("outside: " + strArr); //Testing use for checking
    //iterate through the array
    //Add the first letter of each word from the array with the rest of the letter following each word
    //Ex) L + ove = Love;
    for(let i = 0; i < strArr.length; i++){
        strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
    }
    return strArr.join(" "); //put the string back together.

    // const upper = str.charAt(0).toUpperCase() + str.substring(1);
    // return upper;
}

// let output = capitalizeLetters("I love javasccript");
// console.log(output);

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
    const charMap = {};
    let maxNum = 0;
    let maxChar = '';
  
    str.split('').forEach(function(char) {
      if(charMap[char]) {
        charMap[char]++;
      } else {
        charMap[char] = 1;
      }
    });
  
    for(let char in charMap) {

      if(charMap[char] > maxNum) {
        maxNum = charMap[char];
        maxChar = char;
      }
    }
  
    return maxChar;
}

// let output = "javascript";
// console.log(maxCharacter(output));

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", 
//for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {

    let output = "";//initialize empty string
    for (let i = 1; i <= 100; i++){
        //get multiples of 3's
        if (i % 3 === 0){
            output = output.concat("Fizz ");
        }
        //get multiples of 5's
        if (i % 5 === 0){
            output = output.concat("Buzz ");
        }
        //If the other numbrs are not multiple of 3's or 5's
        if (i % 3 != 0 && i % 5 != 0){
            output = output.concat(i.toString());
        }
        output = output.concat("   ");
    }
    console.log(output);

}
// let output = 0;
fizzBuzz();
