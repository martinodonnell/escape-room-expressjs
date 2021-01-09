var marthaPopup =
  '<h1>Martha</h1><a href="#" onClick="openMarthaNote();"><img src="images/tavern/martha-note.png" width="100%"></a>';
var jugPop =
  '<h1>Jug of Orange Blossom Water </h1><img src="images/tavern/orange-blossom-water.jpg" width="100%"><div id="orange-water-a"><a href="#" onClick="takeOrangeBlossomWater();">Take a glass</a></div>';
var jugPopTaken =
  '<h1>Jug of Orange Blossom Water </h1><img src="images/tavern/orange-blossom-water.jpg" width="100%"><div id="orange-water-a"><p>You now have a glass of orange blossom water</p></div>';

var glassBottleNote =
  '<h1>Jug of Orange Blossom Water </h1><img src="images/tavern/glass-with-note.jpg" width="100%"><div id="glass-note-a"><a href="#" onClick="takeGlassNote();">Examine the bottle</a></div>';

var spectaclesPopup =
  '<h1>Spectacles</h1><img src="images/tavern/spectacles.png" width="100%"><div id="spectacles-a"><a href="#" onClick="takeSpectacles();">Take spectacles</a></div>';
var spectaclesPopupTaken =
  '<h1>Spectacles</h1><img src="images/tavern/spectacles.png" width="100%"><div id="spectacles-a"><p>You already have the spectacles</p></div>';

var orangeJuicePopup =
  '<h1>Spectacles</h1><img src="images/tavern/orange-juice.png" width="100%"><div id="orange-juice-a"><a href="#" onClick="takeOrangeJuice();">Take Orange Juice</a></div>';
var orangeJuicePopupTaken =
  '<h1>Spectacles</h1><img src="images/tavern/orange-juice.png" width="100%"><div id="orange-juice-a"><p>You already have the orange juice</p></div>';

var chickenPopup =
  '<h1>Spectacles</h1><img src="images/tavern/chicken.png" width="100%"><div id="chicken-a"><a href="#" onClick="takeChicken();">Take Chicken</a></div>';
var chickenPopupTaken =
  '<h1>Spectacles</h1><img src="images/tavern/chicken.png" width="100%"><div id="chicken-a"><p>You already have the chicken</p></div>';

var catPopup = "<h1>It stares back</h1>";
var pawPrintPopups = "<h1>I wonder where it leads</h1>";

var chestPopup =
  '<div id="chest-div"><h1>Drawer</h1><p>You find a lock</p><img src="images/tavern/lock.png" width="100%"><input type="text" id="lockPass" placeholder="Enter Unlock Code"><div id="lockFeedback" style="color:red;"></div><a href="#" onClick="enterChestCode();">Enter</a></div></div>';
var chestPopupSpecs =
  '<div id="chest-div"><h1>Drawer</h1><p>You find a lock</p><img src="images/tavern/lock-code.png" width="100%"><input type="text" id="lockPass" placeholder="Enter Unlock Code"><div id="lockFeedback" style="color:red;"></div><a href="#" onClick="enterChestCode();">Enter</a></div></div>';

var chestHammerPopup =
  '<h1>Hammer</h1><img src="images/tavern/sledgehammer.jpg" width="100%"><div id="hammer-a"><a href="#" onClick="takeHammer();">Take hammer</a></div>';
var chestHammerPopupTaken =
  '<h1>Hammer</h1><img src="images/tavern/sledgehammer.jpg" width="100%"><div id="hammer-a"><p>You already have the hammer</p></div>';

var barrelPopup =
  '<div id="barrel-div"></div><h1>Barrel</h1><img src="images/tavern/wooden-barrel.jpg" width="100%"><div id="hammer-a"><p>Looks breakable</p></div></div>';
var barrelPopupHammer =
  '<div id="barrel-div"><h1>Barrel</h1><img src="images/tavern/wooden-barrel.jpg" width="100%"><div id="hammer-a"><p>Looks breakable</p><a href="#" onClick="breakBarrel();">Swing hammer at it</a></div></div>';
