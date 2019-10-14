
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
    // let temp[0] = str.toUpperCase;
    // let temp2 = "";
    for(let i = 0; str.length < 0; i++){

        if(str.charAt(0) === toLowerCase(str) || str.substring === " "){
            console.log(str.charAt);
            str.charAt(0) = str.charAt(0).toUpperCase;
            // str.substring = str.substring.toUpperCase + 1;
            // return str;
        }
        else{
            return str;
        }
    }

    // const upper = str.charAt(0).toUpperCase() + str.substring(1);
    // return upper;
}

let output = capitalizeLetters("i love javasccript");
console.log(output);