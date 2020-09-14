const pictureManPopup =
  "<p>You find some writing behind the picture</p><b>A2</b>";
const animalPopup = "<p>You find some writing behind the picture</p><b>B2</b>";
const cornPopup = "<p>You find some writing on the corn</p><b>M2</b>";
const blueClothPopup = "<p>You find some writing behind the cloth</p><b>A4</b>";
const tridentPopup = "<p>You find some writing on the trident</p><b>V5</b>";

var riddleBookPopup =
  '<h1>Book of riddles</h1><a href="#" onClick="openRiddleBook();">Examinie</a>';

var kettlePopup =
  '<div id=kettleDiv><h1>Kettle with lock on bottom</h1><p>Enter the code to open the kettle</p><input type="text" id="kettlePass" placeholder="Enter Unlock Code"><div id="kettleFeedback" style="color:red;"></div><a href="#" onClick="enterKettleCode();">Enter</a></div>';
var kettleOpenPopup =
  '<h1>Note </h1><div id="glass-note-a"><a href="#" onClick="openKettleNote();"><img src="images/link/scroll-parchment.png" width="50%"><p>Examine</a></p></div>';

var cauldronPopup =
  '<div id=cauldronDiv><h1>Cauldron</h1><p>You find a lock behind the cauldron</p><input type="text" id="cauldronpass" placeholder="Enter Unlock Code"><div id="cauldronFeedback" style="color:red;"></div><a href="#" onClick="enterCauldronCode();">Enter</a></div>';
var cauldronPopupKey =
  '<h1>Cauldron</h1><p>There is a key in the safe</p><div id="cauldron-key-a"><a href="#" onClick="takeKey();">Take key</a></div>';
var cauldronPopupKeyTaken =
  '<h1>Cauldron</h1><div id="cauldron-key-a"><p>You put the key in your pocket</p></div>';

var sugarPopup =
  '<h1>Sugar</h1><img src="images/link/sugar.jpg" width="100%"><div id="sugar-a"><a href="#" onClick="takeSugar();">Take sugar</a></div>';
var sugarPopupTaken =
  '<h1>Sugar</h1><img src="images/link/sugar.jpg" width="100%"><div id="sugar-a"><p>You took some sugar</p></div>';

var cinnamonPopup =
  '<h1>Cinnamon Sticks</h1><img src="images/link/cinnamon.jpeg" width="100%"><div id="cinnamon-a"><a href="#" onClick="takeCinnamon();">Take some cinnamon sticks</a></div>';
var cinnamonPopupTaken =
  '<h1>Cinnamon Sticks</h1><img src="images/link/cinnamon.jpeg" width="100%"><div id="cinnamon-a"><p>You took a handful of cinnamon sticks</p></div>';

var lightCauldronPopup =
  '<div id="cauldronLightDiv"><a href="#" onClick="lightCauldron();">Light cauldron with flint and steel</a></div>';
var addIngradientsCauldronPopup =
  '<div id="cauldronAddIngred"><a href="#" onClick="addIngredients();">Add Ingredients to make Pollastro Arrosto</a></div>';

var madeFinalMealPopup =
  '<h1>Pollastro Arrosto</h1><img src="images/link/pollastro-arrosto.jpg" width="100%"><div id="pollastro-arrosto-a"><a href="#" onClick="takePollastroArrosto();">Take Meal</a></div>';
var madeFinalMealPopupTaken =
  "<div><p>You took the pollastro-arrosto. The cat can smell it</p></div>";

var linkDoorPopup =
  "<button class='button' onclick='moveKitchen()'>Kitchen</button><button class='button' onclick='moveTavern()'>Tavern</button><button class='button' onclick='moveLibrary()'>Library</button>";