var barrelPopupKey =
  '<h1>Broken Barrel</h1><p>There is a key in the barrel</p><img src="images/tavern/broken-barrel.jpeg" width="100%"><div id="barrel-key-a"><a href="#" onClick="takeKey();">Take key</a></div>';
var barrelPopupKeyTaken =
  '<h1>Hammer</h1><img src="images/tavern/broken-barrel.jpeg" width="100%"><div id="barrel-key-a"><p>You put the key in your pocket</p></div>';

var tavernDoorPopup =
  "<button class='button' onclick='moveKitchen()'>Kitchen</button><button class='button' onclick='moveLink()'>Link</button><button class='button' onclick='moveLibrary()'>Library</button>";
function openMarthaNote() {
  setCookieDB("martha-note");
  window["open"]("images/tavern/martha-note.png");
}
function takeOrangeBlossomWater() {
  setCookieDB("blossom-water");
  document["getElementById"]("orange-water-a")["innerHTML"] =
    "<p>You now have a glass of orange blossom water</p>";
}

function takeGlassNote() {
  setCookieDB("glass-note");
  window["open"]("images/tavern/decipher.png");
}

function takeSpectacles() {
  setCookieDB("spectacles", "Spectacles");
  document["getElementById"]("spectacles-a")["innerHTML"] =
    "<p>You already have the spectacles</p>";
}

function takeOrangeJuice() {
  setCookieDB("orange-juice");
  document["getElementById"]("orange-juice-a")["innerHTML"] =
    "<p>You already have the orange juice</p>";
}

function takeChicken() {
  setCookieDB("chicken");
  document["getElementById"]("chicken-a")["innerHTML"] =
    "<p>You already have the chicken</p>";
}

function enterChestCode() {
  if (document["getElementById"]("lockPass")["value"] == "9048") {
    setCookieDB("chestunlock");
    document["getElementById"]("chest-div")["innerHTML"] = chestHammerPopup;
  } else {
    document["getElementById"]("lockFeedback")["innerHTML"] =
      "<b>That is the wrong code</b>";
  }
}

function takeHammer() {
  setCookieDB("hammer", "Hammer");
  document["getElementById"]("hammer-a")["innerHTML"] =
    "<p>You already have the hammer</p>";
}

function breakBarrel() {
  setCookieDB("barralBroken");
  document["getElementById"]("barrel-div")["innerHTML"] = barrelPopupKey;
}

function takeKey() {
  setCookieDB("library-key", "Library Key");
  document["getElementById"]("barrel-key-a")["innerHTML"] =
    "<b>You put the key in your pocket</b>";
}

