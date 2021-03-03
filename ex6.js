/* Shinde_hw6
 Example 6 JavaScript code
*/
console.log("Bharti's Output from Homework 6 Example 6");

const words = [{
term: "Procrastination",
definition: "Avoidance of doing a task that needs to be accomplished"
}, {
term: "Tautology",
definition: "logical argument constructed in such a way that it is logically irrefutable"
}, {
term: "Oxymoron",
definition: "figure of speech that juxtaposes elements that appear to be contradictory"
  }]; 

dlElement = document.createElement("dl");
dlElement.setAttribute("id", "dictionary");
document.getElementById("content").appendChild(dlElement)
for (let w of words) {
dtElement = document.createElement("dt");
dtElement = dtElement.appendChild(document.createElement("strong"));
dtElement.appendChild(document.createTextNode(w.term));
ddElement = document.createElement("dd");
ddElement.appendChild(document.createTextNode(w.definition));
document.getElementById("dictionary").appendChild(dtElement).insertAdjacentElement("afterend", ddElement);
}