function takePollastroArrosto() {
  setCookieDB("take-final-meal", "Pollastro Arrosto");
  document["getElementById"]("pollastro-arrosto-a")[
    "innerHTML"
  ] = madeFinalMealPopupTaken;
}
function addIngredients() {
  var bw = getCookie("blossom-water");
  var cn = getCookie("cinnamon");
  var oj = getCookie("orange-juice");
  var sg = getCookie("sugar");
  var ck = getCookie("chicken");
  var gw = getCookie("goblet-water");

  var list = [bw, cn, oj, sg, ck, gw];
  var counter = 0;
  list.map((item) => {
    if (item !== null) {
      counter++;
    }
  });

  if (counter == 6) {
    setCookieDB("makeFinalMeal");
    document["getElementById"]("cauldronAddIngred")[
      "innerHTML"
    ] = madeFinalMealPopup;
  } else {
    console.log("not all ingradients");
  }
}
function lightCauldron() {
  setCookieDB("lightCauldron");
  document["getElementById"]("cauldronLightDiv")[
    "innerHTML"
  ] = addIngradientsCauldronPopup;
}
function takeCinnamon() {
  setCookieDB("cinnamon");
  document["getElementById"]("cinnamon-a")["innerHTML"] =
    "<p>You took a handful of cinnamon sticks</p>";
}
function takeSugar() {
  setCookieDB("sugar");
  document["getElementById"]("sugar-a")["innerHTML"] =
    "<p>You took some sugar</p>";
}
function takeKey() {
  setCookieDB("tavern-key", "Tavern Key");
  document["getElementById"]("cauldron-key-a")["innerHTML"] =
    "<b>You put the key in your pocket</b>";
}
function enterCauldronCode() {
  console.log(document["getElementById"]("cauldronpass")["value"]);
  if (document["getElementById"]("cauldronpass")["value"] == "false") {
    setCookieDB("cauldronCode");
    document["getElementById"]("cauldronDiv")["innerHTML"] = cauldronPopupKey;
  } else {
    document["getElementById"]("cauldronFeedback")["innerHTML"] =
      "<b>That is the wrong code</b>";
  }
}

function enterKettleCode() {
  if (document["getElementById"]("kettlePass")["value"] == "A2B2M2A4V5") {
    setCookieDB("kettleCode");
    document["getElementById"]("kettleDiv")["innerHTML"] = kettleOpenPopup;
  } else {
    document["getElementById"]("kettleFeedback")["innerHTML"] =
      "<b>That is the wrong code</b>";
  }
}

function openKettleNote() {
  setCookieDB("kettle-note");
  window["open"]("images/link/kettle-note.pdf");
}

function openRiddleBook() {
  setCookieDB("riddle-book");
  window["open"]("images/link/riddle-book.pdf");
}

