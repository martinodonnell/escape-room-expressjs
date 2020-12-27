const setRoomIDCookie = (value) => {
  setCookie("roomID", value);
};

const setPlayerIDCookie = (value) => {
  setCookie("playerID", value);
};

const setPlayerNameCookie = (value) => {
  setCookie("playerName", value);
};

const setAuthTokenCookie = (value) => {
  setCookie("authToken", value);
};

const getAuthTokenCookie = () =>  {
  return getCookie("authToken")
}

const navigateToWaitingRoom = () => {
  navRoute("/kitchen");
};

const clearCookies = () => {
  var authToken = getCookie('authToken');
  localStorage.clear();
  setCookie("authToken", authToken);
}

const createRoom = () => {
  clearCookies()
  
  fetch(`/api/room/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${getAuthTokenCookie()}`
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
    alert("Please fill out both fields");
    return;
  }

  const body = { playerName: playerName };

  fetch(`/api/room/${roomID}/join`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${getAuthTokenCookie()}`
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


fetch(`/api/auth/signin`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${getAuthTokenCookie()}`
  },
}).then(async (res) => {
  const response = await res.json();
  if (response["error"]) {
    alert(response["error"]);
  } else {
    await setAuthTokenCookie(response['user']['stsTokenManager']['accessToken'])
    console.log({"Authorization": `Bearer ${getAuthTokenCookie()}`})
  }
})
.catch((e) => {
  console.log(e)
  alert("Need to be logged in, please refresh on the home screen")
})