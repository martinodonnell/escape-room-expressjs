const checkIfRoomExists = async (roomID) => {
  const response = await fetch(`/api//room/${roomID}/exists`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const jsonResponse = await response.json();
  return jsonResponse;
};