const viewer = new PhotoSphereViewer.Viewer({
  container: document.querySelector("#viewer"),
  panorama: "images/tavern/tavern.png",
  caption: "Tavern",
  navbar: [
    "zoom",
    {
      id: "my-button",
      title: "Hello world",
      className: "custom-button",
      content: "Backpack",
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
            id: "martha-svg",
            polylineRad: [
              [6.072740604891886, -0.07862079359217478],
              [6.072840604891886, -0.07852079359217477],
              [5.973663084845157, -0.07311381761345515],
              [5.973663084845157, -0.05922372806972853],
              [6.063420669382176, -0.054743045721540096],
              [6.090314780762657, -0.04668731326155262],
              [6.086789918813201, -0.00598567355585633],
              [6.108010414114335, -0.004807696937974004],
              [6.116307164007321, -0.043304564583757976],
              [6.1437259349637, -0.13100062302939408],
              [6.136551126184788, -0.1989863405520511],
              [6.072740604891886, -0.19216957019959358],
              [6.068075892603807, -0.08091176059983685],
            ],
            svgStyle: {
              fill: "rgba(200, 0, 0, 0)",
              stroke: "rgba(200, 0, 50, 0)",
              strokeWidth: "2px",
            },
            content: marthaPopup,
          },
          {
            id: "jug-svg",
            polylineRad: [
              [0.013425943685960996, -0.1537801728025403],
              [0.013525943685960995, -0.15368017280254032],
              [0.0706776714591425, -0.15341585422034032],
              [0.08281190648013823, -0.1945687520320687],
              [0.06946304116781553, -0.22388693976973073],
              [0.016948378330596425, -0.222061592253326],
            ],
            svgStyle: {
              fill: "rgba(200, 0, 0, 0)",
              stroke: "rgba(200, 0, 50, 0)",
              strokeWidth: "2px",
            },
            content: jugPop,
          },
          {
            id: "bottle-note-svg",
            polylineRad: [
              [0.19814961247032106, -0.020780779626504486],
              [0.19824961247032105, -0.020680779626504487],
              [0.20098530160684863, -0.03835917435874703],
              [0.24619903266471932, -0.03672654264209374],
              [0.2456447298093846, -0.02167030755611865],
            ],
            svgStyle: {
              fill: "rgba(200, 0, 0, 0)",
              stroke: "rgba(200, 0, 50, 0)",
              strokeWidth: "2px",
            },
            content: glassBottleNote,
          },
          {
            id: "specs-svg",
            polylineRad: [
              [0.3838242328116641, -0.2652311372591192],
              [0.3839242328116641, -0.2651311372591192],
              [0.43587254710735185, -0.2621828841003011],
              [0.45410897742353173, -0.2818301829355765],
              [0.4023162686524999, -0.2925204056743458],
              [0.3817083015136231, -0.2774326133690741],
            ],
            svgStyle: {
              fill: "rgba(200, 0, 0, 0)",
              stroke: "rgba(200, 0, 50, 0)",
              strokeWidth: "2px",
            },
            content: spectaclesPopup,
          },
          {
            id: "libary-paw-prints-svg",
            polylineRad: [
              [1.0442984126346493, -0.48823021556350055],
              [1.0443984126346493, -0.48813021556350056],
              [1.0983943621390821, -0.4189486561344644],
              [1.2662051738812086, -0.3865582647813999],
              [1.2476152807998908, -0.4766692591485149],
              [1.0426565748904961, -0.5007852599155913],
            ],
            svgStyle: {
              fill: "rgba(200, 0, 0, 0)",
              stroke: "rgba(200, 0, 50, 0)",
              strokeWidth: "2px",
            },
            content: pawPrintPopups,
          },
          {
            id: "chest-svg",
            polylineRad: [
              [1.7840702166398792, -0.1417097810238621],
              [1.7841702166398792, -0.14160978102386212],
              [1.7861231984608692, -0.23514716203174468],
              [2.0964812716138788, -0.21570554202724956],
              [2.097089410414589, -0.12967862004177166],
            ],
            svgStyle: {
              fill: "rgba(200, 0, 0, 0)",
              stroke: "rgba(200, 0, 50, 0)",
              strokeWidth: "2px",
            },
            content: chestPopup,
          },
          {
            id: "orange-juice-svg",
            polylineRad: [
              [2.932085945305957, -0.15530310264344838],
              [2.932185945305957, -0.1552031026434484],
              [2.9542870768489697, -0.15518794003185876],
              [2.95475678972747, -0.21004441838857657],
              [2.927327059047241, -0.20778273343526132],
              [2.927148528702492, -0.15531847703835866],
            ],
            svgStyle: {
              fill: "rgba(200, 0, 0, 0)",
              stroke: "rgba(200, 0, 50, 0)",
              strokeWidth: "2px",
            },
            content: orangeJuicePopup,
          },
          {
            id: "chicken-svg",
            polylineRad: [
              [3.4459779447713026, -0.26065773354117083],
              [3.446077944771303, -0.26055773354117084],
              [3.5335649549102857, -0.2703781815961399],
              [3.5310165547352965, -0.32204605492070915],
              [3.44286084978435, -0.31271820620253776],
              [3.443772784350465, -0.25817912421590905],
            ],
            svgStyle: {
              fill: "rgba(200, 0, 0, 0)",
              stroke: "rgba(200, 0, 50, 0)",
              strokeWidth: "2px",
            },
            content: chickenPopup,
          },
          {
            id: "barrel-svg",
            polylineRad: [
              [4.579650639758252, -0.4790372420782467],
              [4.5797506397582515, -0.4789372420782467],
              [4.6379550225051736, -0.4518779911923452],
              [4.7182263145549905, -0.45223693855240876],
              [4.760893344446428, -0.48908847851493675],
              [4.766325643980248, -0.551473246913039],
              [4.711423881697684, -0.5913863327547548],
              [4.60682575328487, -0.5914574937784467],
              [4.569902342430456, -0.5456200043548205],
              [4.574811104084023, -0.4777990417168052],
            ],
            svgStyle: {
              fill: "rgba(200, 0, 0, 0)",
              stroke: "rgba(200, 0, 50, 0)",
              strokeWidth: "2px",
            },
            content: barrelPopup,
          },
          {
            id: "library-cat-svg",
            polylineRad: [
              [5.177122034891395, -0.16408997317541196],
              [5.177222034891395, -0.16398997317541197],
              [5.204672284041321, -0.16597207124606905],
              [5.200712668308972, -0.23057449977551903],
              [5.182690639068684, -0.22995369893901008],
            ],
            svgStyle: {
              fill: "rgba(200, 0, 0, 0)",
              stroke: "rgba(200, 0, 50, 0)",
              strokeWidth: "2px",
            },
            content: catPopup,
          },
          {
            id: "door-svg",
            polylineRad: [
              [1.088409673159412, -0.3113677150131311],
              [1.088509673159412, -0.3112677150131311],
              [1.0948703546918526, -0.032745781618402914],
              [1.1326490783082868, 0.06667323535066183],
              [1.2324860754880544, 0.15337545947923337],
              [1.365516449757895, 0.1655248638293163],
              [1.453081741756397, 0.14281637598254693],
              [1.509433543658663, 0.07270382179427126],
              [1.544716763557014, -0.005322316840815633],
              [1.5574702815573642, -0.12940059610799137],
              [1.5593278505456352, -0.24878898573990904],
              [1.5612145180703407, -0.36159648831978997],
            ],
            svgStyle: {
              fill: "rgba(200, 0, 0, 0)",
              stroke: "rgba(200, 0, 50, 0)",
              strokeWidth: "2px",
            },
            content: tavernDoorPopup,
          },
        ],
      },
    ],
  ],
});

