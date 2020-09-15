const firebaseCommon = require("./firebaseCommon");
const getRoomCookieReference = firebaseCommon.getRoomCookieReference;

const observeRoomCookies = (roomID) => {
  getRoomCookieReference(roomID).on("value", function (snapshot) {
    var data = snapshot.val();
    if (data !== null) {
      Object.keys(data).forEach((key) => {
        setCookie(data[key].key, data[key].displayName);
      });
    }
  });
};

const saveCookieInDatabase = (roomID, key, value) => {
  getRoomCookieReference(roomID).child(`${key}`).update({
    key: key,
    displayName: value,
  });
};

exports.observeRoomCookies = observeRoomCookies;
exports.saveCookieInDatabase = saveCookieInDatabase;
