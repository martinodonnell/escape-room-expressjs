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

const generatePopups = () => {
  var markers = [];
  Object.keys(popupItems).forEach((key) => {
    var item = popupItems[key];
    console.log(item)
    var itemContent
    if (item.popupType === 'password') {
      itemContent = generateEnterDigit(item)
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

const generateEnterDigit = (item) => {
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
    }
  })
});
