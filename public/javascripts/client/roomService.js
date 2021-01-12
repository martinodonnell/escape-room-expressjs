const checkIfRoomExists = async (roomID) => {
  const response = await fetch(`/api/room/${roomID}/exists`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${getCookie('authToken')}`
    },
  });

  return await response.json();
};

const getRoomCookies = async (roomID) => {
  const response = await fetch(`/api/room/${roomID}/cookie`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${getCookie('authToken')}`
    },
  });

  return  await response.json();
};
