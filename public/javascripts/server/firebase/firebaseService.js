const firebaseCommon = require("./common");
const getRoomReference = firebaseCommon.getRoomReference;
const getAvailableRoomsReference = firebaseCommon.getAvailableRoomsReference;
const getRoomCookieReference = firebaseCommon.getRoomCookieReference;

const addPlayerToRoom = (roomID, playerName) => {
  const playerID = Math.round(Math.random() * 10000000);

  getRoomReference(roomID).child(`/players/${playerID}`).set({
    name: playerName,
  });

  return playerID;
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

const addPlayerToAvailableRooms = async (roomID, playerName) => {
  const validRoomID = await checkIfRoomExists(roomID);
  if (validRoomID) {
    const playerID = addPlayerToRoom(roomID, playerName);
    return {
      roomID: roomID,
      playerID: playerID,
      playerName: playerName,
    };
  } else {
    console.log("Room doesn't exist");
    return { error: "Room doesn't exist" };
  }
};

const createNewRoom = () => {
  console.log("Create Room");
  const roomID = Math.round(Math.random() * 10000000);

  getAvailableRoomsReference().child(`@${roomID}`).set({
    id: roomID,
  });

  getRoomReference(roomID).update({
    date: new Date(),
  });

  return roomID;
};

const observeRoomCookies = (roomID) => {
  return getRoomCookieReference(roomID).once("value", (snapshot) => {
    return snapshot.val();
  });
};

const saveCookieInDatabase = (roomID, key, value) => {
  getRoomCookieReference(roomID).child(`${key}`).update({
    key: key,
    displayName: value,
  });
};

exports.checkIfRoomExists = checkIfRoomExists;
exports.addPlayerToAvailableRooms = addPlayerToAvailableRooms;
exports.createNewRoom = createNewRoom;
exports.observeRoomCookies = observeRoomCookies;
exports.saveCookieInDatabase = saveCookieInDatabase;
