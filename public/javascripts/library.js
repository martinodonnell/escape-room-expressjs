var globalPopup =
  '<h1>Globe</h1><a href="#" onClick="examineGlobe();">Examine the globe</a></div>';

var catPopup =
  '<h1>El Gato</h1><img src="images/library/el-cato.png" width="50%"><p id="cat-dialogue">Meow y Hola. Chicos y Chicas have nothing to fear. El gato del futuro is right about here. Robots from the future have come to end all life…. finally, I can escape my wife. Nukes have already begun and boy oh boy I’m craving for a bun. I’m but a humble gato. Feed El Gato the Recipe of Time. But please remember no whiskey or wine</p><div id="flint-a" ><a  href="#" onClick="takeFlint();">Take the flint</a></div>';

var catPopupFlint =
  '<h1>El Gato</h1><img src="images/library/el-cato.png" width="50%"><p id="cat-dialogue">Meow y Hola. Chicos y Chicas have nothing to fear. El gato del futuro is right about here. Robots from the future have come to end all life…. finally, I can escape my wife. Nukes have already begun and boy oh boy I’m craving for a bun. I’m but a humble gato. Feed El Gato the Recipe of Time. But please remember no whiskey or wine</p><p>You took the flint from below the cat</p>';

var bookRecipe =
  '<div id="recipeDiv"><h1>Book</h1><a href="#" onClick="examineRecipeCodes();"><img src="images/library/recipe-codes.png" width="50%"></a> <div id="recipe-inputs">      <input type="text" id="windowPass" placeholder="Windows"><input type="text" id="shadesPass" placeholder="Shades">      <input type="text" id="shieldsPass" placeholder="Shields">      <input type="text" id="countinantsPass" placeholder="Countinants"> <div id="codeFeedback" style="color:red;"></div>      <a href="#" onClick="enterRecipePass();">Enter</a></div>    </div></div>';
var bookRecipeOpen =
  '<h1>Loose Recipe in book</h1><img src="images/library/missing-recipe.png" width="100%"><div id="loose-recipe-a"><a href="#" onClick="takeloose-recipe();">Take recipe</a></div>';
var bookRecipeOpenTaken =
  '<h1>Loose Recipe in book</h1><img src="images/library/missing-recipe.png" width="100%"><div id="loose-recipe-a">You took the recipe</div>';

var waterPopup =
  '<h1>Goblet of Verjuice</h1><img src="images/library/water-goblet.png" width="100%"><div id="water-goblet-a"><a href="#" onClick="takeWaterGoblet();">Take water in goblet</a></div>';
var waterPopupTaken =
  '<h1>Goblet of Verjuice</h1><img src="images/library/water-goblet.png" width="100%"><div id="water-goblet-a"><p>You took the water</p></div>';
var feedcat =
  '<div id="feed-cat"><a href="#" onClick="feedCat();">Feed cat</a></div>';

var catFinished =
  "<h1>El Gato</h1><img src='images/library/el-cato.png' width='50%'><p>Well done Adventurer you have saved all time and I have grown tried of the ability to rhyme.</p><p>The Code to the Time Machine: 1945</p><p>Vamos!</p>";

var timeMachinePopup =
  "<h1>Time Machine</h1><input type='text' id='timeMachinePasss' placeholder='Code'> <div id='timeMachineFeedback' style='color:red;'></div>      <a href='#' onClick='enterTimeMachinie();'>Enter</a>";
var libraryDoorPopup =
  "<button class='button' onclick='moveKitchen()'>Kitchen</button><button class='button' onclick='moveLink()'>Link</button><button class='button' onclick='moveTavern()'>Tavern</button>";

function enterTimeMachinie() {
  var code1 = document["getElementById"]("timeMachinePasss")["value"];

  if (code1 == "1945") {
    setCookieDB("finished");
    alert("congratulations. You finished the escape room");
  } else {
    document["getElementById"]("timeMachineFeedback")["innerHTML"] =
      "<b>That is the wrong code</b>";
  }
}

