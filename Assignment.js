//Question 1
function moveTen(s) {
  return s
    .split("")
    .map((char) => {
      // Get ASCII code of character
      let code = char.charCodeAt(0);

      // Move 10 positions forward
      code += 10;

      // If we've gone past 'z', wrap around to 'a'
      while (code > 122) {
        // 122 is ASCII for 'z'
        code = code - 26;
      }

      // Convert back to character
      return String.fromCharCode(code);
    })
    .join("");
}

console.log(moveTen("testcase")); // "docdmkco"
console.log(moveTen("codewars")); // "mynogkbc"
console.log(moveTen("exampletesthere"));

console.log("-----------------");
console.log("Question 2");
//Question 2

function vaporcode(string) {
  return string
    .toUpperCase() // Convert to uppercase
    .split(" ") // Split by spaces to remove them
    .join("") // Join without spaces
    .split("") // Split into individual characters
    .join("  "); // Join with double spaces
}

console.log(vaporcode("Lets go to the movies"));

console.log(vaporcode("Why isnt my code working"));

console.log("-----------------");
console.log("Question 3");

function rps(player1, player2) {
  // Define winning combinations as an object
  const rules = {
    scissors: ["paper", "lizard"],
    paper: ["rock", "spock"],
    rock: ["lizard", "scissors"],
    lizard: ["spock", "paper"],
    spock: ["scissors", "rock"],
  };

  // If both players choose the same, it's a draw
  if (player1 === player2) {
    return "Draw!";
  }

  // Check if player1's choice beats player2's choice
  if (rules[player1].includes(player2)) {
    return "Player 1 Won!";
  } else {
    return "Player 2 Won!";
  }
}

console.log(rps("rock", "lizard"));
console.log(rps("paper", "rock"));
console.log(rps("scissors", "lizard"));
console.log(rps("lizard", "paper"));
console.log(rps("spock", "rock"));

console.log("-----------------");
console.log("Question 4");

function wordsToMarks(string) {
  return string
    .split("")
    .reduce((sum, letter) => sum + (letter.charCodeAt(0) - 96), 0);
}

console.log(wordsToMarks("attitude"));
console.log(wordsToMarks("friends"));
console.log(wordsToMarks("family"));
console.log(wordsToMarks("selfness"));
console.log(wordsToMarks("knowledge"));

console.log("-----------------");
console.log("Question 5");
function oddOne(arr) {
  return arr.findIndex((num) => Math.abs(num) % 2 === 1);
}
console.log(oddOne([2, 4, 6, 7, 10]));
console.log(oddOne([2, 16, 98, 10, 13, 78]));
console.log(oddOne([4, -8, 98, -12, -7, 90, 100]));
console.log(oddOne([2, 4, 6, 8]));

console.log("-----------------");
console.log("Question 6");
//Hoisting in JavaScript is a behavior where variable and function declarations
// are moved to the top of their respective scopes during the compilation phase,
// before the code is executed. Let me explain this with examples:

console.log(a); // Output: undefined

// when declaration is hoisted
var a = 10;
console.log(a); // Output: 10

//Function Declaration Hoisting:
sayHello(); // "Hello!" - this works!

function sayHello() {
  console.log("Hello!");
}
