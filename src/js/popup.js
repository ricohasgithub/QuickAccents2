
// Search Query Text Nodes (H1)

// Text node for the A search field query (Uppercase)
const aQueryUp = new Array("À","Â");
// Text node for the a search field query (Lowercase)
const aQueryLow = new Array("à","â");

// Text node for the E search field query (Uppercase)
const eQueryUp = new Array("È","É","Ê","Ë");
// Text node for the e search field query (Lowercase)
const eQueryLow = new Array("è","é","ê","ë");

// Text node for the I search field query (Uppercase)
const iQueryUp = new Array("Î","Ï");
// Text node for the i search field query (Lowercase)
const iQueryLow = new Array("î","ï");

// Text node for the O search field query (Uppercase)
const oQueryUp = new Array("Ô","Œ");
// Text node for the o search field query (Lowercase)
const oQueryLow = new Array("ô","œ");

// Text node for the U search field query (Uppercase)
const uQueryUp = new Array("Ù","Û","Ü");
// Text node for the u search field query (Lowercase)
const uQueryLow = new Array("ù","û","ü");

// Text node for the Y search field query (Uppercase)
const yQueryUp = new Array("Ÿ");
// Text node for the y search field query (Lowercase)
const yQueryLow = new Array("ÿ");

// Text node for the C search field query (Uppercase)
const cQueryUp = new Array("Ç");
// Text node for the c search field query (Lowercase)
const cQueryLow = new Array("ç");

// No results search query display Array
const noResults = new Array("No Results");

window.addEventListener('load', function(evt) {

  document.getElementById("input_field").focus();

  document.getElementById("input_field").onkeyup = function() {
    let inputValue = document.getElementById("input_field").value;
    displaySearchQuery(inputValue);
  }

});

function displaySearchQuery (input) {

  // Clear the current root div
  clearRoot();

  let rootNode = document.getElementById("root");

  // Display prompts
  if (input === "A") {
    appendQueryResultsToRoot(rootNode, aQueryUp);
  } else if (input === "a") {
    appendQueryResultsToRoot(rootNode, aQueryLow);
  } else if (input === "E") {
    appendQueryResultsToRoot(rootNode, eQueryUp);
  } else if (input === "e") {
    appendQueryResultsToRoot(rootNode, eQueryLow);
  } else if (input === "I") {
    appendQueryResultsToRoot(rootNode, iQueryUp);
  } else if (input === "i") {
    appendQueryResultsToRoot(rootNode, iQueryLow);
  } else if (input === "O") {
    appendQueryResultsToRoot(rootNode, oQueryUp);
  } else if (input === "o") {
    appendQueryResultsToRoot(rootNode, oQueryLow);
  } else if (input === "U") {
    appendQueryResultsToRoot(rootNode, uQueryUp);
  } else if (input === "u") {
    appendQueryResultsToRoot(rootNode, uQueryLow);
  } else if (input === "Y") {
    appendQueryResultsToRoot(rootNode, yQueryUp);
  } else if (input === "y") {
    appendQueryResultsToRoot(rootNode, yQueryLow);
  } else if (input == "C") {
    appendQueryResultsToRoot(rootNode, cQueryUp);
  } else if (input == "c") {
    appendQueryResultsToRoot(rootNode, cQueryLow);
  } else {
    appendQueryResultsToRoot(rootNode, noResults);
  }

}

function appendQueryResultsToRoot (rootNode, displayValArray) {
  for (let i=0; i<displayValArray.length; i++) {

    // Append search query
    let queryResults = document.createElement("H2");
    let queryTextNode = document.createTextNode(displayValArray[i]);
    queryResults.appendChild(queryTextNode);

    if (displayValArray[i] != "No Results") {
      // Add Id
      let queryId = "accent";
      queryResults.setAttribute("id", queryId);

      // Display search query
      rootNode.appendChild(queryResults);

      // Add Copy Commands
      queryResults.addEventListener('click', function() {
        let temp = document.createElement("textarea");
        temp.value = queryResults.innerText;
        rootNode.appendChild(temp);
        temp.select();
        document.execCommand("copy");
        rootNode.removeChild(temp);
      }, false);

    } else {
      // Display search query
      rootNode.appendChild(queryResults);
    }

  }
}

function clearRoot () {

  let rootNode = document.getElementById("root");

  while (rootNode.firstChild) {
    rootNode.removeChild(rootNode.firstChild);
  }

}