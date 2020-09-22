const serverAddress = "http://localhost:3000";

const setRoomIDCookie = (value) => {
  setCookie("roomID", value);
};

const setPlayerIDCookie = (value) => {
  setCookie("playerID", value);
};

const setPlayerNameCookie = (value) => {
  setCookie("playerName", value);
};

const navigateToWaitingRoom = () => {
  navRoute("/kitchen");
};

const clearCookies = () => {
  localStorage.clear();
}

const createRoom = () => {
  clearCookies()

  fetch(`${serverAddress}/api/room/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(async (res) => {
    const response = await res.json();
    var roomID = response["roomID"];
    if (roomID) {
      setRoomIDCookie(roomID);
    } else {
      alert("Error while creatinig room");
    }
  });
};

const handleJoinRoom = async () => {
  clearCookies()
  const roomID = document.querySelector("#form-room-code").value;
  const playerName = document.querySelector("#form-player-name").value;

  if (roomID.trim() == "" || playerName.trim() == "") {
    alert("form not completely filled");
    return;
  }

  const body = { playerName: playerName };

  fetch(`${serverAddress}/api/room/${roomID}/join`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then(async (res) => {
    const response = await res.json();
    if (response["error"]) {
      alert(response["error"]);
    } else {
      setRoomIDCookie(response["roomID"]);
      setPlayerIDCookie(response["playerID"]);
      setPlayerNameCookie(response["playerName"]);
      navigateToWaitingRoom();
    }
  });
};
