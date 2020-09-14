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

const buildEquitItem = (cookieKey, displayName) => {
  return `<p><a onClick=\"selectItem(${cookieKey},${displayName})\" target=\"_blank\">${displayName}</a></p>`;
};

const generateViewItemsModelHtml = () => {
  var modalContents = "";
  viewItems.forEach((item) => {
    if (getCookie(item.cookieKey) !== null) {
      modalContents += buildItemLine(item.imageURL, item.displayName);
    }
  });
  return modalContents;
};

const generateEquitableItems = () => {
  var modalContents = "";
  equipItems.forEach((item) => {
    if (getCookie(item.cookieKey) !== null) {
      modalContents += buildEquitItem(item.cookieKey, item.displayName);
    }
  });
  return modalContents;
};

const generateNoneClickableItems = () => {
  var modalContents = "";
  equipItems.forEach((item) => {
    if (getCookie(item.cookieKey) !== null) {
      modalContents += `<p>${item.displayName}</p>`;
    }
  });
  return modalContents;
};

function setSelectedItem() {
  var currentItem = getCookie("currentItem");
  if (currentItem !== null) {
    document["getElementById"]("current-item")["innerHTML"] =
      "<p>Current Item: " + currentItem + "</p>";
  }
}

function showItems() {
  var modalContents = "";
  modalContents += "<h3><b>Items you can view</b></h3>";
  modalContents += generateViewItemsModelHtml();

  modalContents += "<h3><b>Equipment </b></h3>";
  modalContents += "<p id='current-item'>Current Item: Empty</p>";
  modalContents += generateEquitableItems();

  modalContents += "<h3><b>Ingredients</b></h3>";
  modalContents += generateNoneClickableItems();

  document["getElementById"]("items")["innerHTML"] = modalContents;

  setSelectedItem();

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

const viewItems = [
  {
    cookieKey: "kitchenNote",
    imageURL: "kitchen/cook-book.png",
    displayName: "Kitchen Note",
  },
  {
    cookieKey: "sugar-sheet",
    imageURL: "kitchen/an-start.png",
    displayName: "Sugar Paper",
  },
  {
    cookieKey: "tea-sheet",
    imageURL: "kitchen/an-the.png",
    displayName: "Tea Paper",
  },
  {
    cookieKey: "coffee-sheet",
    imageURL: "kitchen/an-clock.png",
    displayName: "Coffee Paper",
  },
  {
    cookieKey: "cook-book",
    imageURL: "kitchen/cook-book.pdf",
    displayName: "Cook Book",
  },
  {
    cookieKey: "kettle-note",
    imageURL: "link/kettle-note.pdf",
    displayName: "Kettle Notes",
  },
  {
    cookieKey: "riddle-book",
    imageURL: "link/riddle-book.pdf",
    displayName: "Riddle Book",
  },
  {
    cookieKey: "martha-note",
    imageURL: "tavern/martha-note.png",
    displayName: "Martha Note",
  },
  {
    cookieKey: "glass-note",
    imageURL: "tavern/decipher.png",
    displayName: "Note in bottle",
  },
  {
    cookieKey: "loose-recipe",
    imageURL: "library/missing-recipe.png",
    displayName: "Loose Recipe",
  },
  {
    cookieKey: "recipe-codes",
    imageURL: "library/recipe-codes.png",
    displayName: "Recipe Codes",
  },
  {
    cookieKey: "globe",
    imageURL: "tavern/decipher.png",
    displayName: "Globe",
  },
];

const equipItems = [
  {
    cookieKey: "spectacles",
    displayName: "Spectacles",
  },
  {
    cookieKey: "hammer",
    displayName: "Hammer",
  },
  {
    cookieKey: "library-key",
    displayName: "Library Key",
  },
  {
    cookieKey: "tavern-key",
    displayName: "Tavern Key",
  },
  {
    cookieKey: "flint",
    displayName: "Flint and Steel",
  },
  {
    cookieKey: "take-final-meal",
    displayName: "Pollastro Arrosto",
  },
];

const noneClickableItems = [
  {
    cookieKey: "orange-juice",
    displayName: "Half cup of Orange Juice",
  },
  {
    cookieKey: "chicken",
    displayName: "2 pounds of Chicken",
  },
  {
    cookieKey: "blossom-water",
    displayName: "1 tsp Orange Blossom Water",
  },
  {
    cookieKey: "sugar",
    displayName: "1 tsp Sugar",
  },
  {
    cookieKey: "cinnamon",
    displayName: "1 tsp Cinnamon",
  },
  {
    cookieKey: "goblet-water",
    displayName: "Cup of Verjuice",
  },
];
