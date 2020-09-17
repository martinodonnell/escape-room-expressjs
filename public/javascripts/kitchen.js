const openImage = (cookieKey, imageURL) => {
  setCookieDB(cookieKey);
  window["open"](`images/${imageURL}`);
};

const pickupItem = (cookieKey, content) => {
  setCookieDB(cookieKey);
  document["getElementById"](`${cookieKey}-a`)["innerHTML"] = content
};

const generatePopups = () => {
  var markers = [];
  Object.keys(popupItems).forEach((key) => {
    var item = popupItems[key];
    var itemContent
    if (item.popupType === 'password') {
      itemContent = generatePasswordPopup(item)
    } else if (item.popupType === 'equitment') {
      itemContent = generateEquitmentPopup(item["popupDetails"])
    } else if (item.popupType === 'description') {
      itemContent = generateDescriptionPopup(item["popupDetails"])
    } else {
      itemContent = generateSimpleImageClickable(item["popupDetails"])
    }
    markers.push({
      id: item.svgID,
      polylineRad: item.polylineRad,
      svgStyle: {
        fill: "rgba(200, 0, 0, 0)",
        stroke: "rgba(200, 0, 50, 0)",
        strokeWidth: "2px",
      },
      content: itemContent
    });
  });

  return markers;
};

const updateMarker = (cookieKey, svgID, content) => {
  if (getCookie(cookieKey) !== null) {
    markersPlugin.updateMarker({
      id: svgID,
      content: content,
    });
  }
}

const generatePasswordPopup = (item) => {
  const { cookieKey, stages } = item;
  const { stage, popup } = stages[0];
  const {
    title,
    description,
    answer,
    placeholder,
    methodName,
    nextStagePopup,
  } = popup;

  return `<div id=${cookieKey}>
            <h1>${title}</h1>
            <p>${description}</p>
            <input type="text" id="stage${stage}" placeholder="${placeholder}">
            <div id="${cookieKey}feedback" style="color:red;">
            </div>
            <a href="#" onClick="${methodName}('${stage}','${answer}','${cookieKey}','${nextStagePopup}')">Enter</a>
          </div>`;
};

const generateEquitmentPopup = ({ title, description, cookieKey, imageURL, textBefore, textAfter }) => {
  var html = "";
  console.log(imageURL)
  html += ` <h1>${title}</h1>
            <h2>${description}</h2>
            <img src="images/${imageURL}" width="100%">
            <div id="${cookieKey}-a">
              <a href="#" onClick="pickupItem('${cookieKey}','${textAfter}');">${textBefore}</a>
            </div>`

  return html;
}

const generatePickedUpEquitmentPopup = ({ title, description, cookieKey, imageURL, textAfter }) => {
  var html = "";
  console.log(imageURL)
  html += ` <h1>${title}</h1>
            <h2>${description}</h2>
            <img src="images/${imageURL}" width="100%">
            <div id="${cookieKey}-a">
              ${textAfter}
            </div>`

  return html;
}
const generateDescriptionPopup = ({ title, description }) => {
  var html = "";
  html += `<h1>${title}</h1>`
  html += `<h2>${description}</h2>`
  return html;
}

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

var wrongCodeHTML = "<b>That is the wrong code</b>";
const checkPassword = (stage, answer, cookieKey, nextStagePopup) => {
  if (
    document["getElementById"](`stage${stage}`)["value"].toUpperCase() ==
    `${answer.toUpperCase()}`
  ) {
    setCookieDB(`${cookieKey}`);
    document["getElementById"](`${cookieKey}`)["innerHTML"] =
      "<b>Correct password, you can not move through time</b><button class='button' onclick='moveTavern()'>Tavern</button><button class='button' onclick='moveLink()'>Link</button><button class='button' onclick='moveLibrary()'>Library</button>";
  } else {
    document["getElementById"](`${cookieKey}feedback`)[
      "innerHTML"
    ] = wrongCodeHTML;
  }
};

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
  Object.keys(popupItems).forEach((key) => {
    const item = popupItems[key]
    if (item.popupType === 'password') {
      const { svgID, cookieKey } = item;
      const updateContents = item.stages[0].popup.nextStagePopup
      updateMarker(cookieKey, svgID, updateContents)
    } else if (item.popupType === 'equitment') {
      const { svgID, cookieKey } = item;
      const updateContents = generatePickedUpEquitmentPopup(item.popupDetails)
      updateMarker(cookieKey, svgID, updateContents)
    }
  })
});
