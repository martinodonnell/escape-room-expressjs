const firebaseCommon = require("./firebaseCommon");
const getRoomReference = firebaseCommon.getRoomReference;
const getAvailableRoomsReference = firebaseCommon.getAvailableRoomsReference;
const checkIfRoomExists = firebaseCommon.checkIfRoomExists;

const addPlayerToRoom = (roomID, playerName) => {
  const playerID = Math.round(Math.random() * 10000000);

  getRoomReference(roomID).child(`/players/${playerID}`).set({
    name: playerName,
  });

  return playerID;
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

exports.addPlayerToAvailableRooms = addPlayerToAvailableRooms;
exports.createNewRoom = createNewRoom;
