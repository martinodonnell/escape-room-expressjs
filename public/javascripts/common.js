function setCookie(key, value) {
  localStorage["setItem"](key, value);
}

function setCookieDB(key, value = true) {
  if (!getCookie(key)) {
    const roomID = getCookie("roomID");
    emitCookie(roomID, key, value);
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

const generateViewItemsHTML = (item) => {
  if (getCookie(item.cookieKey) !== null) {
    return buildItemLine(item.imageURL, item.displayName);
  }
  return "";
};

const generateEquitableItemsHTML = (item) => {
  if (getCookie(item.cookieKey) !== null) {
    return buildEquitItem(item.cookieKey, item.displayName);
  }
  return "";
};

const generateNoneClickableItemsHTML = (item) => {
  if (getCookie(item.cookieKey) !== null) {
    return `<p>${item.displayName}</p>`;
  }
  return "";
};

function setSelectedItem() {
  var currentItem = getCookie("currentItem");
  if (currentItem !== null) {
    document["getElementById"]("current-item")["innerHTML"] =
      "<p>Current Item: " + currentItem + "</p>";
  }
}

function showItems() {
  var itemContents = "";
  var equitContents = "";
  var noneClickableContent = "";

  viewItems.forEach((item) => {
    if (item.itemType === "view") {
      itemContents += generateViewItemsHTML(item);
    } else if (item.itemType === "equip") {
      equitContents += generateEquitableItemsHTML(item);
    } else if (item.itemType === "noneClickable") {
      noneClickableContent += generateNoneClickableItemsHTML(item);
    }
  });

  var modalContents = "";
  modalContents += "<h3><b>Items you can view</b></h3>";
  modalContents += itemContents;

  modalContents += "<h3><b>Equipment </b></h3>";
  modalContents += "<p id='current-item'>Current Item: Empty</p>";
  modalContents += equitContents;

  modalContents += "<h3><b>Ingredients</b></h3>";
  modalContents += noneClickableContent;

  document["getElementById"]("items")["innerHTML"] = modalContents;

  setSelectedItem();

  $("#exampleModal").modal();
}

function moveKitchen() {
  console.log("Move to kitchen");
  window.location.href = "/kitchen";
}

function moveTavern() {
  console.log("Move to tavern");
  window.location.href = "/tavern";
}

function moveLink() {
  console.log("Move to link");
  window.location.href = "/link";
}

function moveLibrary() {
  console.log("Move to library");
  window.location.href = "/library";
}

function navRoute(url = "/") {
  console.log(`Move to ${url}`);
  window.location.href = url;
}
