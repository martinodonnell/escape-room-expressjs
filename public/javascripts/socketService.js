var socket = io.connect();

socket.on("new cookie", function (msg) {
  const { key, value } = JSON.parse(msg);
  console.log(key, value);
  setCookie(key, value);
});

const emitCookie = (roomID, key, value) => {
  const jsonCookieString = JSON.stringify({ key: key, value: value });
  socket.emit("new cookie", jsonCookieString);
 
  fetch(`/api/room/${roomID}/cookie`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${getCookie('authToken')}`
    },
    body: jsonCookieString,
  });
};
