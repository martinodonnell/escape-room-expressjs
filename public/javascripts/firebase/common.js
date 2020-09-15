var firebase = require("./setup").firebase;

const getRoomReference = (roomID) => {
  return firebase.database().ref().child(`room@${roomID}`);
};

const getAvailableRoomsReference = () => {
  return firebase.database().ref("availableRooms");
};

const getRoomCookieReference = (roomID) => {
  return getRoomReference(roomID).child("cookies");
};

const checkIfRoomExists = async (roomID) => {
  return getAvailableRoomsReference()
    .once("value")
    .then(function (snapshot) {
      var snapshotDictionary = snapshot.val();
      for (var item in snapshotDictionary) {
        if (item === `@${roomID}`) {
          return true;
        }
      }
      return false;
    });
};

exports.getRoomCookieReference = getRoomCookieReference;
exports.getRoomReference = getRoomReference;
exports.getAvailableRoomsReference = getAvailableRoomsReference;
exports.checkIfRoomExists = checkIfRoomExists;
