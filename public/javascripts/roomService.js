const serverAddress = "http://localhost:3000";

const checkIfRoomExists = (roomID) => {
  fetch(`${serverAddress}/api/room/${roomID}/exists`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(async (res) => {
    const response = await res.json();
  });
};