const viewer = new PhotoSphereViewer.Viewer({
  container: document.querySelector("#viewer"),
  panorama: "images/link/link.png",
  caption: "Link",
  navbar: [
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
  ],
  plugins: [
    [
      PhotoSphereViewer.MarkersPlugin,
      {
        markers: [
          {
            id: "picture-man-svg",
            polylineRad: [
              [4.737700160703204, 0.0172236271512769],
              [4.737800160703204, 0.0173236271512769],
              [4.745617427437654, -0.03784821675417893],
              [4.778789285460875, -0.03806943692142384],
              [4.779813216500193, -0.07542040562918184],
              [4.802555050846304, -0.07687752030852724],
              [4.81468240456215, -0.049163751401183786],
              [4.815999533544234, -0.016456089786621497],
              [4.841337003078306, -0.016501182608814835],
              [4.852079382624746, -0.08093321698989553],
              [4.855945796140837, 0.015083737121596386],
            ],
            svgStyle: {
              fill: "rgba(200, 0, 0, 0)",
              stroke: "rgba(200, 0, 50, 0)",
              strokeWidth: "2px",
            },
            content: pictureManPopup,
          },
          {
            id: "picture-animal-svg",
            polylineRad: [
              [4.945208981792439, 0.08421043176523257],
              [4.945308981792439, 0.08431043176523258],
              [5.019503348107808, 0.08450434517819971],
              [5.01859299489263, -0.015030425683614679],
              [4.94817113715, -0.013980749323732944],
            ],
            svgStyle: {
              fill: "rgba(200, 0, 0, 0)",
              stroke: "rgba(200, 0, 50, 0)",
              strokeWidth: "2px",
            },
            content: animalPopup,
          },
          {
            id: "corn-svg",
            polylineRad: [
              [1.395281091377321, 0.5425129861945572],
              [1.395381091377321, 0.5426129861945572],
              [1.6713862386935983, 0.5420912464195906],
              [1.6853073785076076, 0.4111869928154759],
              [1.60359128601576, 0.3383452353970764],
              [1.4911611024082185, 0.3556511616513418],
              [1.391684626490056, 0.40541263282918627],
              [1.3908065145393955, 0.5446998118368458],
            ],
            svgStyle: {
              fill: "rgba(200, 0, 0, 0)",
              stroke: "rgba(200, 0, 50, 0)",
              strokeWidth: "2px",
            },
            content: cornPopup,
          },
          {
            id: "blue-cloth-svg",
            polylineRad: [
              [2.48275310651872, 0.029024325914693172],
              [2.48285310651872, 0.02912432591469317],
              [2.650785816555889, 0.03013451395488853],
              [2.644545482178349, -0.08848774275503923],
              [2.5826973623896, -0.09970251191831325],
              [2.525447612749632, -0.08286531063608948],
              [2.4816512144080116, -0.07667965588689629],
            ],
            svgStyle: {
              fill: "rgba(200, 0, 0, 0)",
              stroke: "rgba(200, 0, 50, 0)",
              strokeWidth: "2px",
            },
            content: blueClothPopup,
          },
          {
            id: "trident-svg",
            polylineRad: [
              [0.6313316057092863, 0.16630536381008088],
              [0.6314316057092862, 0.16640536381008086],
              [0.7141586325995328, 0.18109537798797248],
              [0.7584964994610948, 0.16976781688845333],
              [0.7677560967948307, 0.138163194695069],
              [1.196921700551004, 0.18746389439944067],
              [1.1952800894158615, 0.1725653893202066],
              [0.7735231763381515, 0.12121657582632261],
              [0.7401070485470765, 0.07589747763417076],
              [0.6253192137635123, 0.06634143860971853],
              [0.6251401484044072, 0.16867623798727793],
            ],
            svgStyle: {
              fill: "rgba(200, 0, 0, 0)",
              stroke: "rgba(200, 0, 50, 0)",
              strokeWidth: "2px",
            },
            content: tridentPopup,
          },
          {
            id: "kettle-svg",
            polylineRad: [
              [4.682752247332864, -0.037217410011668006],
              [4.682852247332864, -0.037117410011668],
              [4.710215363504643, -0.029085249496135113],
              [4.732646862818719, -0.03981229235607575],
              [4.745383504306107, -0.143281755840738],
              [4.6747319564364815, -0.1493377977183148],
              [4.658330031229225, -0.09983468652745886],
              [4.6543470848019, -0.07716761061399069],
              [4.657492171938253, -0.05354173539178908],
            ],
            svgStyle: {
              fill: "rgba(200, 0, 0, 0)",
              stroke: "rgba(200, 0, 50, 0)",
              strokeWidth: "2px",
            },
            content: kettlePopup,
          },
          {
            id: "cauldron-svg",
            polylineRad: [
              [4.237020102893588, -0.1399985350091233],
              [4.237120102893588, -0.1398985350091233],
              [4.32597119576795, -0.13986388125739246],
              [4.329332822424835, -0.19508971957526366],
              [4.24758281776756, -0.20142277528431451],
              [4.235837940393109, -0.13641327820447935],
            ],
            svgStyle: {
              fill: "rgba(200, 0, 0, 0)",
              stroke: "rgba(200, 0, 50, 0)",
              strokeWidth: "2px",
            },
            content: cauldronPopup,
          },
          {
            id: "door-svg",
            polylineRad: [
              [0.0035546486114973676, 0.08197453815893052],
              [0.0036546486114973674, 0.08207453815893052],
              [0.03907450722416124, 0.13243237817385367],
              [0.12201297283529497, 0.15512397430825486],
              [0.19135346516832313, 0.13649237983327778],
              [0.2340312695278746, 0.0701668522789678],
              [0.22680202313834846, -0.2926086160518897],
              [0.018355637226447143, -0.27825834000278404],
            ],
            svgStyle: {
              fill: "rgba(200, 0, 0, 0)",
              stroke: "rgba(200, 0, 50, 0)",
              strokeWidth: "2px",
            },
            content: linkDoorPopup,
          },
          {
            id: "book-svg",
            polylineRad: [
              [4.9008742213548935, -0.10003900095265594],
              [4.900974221354893, -0.09993900095265594],
              [4.883389872409678, -0.14707958620983552],
              [5.017157161729363, -0.14805948220812604],
              [5.02809771266077, -0.0919555604320168],
            ],
            svgStyle: {
              fill: "rgba(200, 0, 0, 0)",
              stroke: "rgba(200, 0, 50, 0)",
              strokeWidth: "2px",
            },
            content: riddleBookPopup,
          },
          {
            id: "sugar-svg",
            polylineRad: [
              [3.1030840354131572, -0.13261255717642384],
              [3.1031840354131575, -0.13251255717642385],
              [3.169265115879142, -0.1334451323756407],
              [3.1734656099557106, -0.19169145767268225],
              [3.10805472094562, -0.198464625961019],
              [3.0999233287435897, -0.13021076708837676],
            ],
            svgStyle: {
              fill: "rgba(200, 0, 0, 0)",
              stroke: "rgba(200, 0, 50, 0)",
              strokeWidth: "2px",
            },
            content: sugarPopup,
          },
          {
            id: "cinnamon-svg",
            polylineRad: [
              [3.541705280476011, -0.047797976861321256],
              [3.5418052804760114, -0.047697976861321253],
              [3.6088032103665477, -0.04768471883877923],
              [3.609035855567734, -0.1060961056784564],
              [3.538033355094823, -0.105130502868781],
            ],
            svgStyle: {
              fill: "rgba(200, 0, 0, 0)",
              stroke: "rgba(200, 0, 50, 0)",
              strokeWidth: "2px",
            },
            content: cinnamonPopup,
          },
        ],
      },
    ],
  ],
});