function feedCat() {
  setCookieDB("catFed");
  document["getElementById"]("cat-dialogue")["innerHTML"] = catFinished;

  document["getElementById"]("feed-cat")["innerHTML"] = "";
}

function enterRecipePass() {
  var code1 = document["getElementById"]("windowPass")["value"];
  var code2 = document["getElementById"]("shadesPass")["value"];
  var code3 = document["getElementById"]("shieldsPass")["value"];
  var code4 = document["getElementById"]("countinantsPass")["value"];
  if (code1 == "7" && code2 == "10" && code3 == "4" && code4 == "6") {
    setCookieDB("recipeBookCode");
    document["getElementById"]("recipeDiv")["innerHTML"] = bookRecipeOpen;
  } else {
    document["getElementById"]("codeFeedback")["innerHTML"] =
      "<b>That is the wrong code</b>";
  }
}

function takeloose-recipe() {
  setCookieDB("loose-recipe");
  document["getElementById"]("loose-recipe-a")["innerHTML"] =
    "<p>You took the loose page</p>";
}
function takeWaterGoblet() {
  setCookieDB("goblet-water");
  document["getElementById"]("water-goblet-a")["innerHTML"] =
    "<p>You took the water</p>";
}

function examineRecipeCodes() {
  setCookieDB("recipe-codes");
  window["open"]("images/library/recipe-codes.png");
}

function examineGlobe() {
  setCookieDB("globe");
  window["open"]("images/library/globe.png");
}

