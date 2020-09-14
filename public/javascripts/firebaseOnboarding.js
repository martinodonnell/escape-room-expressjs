const handleJoinRoom = async () => {
  const roomID = document.querySelector("#form-room-code").value;
  const playerName = document.querySelector("#form-player-name").value;

  if (roomID.trim() == "" || playerName.trim() == "") {
    alert("form not completely filled");
    return;
  }

  console.log("Attempt join Room", roomID, playerName);
  const validRoomID = await checkIfRoomExists(roomID);
  if (validRoomID) {
    addPlayerToRoom(roomID, playerName);
    setRoomCookie(roomID);
    window.location.href = "/kitchen";
  } else {
    alert("Room doesn't exist");
  }
};

const createRoom = () => {
  console.log("Create Room");
  const roomID = Math.round(Math.random() * 10000000);

  getAvailableRoomsReference().child(`@${roomID}`).set({
    id: roomID,
  });

  getRoomReference(roomID).update({
    date: new Date(),
  });
};

const addPlayerToRoom = (roomID, playerName) => {
  const playerID = Math.round(Math.random() * 10000000);

  getRoomReference(roomID).child(`/players/${playerID}`).set({
    name: playerName,
  });
  setPlayerCookie(playerID, playerName);
};

const setPlayerCookie = (playerID, playerName) => {
  setCookieDB("playerID", {
    playerID: playerID,
    name: playerName,
  });
};
