/* Shinde_hw6
 Example 4 JavaScript code
*/
console.log("Bharti's Output from Homework 6 Example 4");

const tblElement = document.createElement("table");

for (let i = 1; i <= 12; i++){
  const trElement = document.createElement("tr")
  const tdElement = document.createElement("td");
  tdElement.innerText = i;
  trElement.appendChild(tdElement);
  tblElement.appendChild(trElement);
  if (i % 4 === 0) { 
  tdElement.style.backgroundColor = "lightblue";  
  }

  trElement.appendChild(tdElement);
  tblElement.appendChild(trElement)

};

const divElement = document.getElementById("output");
divElement.appendChild(tblElement);