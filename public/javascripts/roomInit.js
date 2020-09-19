const validateRoom = () => {
  var browserUsersCookied = browserStoresCookies();
  if (browserUsersCookied) {
    var hasAccessToRoom = userHasAccessToRoom();
    if (hasAccessToRoom) {
      var roomID = hasValidRoomID();
      if (roomID) {
        console.log("ready to observe cookies");
        //observe rooms once to get all cookies
      }
    }
  }
};

const browserStoresCookies = () => {
  setCookie("checkCookiesAllowed", "true");
  if (getCookie("checkCookiesAllowed") == "") {
    alert(
      "Your browser will not accept our cookies, therefore unfortunately this game won't work"
    );
    return false;
  }
  return true;
};

const userHasAccessToRoom = () => {
  //check user can be in room
  const url = window.location.href.split("/");
  const page = url[url.length - 1];
  if (page === "tavern") {
    if (getCookie("tavern-key") === null) {
      moveLink();
      alert("You don't have access to the tavern yet");
      return false;
    }
  } else if (page === "link") {
    if (getCookie("keypad") === null) {
      moveKitchen();
      alert("You don't have access to the tavern yet");
      return false;
    }
  } else if (page === "library") {
    if (getCookie("library-key") === null) {
      moveTavern();
      alert("You don't have access to the library yet");
      return false;
    }
  }
  return true;
};

const hasValidRoomID = async () => {
  var roomID = getCookie("roomID");
  if (roomID) {
    if (await checkIfRoomExists(roomID)) {
      return roomID;
    }
  }

  alert("This room doesn't exists");
  navRoute();
  return false;
};

// validateRoom();
