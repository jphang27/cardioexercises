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