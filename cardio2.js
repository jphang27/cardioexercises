// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'
function longestWord(sen) {
    // Create filtered array
    //[a-z0-9]+/g regular expression
    //lowercase all words.
    const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);

    // Sort by length
    const sorted = wordArr.sort((a, b) => b.length - a.length);

    // If multiple words, put into array
    //An arrow function expression is a syntactically compact alternative to a regular function expression. (MDN Definition)
    const longestWordArr = sorted.filter(
        word => word.length === sorted[0].length
    )
    // Check if more than one array val
    if (longestWordArr.length === 1) {
     // Return the word
     return longestWordArr[0];
    } else {
        return longestWordArr;
    }
  }
//Use for testing.
//   let output = "I am learning JavaScript in Talent Path"
//   console.log(longestWord(output));

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]
function chunkArray(arr, len) {
    const chunkArr = []; //Initialize empty Array
    let i = 0; //start the index at 0
    // While loop, index is less than the array length
    while (i < arr.length) {
        // Slice out from the index to the index + the chunk length nd push on to the chunked array
        chunkArr.push(arr.slice(i, i + len));
        // Increment by chunk length
        i += len;
    }
    return chunkArr;
}
//Testing
// let arr = [1,2,3,4,5,6,7,8,9];
// console.log(chunkArray(arr, 2));

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]
function flattenArray(arrays) {
    //The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth
    //The global Infinity property is a numeric value representing infinity
    return arrays.flat(Infinity);
}
// let arr = [[1, 2], [3, 4], [5, 6], [7]];
// console.log(chunkArray(arr));

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'
function isAnagram(str1, str2) {
    //Get 2 strings
    //split the string into an array and then sort them and then join them together and compare the 2 strings
    if(str1.split("").sort().join("") === str2.split("").sort().join("")){
        //Use to check if the comparison is correct
        // console.log(str1.split("").sort().join(""));
        // console.log(str2.split("").sort().join(""));
        return true;
    }
    else {
        return false;
    }
}
// let output1 = "elbow";
// let output2 = "below";
// console.log(isAnagram(output1, output2));

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'
function letterChanges(str) {
    const vowels = ['a', 'e', 'u', 'i', 'o']; //create an array named vowels to hold all vowels in the alphabet
    let newStr = ""; //initialize an empty new string.
    let letter = "";
    for (i of str.toLowerCase()){
        if (i.charCodeAt(0)  < 97 || i.charCodeAt(0) > 122){
            newStr += i;
        }
        else {
            letter = String.fromCharCode((i.charCodeAt(0) - 97 + 1) % 25 + 97)
            if (vowels.includes(letter)){
                newStr += letter.toUpperCase();
            }
            else {
                newStr += letter;
            }
        }    
    }
    return newStr;
}
let output = "JavaScript";
console.log(letterChanges(output));