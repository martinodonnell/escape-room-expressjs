var express = require("express");
var router = express.Router();
var firebaseService = require("../public/javascripts/firebase/firebaseService");

router.post("/room/create", async (req, res) => {
  const roomID = await firebaseService.createNewRoom();

  return res.send({ roomID: roomID });
});

router.post("/room/:roomID/join", async (req, res) => {
  const roomID = req.params.roomID;
  const playerName = req.body.playerName;

  const jsonReturn = await firebaseService.addPlayerToAvailableRooms(
    roomID,
    playerName
  );
  return res.send(jsonReturn);
});

router.get("/room/:roomID/exists", async (req, res) => {
  const roomID = req.params.roomID;
  const jsonReturn = await firebaseService.checkIfRoomExists(roomID);
  return res.send(jsonReturn);
});

router.post("/room/:roomID/cookie", async (req, res) => {
  const roomID = req.params.roomID;
  const key = req.body.key;
  const value = req.body.value;

  firebaseService.saveCookieInDatabase(roomID, key, value);
  return { status: "200" };
});

module.exports = router;
