/* Shinde_hw6
 Example 5 JavaScript code
*/
console.log("Bharti's Output from Homework 6 Example 5");

function myFunction() {
  const newLink = document.createElement("LI");
  const textnode = document.createTextNode("College of Business");
  newLink.appendChild(textnode);

  const list = document.getElementById("links");
  list.insertBefore(newLink, list.childNodes[2]);
}
myFunction()