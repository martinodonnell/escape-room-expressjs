const getRoomCookie = () => {
  return getCookie("roomID");
};

const getRoomCookieReference = (roomID) => {
  return getRoomReference(roomID).child("cookies");
};

const setRoomCookie = (roomID) => {
  setCookieDB("roomID", roomID);
};

const getRoomReference = (roomID) => {
  return firebase.database().ref().child(`room@${roomID}`);
};

const getAvailableRoomsReference = () => {
  return firebase.database().ref("availableRooms");
};

const checkIfRoomExists = async (roomID) => {
  console.log("Check Room", roomID);
  return getAvailableRoomsReference()
    .once("value")
    .then(function (snapshot) {
      var snapshotDictionary = snapshot.val();
      for (var item in snapshotDictionary) {
        if (item === `@${roomID}`) {
          return true;
        }
      }
      return false;
    });
};
