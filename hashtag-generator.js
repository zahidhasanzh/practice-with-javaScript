//*------------------
//* Programing Question: Hash Tag Generator
//*------------------

//? You are required to implement a function generatHash that generates a hash tag form given input string. The hash tag shoud be constructed as follows:

// The input string  should be converted to a has tag format, where each word is capitalized and concatenated together without spaces.

//? if the length of the input string is greter than 280 characters or if the input string is empty or contains only whitespace, the function should return false.
//? Otherwise, the function should return the generated hash tag prefixed with #.

//* write a function generateHash to ccomplish this task.

const generateHash = (str) => {
    if(str.length > 280 || str.trim().length === 0){
        return false;
    }

   str = str.split(" ");
   
    //example 1
    // str = str.map((curElem) =>
    // curElem.replace(curElem[0], curElem[0].toUpperCase()));

    //example 2

    str = str.map((curElem) => curElem.charAt(0).toUpperCase()+ curElem.slice(1))

   
   str = `#${str.join("")}`;
  return  str;
}

// o/p = "#ILoveToLearnJavascript"

console.log(generateHash("i love to learn javascript"));