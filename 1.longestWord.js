//*----------------------------
//* Programing Question: Longest word in a String

//? Q: Write a function findLongest word that takes a string as input and returns the longest word in the string. if there are multiple longest word, return first one encountered.

//* Constrains:
//? The input string may contain alphabetic characters, digits, space, and punctuation.
//? The input string is no emty.
//? The input string may contain multiple words separated by spaces.

//* Note:

//? If the input string is empty or contains only whitespacem, the function should return an false.
//? The function should ignore leading and traling whiteslpace when determaining the longest word.

let str = "Hello, I love to learn javascript";
const findLongestWord = (str)=> {
    if(str.trim().length === 0 ){
        return false;
    }

    words = str.split(" ");
    
    //example - 1
    // words = words.sort((a, b) => b.length - a.length );
    // console.log(words);

    // return words[0]

    //example - 2
    return words.reduce((accum, curWord) => (curWord.length > accum.length ? curWord : accum),
    ""
    );
}

console.log("The longest word is  =", findLongestWord(str));
