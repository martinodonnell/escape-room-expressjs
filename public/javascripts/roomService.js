const serverAddress = "http://localhost:3000";

const checkIfRoomExists = async (roomID) => {
  const response = await fetch(`${serverAddress}/api//room/${roomID}/exists`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const jsonResponse = await response.json();
  return jsonResponse;
};
