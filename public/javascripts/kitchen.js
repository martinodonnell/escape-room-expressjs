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
      } else if (firstPopupDetails.popupType === 'password') {
        itemContent = generatePasswordPopup(svgID, popupDetails, 0)
      } else {
        console.log("ERRORORORORR", item.popupType)

      }
    } else if (item.popupType === 'description') {
      const { popupDetails } = item
      itemContent = generateDescriptionPopup(popupDetails)
    }
    else if (item.popupType === 'simple') {
      const { popupDetails } = item
      itemContent = generateSimpleImageClickable(popupDetails)
    } else {
      console.log("ERRORORORORR", item.popupType)
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

const updateMarker = (svgID, content) => {
  markersPlugin.updateMarker({
    id: svgID,
    content: content,
  });

}

const generatePasswordPopup = (svgID, popupDetails, currentStage) => {

  const {
    stage,
    cookieKey,
    title,
    description,
    answer,
    placeholder,
    methodName,
    nextStagePopup,
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


const checkPassword = (svgID, answer, cookieKey, popupDetails, currentStage) => {
  const isValidPassword = document["getElementById"](`${svgID}-input`)["value"].toUpperCase() ==
    `${answer.toUpperCase()}`
  if (isValidPassword) {
    setCookieDB(`${cookieKey}`);
    document["getElementById"](`${svgID}-div`)["innerHTML"] = generateSimpleImageClickable(popupDetails[currentStage + 1])
  } else {
    document["getElementById"](`${svgID}feedback`)[
      "innerHTML"
    ] = "<b>That is the wrong code</b>";;
  }
};

const generateEquitmentPopup = (svgID, popupDetails, currentStage) => {

  const { stage, title, description, cookieKey, imageURL, text } = popupDetails[currentStage]
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
  const { title, description, cookieKey, imageURL, text } = popupDetails
  console.log(popupDetails)
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
  // Object.keys(popupItems).forEach((key) => {
  //   const item = popupItems[key]
  //   if (item.popupType === 'staged') {
  //     const { svgID } = item;
  //     for (var popup of item.popupDetails) {
  //       const { stage, cookieKey } = popup
  //       if (cookieKey) {
  //         if (getCookie(popup.cookieKey) !== null) {
  //           const updateContents = generatePickedUpEquitmentPopup(svgID, item.popupDetails[stage + 1])
  //           updateMarker(svgID, updateContents)
  //         }
  //       }
  //     }
  //   }
  //   // if (item.popupType === 'password') {
  //   //   const { svgID, cookieKey } = item;
  //   //   const updateContents = item.stages[0].nextStagePopup
  //   //   updateMarker(cookieKey, svgID, updateContents)
  //   // } else if (item.popupType === 'equitment') {
  //   //   const { svgID, cookieKey } = item;
  //   //   const updateContents = generatePickedUpEquitmentPopup(svgID, item.popupDetails)
  //   //   updateMarker(cookieKey, svgID, updateContents)
  //   // }
  // })
});
