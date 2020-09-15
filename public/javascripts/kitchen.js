//config
const panorama = "images/kitchen/kitchen.jpg";
const panoramaCaption = "Kitchen";
const navbar = [
  "zoom",
  {
    id: "my-button",
    title: "Hello world",
    className: "custom-button",
    content: "Help",
    onClick: function () {
      showItems();
    },
  },
  "caption",
  "fullscreen",
];

const popupItems = {
  coffeeItem: {
    id: "coffee-svg",
    polylineRad: [
      [5.836808576486312, -0.23234285638042818],
      [5.836908576486311, -0.2322428563804282],
      [5.935220582100242, -0.2611664367527493],
      [5.931990433591741, -0.3493946946900097],
      [5.83879501997153, -0.34964392110965226],
      [5.8318590093529155, -0.2297270810209755],
    ],
    popupDetails: {
      title: "Coffee Tin",
      description: "Inside the container you find a rolled up piece of paper",
      cookieKey: "coffee-sheet",
      imageURL: "kitchen/an-clock.png",
      popupURL: "kitchen/an-clock.png",
    },
  },
  teaItem: {
    id: "tea-svg",
    polylineRad: [
      [5.9626289993213675, -0.24409727365869482],
      [5.962728999321367, -0.24399727365869484],
      [6.072740604891886, -0.25122030693504804],
      [6.06458357612883, -0.37257919547391594],
      [5.9582377369527135, -0.3646515983773233],
      [5.958237736952713, -0.24157318219001755],
    ],
    popupDetails: {
      title: "Tea Tin",
      description: "Inside the container you find a rolled up piece of paper",
      cookieKey: "tea-sheet",
      imageURL: "kitchen/an-the.png",
      popupURL: "kitchen/an-the.png",
    },
  },
  sugarItem: {
    id: "sugar-svg",
    polylineRad: [
      [6.083560624976641, -0.25093764347418834],
      [6.083660624976641, -0.25083764347418835],
      [6.1994927620989975, -0.254948075335689],
      [6.1994927620989975, -0.3683895843114844],
      [6.090681606520829, -0.37176848358107306],
      [6.076460102705467, -0.24831840200394217],
    ],
    popupDetails: {
      title: "Sugar Tin",
      description: "Inside the container you find a rolled up piece of paper",
      cookieKey: "sugar-sheet",
      imageURL: "kitchen/an-start.png",
      popupURL: "kitchen/an-start.png",
    },
  },
  recipeBook: {
    id: "book-table-svg",
    polylineRad: [
      [5.349878653490439, -0.46839011253088225],
      [5.349978653490439, -0.46829011253088226],
      [5.423206158447518, -0.4076311903110077],
      [5.547875989445483, -0.4359067013892606],
      [5.476658757378827, -0.506342373745996],
      [5.343801006147461, -0.4674246852005908],
    ],
    popupDetails: {
      title: "Recipe Book",
      description: "Book of recipes",
      cookieKey: "cook-book",
      imageURL: "kitchen/cookbook.pdf",
      popupURL: "kitchen/cookbook.pdf",
    },
  },
  kitchenNote: {
    id: "cubboard-1-item",
    polylineRad: [
      [0.3955333854101774, -0.6115991227306123],
      [0.3956333854101774, -0.6114991227306124],
      [0.5716481633521948, -0.5722588294059441],
      [0.5703178958718997, -0.846224132239414],
      [0.38987968658942684, -0.8886630453562061],
      [0.38669349622774646, -0.6131349183007804],
    ],
    popupDetails: {
      title: "Cupboard",
      description: "There's a scrunched up piece of paper",
      cookieKey: "kitchen-note",
      imageURL: "kitchen/kitchen-note.png",
      popupURL: "kitchen/scrunched-paper-ball.jpg",
    },
  },
};

