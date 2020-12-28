const openImage = (cookieKey, imageURL) => {
  setCookieDB(cookieKey);
  window["open"](`images/${imageURL}`);
};

const genereateContentView = (nextPopupType, svgID, popupDetails, stage, conditionalKey) => {
  const singlePopupDetail = getSinglePopupDetails(conditionalKey, popupDetails, stage);

  switch (nextPopupType) {
    case popupTypes.SIMPLE:
      return generateSimpleImageClickable(singlePopupDetail)

    case popupTypes.DESCRIPTION:
      return generateDescriptionPopup(singlePopupDetail)

    case popupTypes.NAVIGATION:
      return generateNavigationPopup(singlePopupDetail)

    case popupTypes.EQUITMENT:
      return generateEquitmentPopup(svgID, singlePopupDetail, popupDetails, stage)

    case popupTypes.EQUITMENTPICKEDUP:
      return generatePickedUpEquitmentPopup(svgID, singlePopupDetail)

    case popupTypes.PASSWORD:
      return generatePasswordPopup(svgID, singlePopupDetail, popupDetails, stage)
    case popupTypes.FINISHED:
      localStorage.clear();
      window.location.href = "/complete";

      return
    case popupTypes.CONDITIONAL:
      const { itemNeed, isEquited } = singlePopupDetail
      conditionalKey = shouldTrueContionalContent(isEquited, itemNeed);
      const conditionalPopupType = popupDetails[stage][conditionalKey].popupType
      return genereateContentView(conditionalPopupType, svgID, popupDetails, stage, conditionalKey)
    case popupTypes.ADDINGREDIENTS:
      return generateAddIngredientsPopup(svgID, singlePopupDetail, popupDetails, stage)
    default:
      console.log(`error generating ${nextPopupType} at stage ${stage}`, popupDetails)
      return ''

  }
}

const updateMarker = (svgID, content) => {
  markersPlugin.updateMarker({
    id: svgID,
    content: content,
  });
}

