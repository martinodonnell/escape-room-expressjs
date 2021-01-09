const panorama = "images/library/library.png";
const panoramaCaption = "Library";

const popupItems = {
    catPopup: {
        svgID: "cat-svg",
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
        popupDetails: [
            {
                stage: 0,
                popupType: popupTypes.DESCRIPTION,
                title: "El Gato",
                description: "Meow y Hola. Chicos y Chicas have nothing to fear. El gato del futuro is right about here. Robots from the future have come to end all life…. finally, I can escape my wife. Nukes have already begun and boy oh boy I’m craving for a bun. I’m but a humble gato. Feed El Gato the Recipe of Time. But please remember no whiskey or wine",
                image: "library/el-cato.png",
            },
            {
                stage: 1,
                popupType: popupTypes.EMPTY,
                itemNeeded: 'makeFinalMeal'
            },
            {
                stage: 2,
                popupType: popupTypes.EQUITMENT,
                title: "El Gato",
                description: "Meow y Hola. Chicos y Chicas have nothing to fear. El gato del futuro is right about here. Robots from the future have come to end all life…. finally, I can escape my wife. Nukes have already begun and boy oh boy I’m craving for a bun. I’m but a humble gato. Feed El Gato the Recipe of Time. But please remember no whiskey or wine",
                cookieKey: "catfed",
                image: "library/el-cato.png",
                text: "Feed the cat"
            },
            {
                stage: 4,
                popupType: popupTypes.EQUITMENTPICKEDUP,
                title: "El Gato",
                description: "Well done Adventurer you have saved all time and I have grown tried of the ability to rhyme.</p><p>The Code to the Time Machine: 1945</p><p>Vamos!</p>",
                image: "library/el-cato.png",
                text: "",
            }
        ]
    },
    globePopup: {
        svgID: "globe-svg",
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
        popupDetails: [
            {
                stage: 0,
                popupType: popupTypes.SIMPLE,
                title: "Globe",
                description: "Big o' world",
                cookieKey: "globe",
                imageURL: "library/globe.png",
                popupURL: "library/globe.png",
            }
        ]
    },
    gobletWaterPopup: {
        svgID: "goblet-water-svg",
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
        popupDetails: [
            {
                stage: 0,
                popupType: popupTypes.EQUITMENT,
                title: "Goblet of Verjuice",
                description: "",
                cookieKey: "goblet-water",
                imageURL: "library/water-goblet.png",
                text: "Take the goblet"
            },
            {
                stage: 1,
                popupType: popupTypes.EQUITMENTPICKEDUP,
                title: "Goblet of Verjuice",
                description: "",
                imageURL: "library/water-goblet.png",
                text: "You took the water",
            }
        ]
    },
    libraryBookPopup: {
        svgID: "book-svg",
        polylineRad: [
            [0.021967511870292864, -0.14181884999710914],
            [0.022067511870292864, -0.14171884999710915],
            [0.12869008096648357, -0.13941904785334258],
            [0.15263055103330253, -0.17076000894040222],
            [0.03417045710435491, -0.172630192686148],
            [0.01953072540076573, -0.15606325089908668],
        ],
        popupDetails: [
            {
                stage: 0,
                popupType: popupTypes.PASSWORD,
                cookieKey: "book-password-recipe",
                title: "Book",
                description: "There is a code and lock on one of these pages\n",
                answer: "71046",
                placeholder: "Enter Code",
                image: 'library/recipe-codes.png',
                methodCall: 'checkPassword'
            },
            {
                stage: 1,
                popupType: popupTypes.EQUITMENT,
                title: "Loose Recipe in book",
                description: "",
                cookieKey: "final-recipe-page",
                imageURL: "library/missing-recipe.png",
                text: "Take recipe"
            },
            {
                stage: 1,
                popupType: popupTypes.EQUITMENTPICKEDUP,
                title: "Loose Recipe in book",
                description: "",
                imageURL: "library/missing-recipe.png",
                text: "You have the recipe"
            },
        ]
    },
    timeMachinePopup: {
        svgID: "time-machine-svg",
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
        popupDetails: [
            {
                stage: 0,
                popupType: popupTypes.EMPTY,
                itemNeeded: 'catfed'
            },
            {
                stage: 1,
                popupType: popupTypes.PASSWORD,
                cookieKey: "finished",
                title: "Time Machine",
                description: "",
                answer: "1945",
                placeholder: "Enter Code",
                methodCall: 'checkPassword'
            },
            {
                stage: 2,
                popupType: popupTypes.FINISHED,
            },
        ]
    },
    doorLibraryPopup: {
        svgID: "door-library",
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
        popupDetails: [
            {
                stage: 0,
                popupType: popupTypes.NAVIGATION,
            }
        ]
    },
    flintSteelPopup: {
        svgID: 'flint-steel-svg',
        polylineRad: [
            [1.496268864180407, -0.19002430326858866],
            [1.496368864180407, -0.18992430326858867],
            [1.6570236128182974, -0.1594466710455007],
            [1.6879915263955063, -0.1810571746456051],
            [1.5051554668200176, -0.21400171629005516],
            [1.4927981388841092, -0.19215554708229798]
        ],
        popupDetails: [
            {
                stage: 0,
                popupType: popupTypes.EQUITMENT,
                title: "Table of books",
                description: "You find some flint and steel on the table",
                cookieKey: "flint",
                text: "Take the flint"
            },
            {
                stage: 1,
                popupType: popupTypes.EQUITMENTPICKEDUP,
                title: "Table of books",
                description: "This table is messy",
                cookieKey: "flint",
                text: "This is where you found the flint"
            },
        ]
    },
}