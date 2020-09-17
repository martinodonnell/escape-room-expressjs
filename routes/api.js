var express = require("express");
var router = express.Router();
var firebaseService = require("../public/javascripts/firebase/firebaseService");

router.post("/room/create", async (req, res) => {
  const roomID = await firebaseService.createNewRoom();

  res.send({ roomID: roomID });
});

router.post("/room/:roomID/join", async (req, res) => {
  const roomID = req.params.roomID;
  const playerName = req.body.playerName;

  const jsonReturn = await firebaseService.addPlayerToAvailableRooms(
    roomID,
    playerName
  );
  res.send(jsonReturn);
});

router.get("/room/:roomID/exists", async (req, res) => {
  const roomID = req.params.roomID;
  const jsonReturn = await firebaseService.checkIfRoomExists(roomID);
  res.send(jsonReturn);
});

router.post("/room/:roomID/cookie", async (req, res) => {
  const roomID = req.params.roomID;
  const key = req.body.key;
  const value = req.body.value;

  await firebaseService.saveCookieInDatabase(roomID, key, value);
  res.send({ status: "200" });
});

router.get("/room/:roomID/cookie", async (req, res) => {
  const roomID = req.params.roomID;
  const response = await firebaseService
    .observeRoomCookies(roomID)
    .then((data) => {
      return data.val();
    });
  res.send(response);
});

module.exports = router;