const generateNavigationPopup = (svgID) => {
  return `<div id=${svgID}
            <b>Correct password, you can now move through time</b>
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

const checkGroupCookies = (svgID, answer, cookieKey, popupDetails, currentStage) => {
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

const generatePasswordPopup = (svgID, singlePopupDetails, popupDetails, currentStage) => {
  const {
    cookieKey,
    title,
    description,
    answer,
    placeholder,
    image,
    methodCall
  } = singlePopupDetails

  const jsonPopupDetails = JSON.stringify(popupDetails).replace(/"/g, "'");
  const imageContent = addImageIfTrue(image);
  return `<div id=${svgID}-div>
            <h1>${title}</h1>
            <p>${description}</p>
            ${imageContent}
            <input type="text" id="${svgID}-input" placeholder="${placeholder}">
            <div id="${svgID}feedback" style="color:red;">
            </div>
            <a href="#" onClick="${methodCall}('${svgID}','${answer}','${cookieKey}',${jsonPopupDetails}, ${currentStage})">Enter</a>
          </div>`;
};

const generateAddIngredientsPopup = (svgID, singlePopupDetail, popupDetails, currentStage) => {
  const {
    cookieKey,
    title,
    description,
    image,
    text,
  } = singlePopupDetail

  const jsonPopupDetails = JSON.stringify(popupDetails).replace(/"/g, "'");
  const imageContent = addImageIfTrue(image);
  return `<div id=${svgID}-div>
             <h1>${title}</h1>
             <h2>${description}</h2>
              ${imageContent}
             <div id="${svgID}-a">
               <a href="#" onClick="checkCookiesExist('${svgID}','${cookieKey}',${jsonPopupDetails}, ${currentStage});">${text}</a>
               <div id="${svgID}feedback" style="color:red;">
              </div>
           </div>`
}

const checkAllCookiesPresent = (itemsNeeded) => {
  var isValid = true
  itemsNeeded.forEach((cookieKey) => {
    if (getCookie(cookieKey) == null) {
      isValid = false
    }
  })
  return isValid
}
const checkCookiesExist = (svgID, cookieKey, popupDetails, currentStage) => {
  const { itemsNeeded, incorrectMessage } = popupDetails[currentStage]
  if (checkAllCookiesPresent(itemsNeeded)) {
    setCookieDB(`${cookieKey}`);

    const nextStage = currentStage + 1
    const nextPopupType = popupDetails[nextStage].popupType
    var nextContentView = genereateContentView(nextPopupType, svgID, popupDetails, nextStage)

    document["getElementById"](`${svgID}-div`)["innerHTML"] = nextContentView

  } else {
    document["getElementById"](`${svgID}feedback`)[
      "innerHTML"
    ] = incorrectMessage;
  }
};

const pickupItem = (svgID, cookieKey, popupDetails, currentStage) => {
  setCookieDB(cookieKey);
  const nextStage = currentStage + 1
  const nextPopupType = popupDetails[nextStage].popupType
  const nextContentView = genereateContentView(nextPopupType, svgID, popupDetails, nextStage)
  document["getElementById"](`${svgID}-div`)["innerHTML"] = nextContentView
};

const generateEquitmentPopup = (svgID, singlePopupDetails, popupDetails, currentStage) => {
  const {
    stage,
    popupType,
    title,
    description,
    cookieKey,
    imageURL,
    text
  } = singlePopupDetails

  const jsonPopupDetails = JSON.stringify(popupDetails).replace(/"/g, "'");
  const imageContent = addImageIfTrue(imageURL);

  return `<div id=${svgID}-div>
             <h1>${title}</h1>
             <h2>${description}</h2>
              ${imageContent}
             <div id="${svgID}-a">
               <a href="#" onClick="pickupItem('${svgID}','${cookieKey}',${jsonPopupDetails}, ${currentStage});">${text}</a>
             </div>
           </div>`
}

const generatePickedUpEquitmentPopup = (svgID, popupDetail) => {
  const { title, description, imageURL, text } = popupDetail
  const imageContent = addImageIfTrue(imageURL);

  var html = "";
  html += ` <div id=${svgID}-div> 
              <h1>${title}</h1>
              <h2>${description}</h2>
              ${imageContent}
              <div id="${svgID}-a">
                ${text}
              </div>
            </div>`


  return html;
}

const generateDescriptionPopup = ({ title, description, image }) => {
  const imageContent = addImageIfTrue(image);

  var html = `<div>
                <h1>${title}</h1>
                <p>${description}</p>
                ${imageContent}
              </div>`
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

const isValidPassword = (svgID, answer) => {
  return document["getElementById"](`${svgID}-input`)["value"].toUpperCase() ===
    `${answer.toUpperCase()}`;
}

const addImageIfTrue = (image) => {
  if (image) {
    return `<img src="images/${image}" width="100%"></img>`;
  }
  return '';
}

const getSinglePopupDetails = (conditionalKey, popupDetails, stage) => {
  if (conditionalKey) {
    return popupDetails[stage][conditionalKey];
  }
  else {
    return popupDetails[stage];
  }
}

const shouldTrueContionalContent = (isEquited, itemNeed) => {
  if (isEquited) {
    if (getCookie('currentItem') === itemNeed) {
      return 'truePopup';
    }
  }
  else {
    if (getCookie(itemNeed)) {
      return 'truePopup';
    }
  }
  return 'falsePopup';
}

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

const updateMarkerWhenCookieExists = (cookieKey, stage, popupDetails, svgID) => {
  if (getCookie(cookieKey)) {
    const nextStage = stage + 1;
    const nextPopupType = popupDetails[nextStage].popupType;
    const updatePopupView = genereateContentView(nextPopupType, svgID, popupDetails, nextStage);
    updateMarker(svgID, updatePopupView);
  }
}

function updateMarkerContent(popupType, popup, popupDetails, svgID) {
  if (popupType === popupTypes.EQUITMENT || popupType === popupTypes.PASSWORD || popupType == popupTypes.ADDINGREDIENTS) {
    const { stage, cookieKey } = popup;
    updateMarkerWhenCookieExists(cookieKey, stage, popupDetails, svgID);
  }
  else if (popupType === popupTypes.CONDITIONAL) {

    const { stage, itemNeed, isEquited } = popup;
    const conditionalKey = shouldTrueContionalContent(isEquited, itemNeed);
    const conditionalPopupType = popup[conditionalKey].popupType;
    const cookieKey = popup[conditionalKey].cookieKey;

    if (getCookie(cookieKey)) {
      updateMarkerWhenCookieExists(cookieKey, stage, popupDetails, svgID)
    } else {
      const updatePopupView = genereateContentView(conditionalPopupType, svgID, popupDetails, stage, conditionalKey);
      updateMarker(svgID, updatePopupView);
    }

  }
  else if (popupType === popupTypes.EMPTY) {
    const { stage, itemNeeded } = popup;
    if (getCookie(itemNeeded)) {
      const nextStage = stage + 1
      const nextPopupType = popupDetails[nextStage].popupType
      const nextPopupContent = genereateContentView(nextPopupType, svgID, popupDetails, nextStage)
      updateMarker(svgID, nextPopupContent)
    }
  } else {
    console.log("None", popupType)
  }
}

const markersPlugin = viewer.getPlugin(PhotoSphereViewer.MarkersPlugin);
markersPlugin.on("select-marker", (e, marker) => {
  Object.keys(popupItems).forEach((key) => {
    const item = popupItems[key]
    const { svgID, popupDetails } = item;
    if (svgID !== marker.id) {
      return
    }

    for (var popup of popupDetails) {
      const { popupType } = popup
      updateMarkerContent(popupType, popup, popupDetails, svgID);
      if (popupType == popupTypes.EMPTY) {
        const { itemNeeded } = popup
        if (getCookie(itemNeeded) === null) {
          return
        }
      }
    }
  })
});