const markersPlugin = viewer.getPlugin(PhotoSphereViewer.MarkersPlugin);

markersPlugin.on("select-marker", (e, marker) => {
  if (getCookie("blossom-water") !== null) {
    markersPlugin.updateMarker({
      id: "jug-svg",
      content: jugPopTaken,
    });
  }

  if (getCookie("spectacles") !== null) {
    markersPlugin.updateMarker({
      id: "specs-svg",
      content: spectaclesPopupTaken,
    });
  }
  if (getCookie("orange-juice") !== null) {
    markersPlugin.updateMarker({
      id: "orange-juice-svg",
      content: orangeJuicePopupTaken,
    });
  }
  if (getCookie("chicken") !== null) {
    markersPlugin.updateMarker({
      id: "chicken-svg",
      content: chickenPopupTaken,
    });
  }

  if (getCookie("chestunlock") === null) {
    if (getCookie("currentItem") === "spectacles") {
      markersPlugin.updateMarker({
        id: "chest-svg",
        content: chestPopupSpecs,
      });
    } else {
      markersPlugin.updateMarker({
        id: "chest-svg",
        content: chestPopup,
      });
    }
  } else {
    if (getCookie("hammer") !== null) {
      markersPlugin.updateMarker({
        id: "chest-svg",
        content: chestHammerPopupTaken,
      });
    } else {
      markersPlugin.updateMarker({
        id: "chest-svg",
        content: chestHammerPopup,
      });
    }
  }

  console.log(getCookie("currentItem"));
  if (getCookie("barralBroken") === null) {
    if (getCookie("currentItem") === "hammer") {
      markersPlugin.updateMarker({
        id: "barrel-svg",
        content: barrelPopupHammer,
      });
    } else {
      markersPlugin.updateMarker({
        id: "barrel-svg",
        content: barrelPopup,
      });
    }
  } else {
    if (getCookie("library-key") !== null) {
      markersPlugin.updateMarker({
        id: "barrel-svg",
        content: barrelPopupKeyTaken,
      });
    } else {
      markersPlugin.updateMarker({
        id: "barrel-svg",
        content: barrelPopupKey,
      });
    }
  }
});
