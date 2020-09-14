const observeRoomCookies = (roomID) => {
  getRoomCookieReference(roomID).on("value", function (snapshot) {
    var data = snapshot.val();

    Object.keys(data).forEach((key) => {
      setCookie(data[key].key, data[key].displayName);
    });
    return snapshot;
  });
};

function saveCookieInDatabase(key, value) {
  const roomID = getRoomCookie();

  if (roomID !== null) {
    getRoomCookieReference(roomID).child(`${key}`).update({
      key: key,
      displayName: value,
    });
  } else {
    console.log("No Room cookie. Didn't save");
  }
}
