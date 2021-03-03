/* Shinde_hw6
 Example 2 JavaScript code
*/
console.log("Bharti's Output from Homework 6 Example 2");

const displayText400 = () => {
  const showElements = document.getElementsByClassName("400level");
  for (const showText of showElements) {
      console.log(showText.textContent);
  }   
}

displayText400();
