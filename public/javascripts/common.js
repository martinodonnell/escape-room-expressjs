function setCookie(key, value) {
  localStorage["setItem"](key, value);
}

function setCookieDB(key, value = new Date()) {
  if (!getCookie(key)) {
    saveCookieInDatabase(key, value);
  }
  setCookie(key, value);
}

function getCookie(key) {
  return localStorage["getItem"](key);
}

function selectItem(key, output) {
  setCookieDB("currentItem", key);
  document["getElementById"]("current-item")["innerHTML"] =
    "<p>Current Item: " + output + "</p>";
}

function buildItemLine(imgURL, displayName) {
  return `<p><a href="images/${imgURL}" target="_blank">${displayName}</a></p>`;
}

function showItems() {
  var modalContents = "<p><b>Items you can view - Click to view</b></p>";
  //kitchen
  if (getCookie("kitchenNote") !== null) {
    modalContents += buildItemLine("kitchen/cook-book.png", "Kitchen Note");
  }

  if (getCookie("sugar-sheet") !== null) {
    modalContents +=
      '<p><a href="images/kitchen/an-start.png" target="_blank">Sugar Paper</a></p>';
  }

  if (getCookie("tea-sheet") !== null) {
    modalContents +=
      '<p><a href="images/kitchen/an-the.png" target="_blank">Tea Paper</a></p>';
  }

  if (getCookie("coffee-sheet") !== null) {
    modalContents +=
      '<p><a href="images/kitchen/an-clock.png" target="_blank">Coffee Paper</a></p>';
  }

  if (getCookie("cook-book") !== null) {
    modalContents +=
      '<p><a href="images/kitchen/cook-book.pdf" target="_blank">Cook Book</a></p>';
  }

  //links
  if (getCookie("kettle-note") !== null) {
    modalContents +=
      '<p><a href="images/link/kettle-note.pdf" target="_blank">Kettle Notes</a></p>';
  }
  if (getCookie("riddle-book") !== null) {
    modalContents +=
      '<p><a href="images/link/riddle-book.pdf" target="_blank">Riddle Book</a></p>';
  }
  if (getCookie("martha-note") !== null) {
    modalContents +=
      '<p><a href="images/tavern/martha-note.png" target="_blank">Martha Note</a></p>';
  }

  //tavern
  if (getCookie("glass-note") !== null) {
    modalContents +=
      '<p><a href="images/tavern/decipher.png" target="_blank">Note in bottle</a></p>';
  }

  //library

  if (getCookie("loose-recipe") !== null) {
    modalContents +=
      '<p><a href="images/library/missing-recipe.png" target="_blank">Loose Recipe</a></p>';
  }

  if (getCookie("recipe-codes") !== null) {
    modalContents +=
      '<p><a href="images/library/recipe-codes.png" target="_blank">Recipe Codes</a></p>';
  }

  if (getCookie("globe") !== null) {
    modalContents +=
      '<p><a href="images/tavern/decipher.png" target="_blank">Globe</a></p>';
  }

  modalContents += "<p><b>Equipment </b></p>";
  modalContents += "<p id='current-item'>Current Item: Empty</p>";

  //tavern
  if (getCookie("spectacles") !== null) {
    modalContents +=
      "<p><a onClick=\"selectItem('spectacles','Spectacles')\" target=\"_blank\">Spectacles</a></p>";
  }
  if (getCookie("hammer") !== null) {
    modalContents +=
      "<p><a onClick=\"selectItem('hammer','Hammer')\" target=\"_blank\">Hammer</a></p>";
  }
  if (getCookie("library-key") !== null) {
    modalContents +=
      "<p><a onClick=\"selectItem('library-key','Library Key')\" target=\"_blank\">Library Key</a></p>";
  }
  if (getCookie("tavern-key") !== null) {
    modalContents +=
      "<p><a onClick=\"selectItem('tavern-key','Tavern Key')\" target=\"_blank\">Tavern Key</a></p>";
  }
  if (getCookie("flint") !== null) {
    modalContents +=
      "<p><a onClick=\"selectItem('flint','Flint and Steel')\" target=\"_blank\">Flint and Steel</a></p>";
  }
  if (getCookie("take-final-meal") !== null) {
    modalContents +=
      "<p><a onClick=\"selectItem('take-final-meal','Pollastro Arrosto')\" target=\"_blank\">Pollastro Arrosto</a></p>";
  }
  modalContents += "<p><b>Ingredients</b></p>";

  if (getCookie("orange-juice") !== null) {
    modalContents += "<p>half cup of Orange Juice</p>";
  }
  if (getCookie("chicken") !== null) {
    modalContents += "<p>2 pounds of Chicken</p>";
  }
  if (getCookie("blossom-water") !== null) {
    modalContents += "<p>1 tsp Orange Blossom Water</p>";
  }
  if (getCookie("sugar") !== null) {
    modalContents += "<p>1 tsp Sugar</p>";
  }
  if (getCookie("cinnamon") !== null) {
    modalContents += "<p>1 tsp Cinnamon</p>";
  }
  if (getCookie("goblet-water") !== null) {
    modalContents += "<p>Cup of Verjuice</p>";
  }

  document["getElementById"]("items")["innerHTML"] = modalContents;

  // set current item
  var currentItem = getCookie("currentItem");
  if (currentItem !== null) {
    document["getElementById"]("current-item")["innerHTML"] =
      "<p>Current Item: " + currentItem + "</p>";
  }

  $("#exampleModal").modal();
}

function moveKitchen() {
  console.log("Tavern");
  window.location.href = "/kitchen";
}

function moveTavern() {
  console.log("Tavern");
  window.location.href = "/tavern";
}

function moveLink() {
  console.log("Tavern");
  window.location.href = "/link";
}

function moveLibrary() {
  console.log("Tavern");
  window.location.href = "/library";
}

function navRoute(url = "/") {
  window.location.href = url;
}
