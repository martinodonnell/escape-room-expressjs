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

exports.getRoomCookieReference = getRoomCookieReference;
exports.getRoomReference = getRoomReference;
exports.getAvailableRoomsReference = getAvailableRoomsReference;
