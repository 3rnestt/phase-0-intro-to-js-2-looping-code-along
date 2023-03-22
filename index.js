// Code your solutions in this file
function writeCards(names) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return messages;
  }
  
  // Call the function with an array of names
  let names = ["Alice", "Bob", "Charlie"];
  let thankYouMessages = writeCards(names);
  
  console.log(thankYouMessages); 

  function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }
  
  // Call the function with a number
  countDown(5); // Output: 5 4 3 2 1 0
  