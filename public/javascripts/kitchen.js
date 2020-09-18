const openImage = (cookieKey, imageURL) => {
  setCookieDB(cookieKey);
  window["open"](`images/${imageURL}`);
};

const pickupItem = (svgID, cookieKey, text) => {
  setCookieDB(cookieKey);
  document["getElementById"](`${svgID}-a`)["innerHTML"] = text
};

const generatePopups = () => {
  var markers = [];
  Object.keys(popupItems).forEach((key) => {
    var item = popupItems[key];
    var itemContent
    if (item.popupType === 'staged') {

      const { svgID, popupDetails } = item
      const firstPopupDetails = popupDetails[0]
      if (firstPopupDetails.popupType === 'equitment') {
        itemContent = generateEquitmentPopup(svgID, popupDetails, 0)
      } else {
        itemContent = generateSimpleImageClickable(item["popupDetails"])
      }
    }
    // if (item.popupType === 'password') {
    //   itemContent = generatePasswordPopup(item.stages[0])
    // } else if (item.popupType === 'equitment') {
    //   itemContent = generateEquitmentPopup(item.svgID, item["popupDetails"])
    // } else if (item.popupType === 'description') {
    //   itemContent = generateDescriptionPopup(item.svgID, item["popupDetails"])
    // } else {
    //   itemContent = generateSimpleImageClickable(item["popupDetails"])
    // }
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

const updateMarker = (svgID, content) => {
  markersPlugin.updateMarker({
    id: svgID,
    content: content,
  });

}

const generatePasswordPopup = ({
  stage,
  cookieKey,
  title,
  description,
  answer,
  placeholder,
  methodName,
  nextStagePopup,
}) => {
  return `<div id=${cookieKey}>
            <h1>${title}</h1>
            <p>${description}</p>
            <input type="text" id="stage${stage}" placeholder="${placeholder}">
            <div id="${cookieKey}feedback" style="color:red;">
            </div>
            <a href="#" onClick="${methodName}('${stage}','${answer}','${cookieKey}','${nextStagePopup}')">Enter</a>
          </div>`;
};

const generateEquitmentPopup = (svgID, popupDetails, currentStage) => {

  const { stage, title, description, cookieKey, imageURL, text } = popupDetails[currentStage]
  const afterText = popupDetails[currentStage + 1].text
  var html = "";
  html += ` <h1>${title}</h1>
            <h2>${description}</h2>
            <img src="images/${imageURL}" width="100%">
            <div id="${svgID}-a">
              <a href="#" onClick="pickupItem('${svgID}', '${cookieKey}', '${afterText}');">${text}</a>
            </div>`

  return html;
}

const generatePickedUpEquitmentPopup = (svgID, popupDetails) => {
  const { title, description, cookieKey, imageURL, text } = popupDetails
  console.log(popupDetails)
  var html = "";
  html += ` <h1>${title}</h1>
            <h2>${description}</h2>
            <img src="images/${imageURL}" width="100%">
            <div id="${svgID}-a">
              ${text}
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
    if (item.popupType === 'staged') {
      const { svgID } = item;
      for (var popup of item.popupDetails) {
        const { stage, cookieKey } = popup
        if (cookieKey) {
          if (getCookie(popup.cookieKey) !== null) {
            const updateContents = generatePickedUpEquitmentPopup(svgID, item.popupDetails[stage + 1])
            console.log(updateContents)
            updateMarker(svgID, updateContents)
          }
        }
      }
    }
    // if (item.popupType === 'password') {
    //   const { svgID, cookieKey } = item;
    //   const updateContents = item.stages[0].nextStagePopup
    //   updateMarker(cookieKey, svgID, updateContents)
    // } else if (item.popupType === 'equitment') {
    //   const { svgID, cookieKey } = item;
    //   const updateContents = generatePickedUpEquitmentPopup(svgID, item.popupDetails)
    //   updateMarker(cookieKey, svgID, updateContents)
    // }
  })
});
