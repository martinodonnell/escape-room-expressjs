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
    const { popupType } = popupDetails[stage]
    const itemContent = genereateContentView(popupType, svgID, popupDetails, stage)

    markers.push({
      id: item.svgID,
      polylineRad: item.polylineRad,
      svgStyle: {
        // fill: "rgba(200, 0, 0, 0)",
        // stroke: "rgba(200, 0, 50, 0)",
        // strokeWidth: "2px",
        fill: 'rgba(200, 0, 0, 0.2)',
        stroke: 'rgba(200, 0, 50, 0.8)',
        strokeWidth: '2px'
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

const generatePasswordPopup = (svgID, singlePopupDetails, popupDetails, currentStage) => {
  const {
    cookieKey,
    title,
    description,
    answer,
    placeholder,
    image,
  } = singlePopupDetails

  var jsonPopupDetails = JSON.stringify(popupDetails).replace(/"/g, "'");
  var imageContent = ''
  if (image) {
    imageContent = `<img src="images/${image}" width="100%"></img>`
  }
  return `<div id=${svgID}-div>
            <h1>${title}</h1>
            <p>${description}</p>
            ${imageContent}
            <input type="text" id="${svgID}-input" placeholder="${placeholder}">
            <div id="${svgID}feedback" style="color:red;">
            </div>
            <a href="#" onClick="checkPassword('${svgID}','${answer}','${cookieKey}',${jsonPopupDetails}, ${currentStage})">Enter</a>
          </div>`;
};

const generateNavigationPopup = (svgID) => {
  return `<div id=${svgID}
            <b>Correct password, you can not move through time</b>
            <button class=button onclick=moveTavern()>
              Tavern
            </button>
            <button class=button onclick=moveLink()>
              Link
            </button>
            <button class=button onclick=moveLibrary()>
              Library
            </button>
          </div>`

}

const genereateContentView = (nextPopupType, svgID, popupDetails, stage, conditionalKey) => {
  var singlePopupDetail, afterText
  if (conditionalKey) {
    console.log("Conditional")
    singlePopupDetail = popupDetails[stage][conditionalKey]
  } else {
    singlePopupDetail = popupDetails[stage]
  }

  switch (nextPopupType) {
    case popupTypes.SIMPLE:
      return generateSimpleImageClickable(singlePopupDetail)

    case popupTypes.DESCRIPTION:
      return generateDescriptionPopup(singlePopupDetail)

    case popupTypes.NAVIGATION:
      return generateNavigationPopup(singlePopupDetail)

    case popupTypes.EQUITMENT:
      if (conditionalKey) {
        singlePopupDetail = popupDetails[stage][conditionalKey].afterText
      } else {
        afterText = popupDetails[stage + 1].text
      }

      return generateEquitmentPopup(svgID, singlePopupDetail, afterText)

    case popupTypes.EQUITMENTPICKEDUP:
      return generatePickedUpEquitmentPopup(svgID, singlePopupDetail)

    case popupTypes.PASSWORD:
      console.log(popupDetails)
      return generatePasswordPopup(svgID, singlePopupDetail, popupDetails, stage)

    case popupTypes.CONDITIONAL:
      const { itemNeed, isEquited } = singlePopupDetail
      var conditionalKey = conditionalKey = shouldTrueContionalContent(isEquited, itemNeed);
      const conditionalPopupType = popupDetails[stage][conditionalKey].popupType
      return genereateContentView(conditionalPopupType, svgID, popupDetails, stage, conditionalKey)
    default:
      console.log(`error generating ${nextPopupType} at stage ${stage}`, popupDetails)
      return ''

  }
}

const checkPassword = (svgID, answer, cookieKey, popupDetails, currentStage) => {
  if (isValidPassword(svgID, answer)) {

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

const generateEquitmentPopup = (svgID, popupDetail, afterText) => {
  const { title, description, cookieKey, imageURL, text } = popupDetail
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

const generatePickedUpEquitmentPopup = (svgID, popupDetail) => {
  const { title, description, imageURL, text } = popupDetail
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
      const { popupType } = popup
      if (popupType === popupTypes.EQUITMENT || popupType === popupTypes.PASSWORD) {
        const { stage, cookieKey } = popup
        updateMarkerWhenCookieExists(cookieKey, stage, popupDetails, svgID);
      } else if (popupType === popupTypes.CONDITIONAL) {
        const { stage, itemNeed, isEquited } = popup
        var conditionalKey = conditionalKey = shouldTrueContionalContent(isEquited, itemNeed);
        const conditionalPopupType = popup[conditionalKey].popupType

        const updatePopupView = genereateContentView(conditionalPopupType, svgID, popupDetails, stage, conditionalKey);
        updateMarker(svgID, updatePopupView);

        console.log(conditionalKey)
      }
    }

  })
});

const isValidPassword = (svgID, answer) => {
  return document["getElementById"](`${svgID}-input`)["value"].toUpperCase() ===
    `${answer.toUpperCase()}`;
}

function updateMarkerWhenCookieExists(cookieKey, stage, popupDetails, svgID) {
  if (getCookie(cookieKey)) {
    const nextStage = stage + 1;
    const nextPopupType = popupDetails[nextStage].popupType;
    const updatePopupView = genereateContentView(nextPopupType, svgID, popupDetails, nextStage);
    updateMarker(svgID, updatePopupView);
  }
}

function shouldTrueContionalContent(isEquited, itemNeed) {
  if (isEquited) {
    if (getCookie('currentItem') === itemNeed) {
      return 'truePopup';
    }
  }
  else {
    console.log(getCookie(itemNeed))
    if (getCookie(itemNeed)) {
      return 'truePopup';
    }
  }
  return 'falsePopup';
}

