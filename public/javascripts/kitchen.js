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
    const item = popupItems[key]
    const { svgID, popupDetails } = item
    const stage = 0
    const { popupType } = popupDetails[stage].popupType
    const itemContent = genereateContentView(popupType, svgID, popupDetails, stage)

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

const generatePasswordPopup = (svgID, popupDetails, currentStage) => {
  const {
    cookieKey,
    title,
    description,
    answer,
    placeholder,
  } = popupDetails[currentStage]

  var jsonPopupDetails = JSON.stringify(popupDetails).replace(/"/g, "'");

  return `<div id=${svgID}-div>
            <h1>${title}</h1>
            <p>${description}</p>
            <input type="text" id="${svgID}-input" placeholder="${placeholder}">
            <div id="${svgID}feedback" style="color:red;">
            </div>
            <a href="#" onClick="checkPassword('${svgID}','${answer}','${cookieKey}',${jsonPopupDetails}, ${currentStage})">Enter</a>
          </div>`;
};

const genereateContentView = (nextPopupType, svgID, popupDetails, stage) => {
  if (nextPopupType === popupTypes.EQUITMENT) {
    return generateEquitmentPopup(svgID, popupDetails, stage)
  } else if (nextPopupType === popupTypes.EQUITMENTPICKEDUP) {
    return generatePickedUpEquitmentPopup(svgID, popupDetails[stage])
  } else if (nextPopupType === popupTypes.PASSWORD) {
    return generatePasswordPopup(svgID, popupDetails, stage)
  } else if (nextPopupType === popupTypes.SIMPLE) {
    return generateSimpleImageClickable(popupDetails[stage])
  } else if (nextPopupType === popupTypes.DESCRIPTION) {
    return generateDescriptionPopup(popupDetails[stage])
  } else {
    console.log("ERRRORORRRO", nextPopupType, stage, popupDetails)
    return ''
  }
}

const checkPassword = (svgID, answer, cookieKey, popupDetails, currentStage) => {
  const isValidPassword = document["getElementById"](`${svgID}-input`)["value"].toUpperCase() ===
    `${answer.toUpperCase()}`
  if (isValidPassword) {

    setCookieDB(`${cookieKey}`);

    const nextStage = currentStage + 1
    const nextPopupType = popupDetails[nextStage].popupType
    var nextContentView = genereateContentView(nextPopupType, svgID, popupDetails, nextStage)

    document["getElementById"](`${svgID}-div`)["innerHTML"] = nextContentView

  } else {
    document["getElementById"](`${svgID}feedback`)[
      "innerHTML"
    ] = "<b>That is the wrong code</b>";;
  }
};

const generateEquitmentPopup = (svgID, popupDetails, currentStage) => {

  const { title, description, cookieKey, imageURL, text } = popupDetails[currentStage]
  const afterText = popupDetails[currentStage + 1].text
  var html = "";
  html += `<div id=${svgID}-div>
             <h1>${title}</h1>
             <h2>${description}</h2>
             <img src="images/${imageURL}" width="100%">
             <div id="${svgID}-a">
               <a href="#" onClick="pickupItem('${svgID}', '${cookieKey}', '${afterText}');">${text}</a>
             </div>
           </div>`

  return html;
}

const generatePickedUpEquitmentPopup = (svgID, popupDetails) => {
  const { title, description, imageURL, text } = popupDetails
  var html = "";
  html += ` <div id=${svgID}-div> 
              <h1>${title}</h1>
              <h2>${description}</h2>
              <img src="images/${imageURL}" width="100%">
                <div id="${svgID}-a">
                ${text}
              </div>
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
  var html = `<h1>${title}</h1>
              <p>${description}</p>
              <a href="#" onClick="openImage('${cookieKey}','${imageURL}')">
              <img src="images/${popupURL}" width="50%"></a>`
  return html;
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
    const { svgID, popupDetails } = item;
    for (var popup of popupDetails) {
      const { stage, cookieKey, popupType } = popup
      if (popupType === popupTypes.EQUITMENT || popupType === popupTypes.PASSWORD) {
        if (getCookie(cookieKey)) {
          const nextStage = stage + 1
          const nextPopupType = popupDetails[nextStage].popupType
          const updatePopupView = genereateContentView(nextPopupType, svgID, popupDetails, nextStage)
          updateMarker(svgID, updatePopupView)
        }
      }
    }

  })
});
