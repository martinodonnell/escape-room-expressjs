var socket = io.connect();

const socketRoomID = getCookie('roomID')
const socketEvent = `new cookie`

socket.on(`${socketEvent}@${socketRoomID}`, function (msg) {
  const { key, value } = JSON.parse(msg);
  console.log("New cookie to add", key, value);
  setCookie(key, value);
  getNewCookies()
});

socket.on('connect', function (msg) {
  getNewCookies();
});

const getNewCookies = async () => {
  const dbCookies = await getRoomCookies(socketRoomID);
  Object.keys(dbCookies).map((key) => {
    const cookie = dbCookies[key]
    setCookie(cookie.key, cookie.displayName)
  })
}

const emitCookie = (roomID, key, value) => {
  const jsonCookieString = JSON.stringify({ key: key, value: value, roomID:roomID });
  socket.emit(socketEvent, jsonCookieString);
 
  fetch(`/api/room/${roomID}/cookie`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${getCookie('authToken')}`
    },
    body: jsonCookieString,
  });
};