const markersPlugin = viewer.getPlugin(PhotoSphereViewer.MarkersPlugin);

markersPlugin.on("select-marker", (e, marker) => {
  if (getCookie("kettleCode") !== null) {
    markersPlugin.updateMarker({
      id: "kettle-svg",
      content: kettleOpenPopup,
    });
  }
  if (getCookie("cinnamon") !== null) {
    markersPlugin.updateMarker({
      id: "cinnamon-svg",
      content: cinnamonPopupTaken,
    });
  }
  if (getCookie("sugar") !== null) {
    markersPlugin.updateMarker({
      id: "sugar-svg",
      content: sugarPopupTaken,
    });
  }
  if (getCookie("cauldronCode") !== null) {
    if (getCookie("tavern-key") !== null) {
      var extraContent = "";
      if (getCookie("take-final-meal") != null) {
        extraContent = madeFinalMealPopupTaken;
      } else if (getCookie("makeFinalMeal") != null) {
        extraContent = madeFinalMealPopup;
      } else if (getCookie("lightCauldron") != null) {
        extraContent = addIngradientsCauldronPopup;
      } else if (getCookie("currentItem") === "flint") {
        extraContent = lightCauldronPopup;
      }

      markersPlugin.updateMarker({
        id: "cauldron-svg",
        content: cauldronPopupKeyTaken + extraContent,
      });
    } else {
      markersPlugin.updateMarker({
        id: "cauldron-svg",
        content: cauldronPopupKey,
      });
    }
  } else {
    markersPlugin.updateMarker({
      id: "cauldron-svg",
      content: cauldronPopup,
    });
  }
});
