// const oneTwoThree = [1, 2, 3];
// const sevenEightNine = [7, 8, 9];

// const result = [4, 5, 6, ...oneTwoThree, ...sevenEightNine];

// console.log(result);

// const capital = {
//   Jakarta: "Indonesia",
//   London: "England",
//   Tokyo: "Japan",
// };
// capital["New Delhi"] = "Indonesia";

// console.log(capital["Indonesia"]);

// const artistsAndSongs = {
//   Keyakizaka46: ["Silent Majority"],
//   Blackpink: ["How You Like That", "Ice Cream"],
//   JKT48: ["Rapsodi", "Heavy Rotation"],
//   Twice: ["What is Love?"],
// };

// artistsAndSongs["Babymetal"] = ["Gimme chocolate"];

// delete artistsAndSongs["Keyakizaka46"];
// function minMax(arrayOfNumbers) {
//   let currentMin = arrayOfNumbers[0];
//   let currentMax = arrayOfNumbers[0];
//   for (value of arrayOfNumbers) {
//     if (value < currentMin) {
//       currentMin = value;
//     } else if (value > currentMax) {
//       currentMax = value;
//     }
//   }

//   console.log(`currentMin: ${currentMin}, currentMax: ${currentMax}`);
// }

// minMax([8, -6, 0, 9, 40, 2, 23, 50, 2, -3, -15, 15, -23, 71]);

// let myString = "";

// try {
//   myString += "a";
//   throw Error();
// } catch (e) {
//   myString += "b";
// } finally {
//   myString += "c";
//   throw Error();
//   myString += "d";
// }

// console.log(myString);

// class MyCustomError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = "MyError";
//   }
// }

// try {
//   throw new MyCustomError("This is an error");
// } catch (e) {
//   console.log(e.message);
// }

// function fetchUsername() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("JSUser");
//     }, 3000);
//   });
// }

// console.log("Fetching username...");
// const username = fetchUsername();
// console.log(`You are logged in as ${username}`);
// console.log("Welcome!");

function fetchUsername() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("JSUser");
    }, 3000);
  });
}

console.log("Fetching username...");
fetchUsername().then((value) => {
  console.log(`You are logged in as ${value}`);
});
console.log("Welcome!");