const extremeMarker = {
  keypadItem: {
    id: "keypad-svg",
    cookieKey: "keypad",
    polylineRad: [
      [2.726763501813259, 0.08159094117953325],
      [2.726863501813259, 0.08169094117953325],
      [2.7916801713271027, 0.0851372330913347],
      [2.798959752003782, -0.017056454079283023],
      [2.7331988536460043, -0.014321491080146576],
      [2.723219543499507, 0.08525120501039374],
    ],
    popupType: "staged",
    stages: [
      {
        stage: 1,
        popup: {
          title: "Keypad",
          description: "Enter the code to <b>start</b> time travel",
          answer: "Start the clock",
          stage: 1,
          placeholder: "Enter Code",
          methodName: "methodCall",
        },
      },
    ],
  },
};

const openImage = (cookieKey, imageURL) => {
  setCookieDB(cookieKey);
  window["open"](`images/${imageURL}`);
};

const generateSimpleImageClickable = ({
  title,
  description,
  cookieKey,
  imageURL,
  popupURL,
}) => {
  var html = "";
  html += `<h1>${title}</h1>`;
  html += `<p>${description}</p>`;
  html += `<a href="#" onClick="openImage('${cookieKey}','${imageURL}')">`;
  html += `<img src="images/${popupURL}" width="50%"></a>`;
  return html;
};

const generatePopups = () => {
  var markers = [];
  Object.keys(popupItems).forEach((key) => {
    var item = popupItems[key];
    markers.push({
      id: item.id,
      polylineRad: item.polylineRad,
      svgStyle: {
        fill: "rgba(200, 0, 0, 0)",
        stroke: "rgba(200, 0, 50, 0)",
        strokeWidth: "2px",
      },
      content: generateSimpleImageClickable(item["popupDetails"]),
    });
  });

  Object.keys(extremeMarker).forEach((key) => {
    var item = extremeMarker[key];
    markers.push({
      id: item.id,
      polylineRad: item.polylineRad,
      svgStyle: {
        fill: "rgba(200, 0, 0, 0)",
        stroke: "rgba(200, 0, 50, 0)",
        strokeWidth: "2px",
      },
      content: generateEnterDigit(item),
    });
  });

  return markers;
};

const methodCall = (stage, answer, cookieKey) => {
  if (
    document["getElementById"](`stage${stage}`)["value"].toUpperCase() ==
    `${answer.toUpperCase()}`
  ) {
    setCookieDB(`${cookieKey}`);
    document["getElementById"](`${cookieKey}`)["innerHTML"] = keypadPopupNav;
  } else {
    document["getElementById"](`${cookieKey}feedback`)["innerHTML"] =
      "<b>That is the wrong code</b>";
  }
};

const generateEnterDigit = (item) => {
  const { cookieKey, stages } = item;
  const { stage, popup } = stages[0];
  const { title, description, answer, placeholder, methodName } = popup;

  return `<div id=${cookieKey}>
            <h1>${title}</h1>
            <p>${description}</p>
            <input type="text" id="stage${stage}" placeholder="${placeholder}">
            <div id="${cookieKey}feedback" style="color:red;">
            </div>
            <a href="#" onClick="${methodName}('${stage}','${answer}','${cookieKey}')">Enter</a>
          </div>`;
};

function updateKeypad() {
  if (getCookie("keypad") !== null) {
    return keypadPopupNav;
  }
  return null;
}

var keypadPopupNav =
  "<b>Correct password, you can not move through time</b><button class='button' onclick='moveTavern()'>Tavern</button><button class='button' onclick='moveLink()'>Link</button><button class='button' onclick='moveLibrary()'>Library</button>";

const viewer = new PhotoSphereViewer.Viewer({
  container: document.querySelector("#viewer"),
  panorama: panorama,
  caption: panoramaCaption,
  navbar: navbar,
  plugins: [
    [
      PhotoSphereViewer.MarkersPlugin,
      {
        markers: generatePopups(),
      },
    ],
  ],
});

const markersPlugin = viewer.getPlugin(PhotoSphereViewer.MarkersPlugin);

markersPlugin.on("select-marker", (e, marker) => {
  var keypadContents = updateKeypad();
  if (keypadContents !== null) {
    markersPlugin.updateMarker({
      id: "keypad-svg",
      content: keypadContents,
    });
  }
});