function takeFlint() {
  setCookieDB("flint", "Flint");
  document["getElementById"]("flint-a")["innerHTML"] =
    "<p>You took the flint from below the cat</p>";
}
const viewer = new PhotoSphereViewer.Viewer({
  container: document.querySelector("#viewer"),
  panorama: "images/library/library.png",
  caption: "Library",
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
            id: "cat-svg",
            polylineRad: [
              [5.873776795590482, -0.17944627429693938],
              [5.873876795590482, -0.1793462742969394],
              [5.889287242463376, -0.18169739940744156],
              [5.902893621606412, -0.1684011367799274],
              [5.914523694027906, -0.09648062325633866],
              [5.919845057000979, -0.17392728372398492],
              [5.9424288014618, -0.28535387874338625],
              [5.924117722555317, -0.3230981060219329],
              [5.874804451973594, -0.32521860636764344],
              [5.8666088925944715, -0.17889547573726228],
            ],
            svgStyle: {
              fill: "rgba(200, 0, 0, 0)",
              stroke: "rgba(200, 0, 50, 0)",
              strokeWidth: "2px",
            },
            content: catPopup,
          },
          {
            id: "globe-svg",
            polylineRad: [
              [0.21687716687711023, -0.026572962340574158],
              [0.21697716687711022, -0.02647296234057416],
              [0.2596348381696651, 0.01559358801816213],
              [0.3051885935207857, -0.009504441421297694],
              [0.32933088624392726, -0.06133436092732558],
              [0.30980926447434176, -0.11578473301190795],
              [0.2631693414321978, -0.13935048467002198],
              [0.2323866753382756, -0.1318144776857466],
              [0.21089305351295806, -0.025387030086676532],
            ],
            svgStyle: {
              fill: "rgba(200, 0, 0, 0)",
              stroke: "rgba(200, 0, 50, 0)",
              strokeWidth: "2px",
            },
            content: globalPopup,
          },
          {
            id: "goblet-water-svg",
            polylineRad: [
              [1.0041177173191858, -0.3196730807709818],
              [1.0042177173191857, -0.3195730807709818],
              [1.026463146741226, -0.3095902023777142],
              [1.0525302264338363, -0.3221728201131293],
              [1.0351328674739135, -0.33914894336216106],
              [1.0363676047003645, -0.35707796208712317],
              [1.0413448502450926, -0.3681908048507847],
              [1.0151892352262208, -0.3702649651042742],
              [1.001635159355065, -0.3207800820774347],
            ],
            svgStyle: {
              fill: "rgba(200, 0, 0, 0)",
              stroke: "rgba(200, 0, 50, 0)",
              strokeWidth: "2px",
            },
            content: waterPopup,
          },
          {
            id: "book-svg",
            polylineRad: [
              [0.021967511870292864, -0.14181884999710914],
              [0.022067511870292864, -0.14171884999710915],
              [0.12869008096648357, -0.13941904785334258],
              [0.15263055103330253, -0.17076000894040222],
              [0.03417045710435491, -0.172630192686148],
              [0.01953072540076573, -0.15606325089908668],
            ],
            svgStyle: {
              fill: "rgba(200, 0, 0, 0)",
              stroke: "rgba(200, 0, 50, 0)",
              strokeWidth: "2px",
            },
            content: bookRecipe,
          },
          {
            id: "time-machine-svg",
            polylineRad: [
              [4.521601524854719, 0.0007777909982216169],
              [4.521701524854719, 0.000877790998221617],
              [4.547175524725352, -0.0015053206720645473],
              [4.612837019446686, 0.0628316969577758],
              [4.694432988255941, 0.05696918153226971],
              [4.732340825159866, 0.005638712762533027],
              [4.737248727703368, -0.0484678169071302],
              [4.758755375702415, -0.07144915505166405],
              [4.770741176199016, -0.0787650809654381],
              [4.77083269390994, -0.11816957910510362],
              [4.787687928792176, -0.143319419785916],
              [4.789030924885207, -0.21218082039980568],
              [4.790281508814836, -0.23622254915922158],
              [4.730506096109771, -0.23429095110396525],
              [4.675452029669146, -0.23734402915837838],
              [4.638803195418928, -0.22641034826801731],
              [4.592880069425679, -0.21359168552780194],
            ],
            svgStyle: {
              fill: "rgba(200, 0, 0, 0)",
              stroke: "rgba(200, 0, 50, 0)",
              strokeWidth: "2px",
            },
          },
          {
            id: "door-library",
            polylineRad: [
              [3.0109621932921553, 0.19395626256886223],
              [3.0110621932921555, 0.19405626256886221],
              [2.9032191611510716, 0.07529442641440487],
              [2.9007532022935862, -0.20444901673206894],
              [3.1370167058360905, -0.20462843760681637],
              [3.1326878617284564, 0.07599727576888626],
              [3.02256513515829, 0.19594280956651877],
              [3.0118345529309174, 0.11746774313752972],
              [3.013649619888812, 0.19622419739655572],
              [3.0182988271589295, 0.197272889776549],
              [3.026611402947256, 0.19816133624799637],
              [3.0443349517019693, 0.18249694323400023],
            ],
            svgStyle: {
              fill: "rgba(200, 0, 0, 0)",
              stroke: "rgba(200, 0, 50, 0)",
              strokeWidth: "2px",
            },
            content: libraryDoorPopup,
          },
        ],
      },
    ],
  ],
});

const markersPlugin = viewer.getPlugin(PhotoSphereViewer.MarkersPlugin);

markersPlugin.on("select-marker", (e, marker) => {
  if (getCookie("goblet-water") !== null) {
    markersPlugin.updateMarker({
      id: "goblet-water-svg",
      content: waterPopupTaken,
    });
  }

  if (getCookie("recipeBookCode") !== null) {
    if (getCookie("loose-recipe")) {
      markersPlugin.updateMarker({
        id: "book-svg",
        content: bookRecipeOpenTaken,
      });
    } else {
      markersPlugin.updateMarker({
        id: "book-svg",
        content: bookRecipeOpen,
      });
    }
  }

  if (getCookie("catFed") !== null) {
    markersPlugin.updateMarker({
      id: "cat-svg",
      content: catFinished,
    });
    markersPlugin.updateMarker({
      id: "time-machine-svg",
      content: timeMachinePopup,
    });
  } else {
    var catExtraContent = "";

    if (getCookie("flint") !== null) {
      catExtraContent = catPopupFlint;
    } else {
      catExtraContent = catPopup;
    }

    if (getCookie("currentItem") === "take-final-meal") {
      catExtraContent += feedcat;
    }
    markersPlugin.updateMarker({
      id: "cat-svg",
      content: catExtraContent,
    });
  }
});
