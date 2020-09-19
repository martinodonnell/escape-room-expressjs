const popupTypes = {
    EQUITMENT: 'equitment',
    EQUITMENTPICKEDUP: 'equitment-pickedup',
    SIMPLE: 'simple',
    DESCRIPTION: 'description',
    PASSWORD: 'password'
}

const panorama = "images/link/link.png";
const panoramaCaption = "Link";
const navbar = [
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
];

const popupItems = {
    pictureManItem: {
        itemType: "view",
        svgID: "picture-man-svg",
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
        popupDetails: [
            {
                stage: 0,
                popupType: popupTypes.DESCRIPTION,
                title: "You find some writing behind the picture",
                description: "Code A2",
            }
        ],
    },
    animalItem: {
        itemType: "view",
        svgID: "picture-animal-svg",
        polylineRad: [
            [4.945208981792439, 0.08421043176523257],
            [4.945308981792439, 0.08431043176523258],
            [5.019503348107808, 0.08450434517819971],
            [5.01859299489263, -0.015030425683614679],
            [4.94817113715, -0.013980749323732944],
        ],
        popupDetails:
            [
                {
                    stage: 0,
                    popupType: popupTypes.DESCRIPTION,
                    title: "You find some writing behind the picture",
                    description: "B2",
                }
            ]
    },
    cornItem: {
        itemType: "view",
        svgID: "corn-svg",
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
        popupDetails: [
            {
                stage: 0,
                popupType: popupTypes.DESCRIPTION,
                title: "You find some writing on the corn",
                description: "M2",
            }
        ],
    },
    blueClothItem: {
        itemType: "view",
        svgID: "blue-cloth-svg",
        polylineRad: [
            [2.48275310651872, 0.029024325914693172],
            [2.48285310651872, 0.02912432591469317],
            [2.650785816555889, 0.03013451395488853],
            [2.644545482178349, -0.08848774275503923],
            [2.5826973623896, -0.09970251191831325],
            [2.525447612749632, -0.08286531063608948],
            [2.4816512144080116, -0.07667965588689629],
        ],
        popupDetails: [
            {
                stage: 0,
                popupType: popupTypes.DESCRIPTION,
                title: "You find some writing behind the cloth",
                description: "A4",
            }
        ]
    },
    tridentItem: {
        itemType: "view",
        svgID: "trident-svg",
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
        popupDetails: [
            {
                stage: 0,
                popupType: popupTypes.DESCRIPTION,
                title: "You find some writing on the trident",
                description: "V5",
            }
        ]
    },
    riddleBookItem: {
        svgID: "book-svg",
        itemType: "view",
        cookieKey: "riddle-book",
        imageURL: "link/riddleBook.pdf",
        displayName: "Coffee Paper",
        polylineRad: [
            [4.9008742213548935, -0.10003900095265594],
            [4.900974221354893, -0.09993900095265594],
            [4.883389872409678, -0.14707958620983552],
            [5.017157161729363, -0.14805948220812604],
            [5.02809771266077, -0.0919555604320168],
        ],
        popupDetails: [
            {
                stage: 0,
                popupType: popupTypes.SIMPLE,
                title: "Book of riddles",
                description: "RIDDLES!!!",
                cookieKey: "riddle-book",
                imageURL: "link/riddleBook.pdf",
                popupURL: "link/riddleBook.pdf",
            }
        ],
    },
    sugarItem: {
        itemType: "view",
        svgID: "sugar-svg",
        polylineRad: [
            [3.1030840354131572, -0.13261255717642384],
            [3.1031840354131575, -0.13251255717642385],
            [3.169265115879142, -0.1334451323756407],
            [3.1734656099557106, -0.19169145767268225],
            [3.10805472094562, -0.198464625961019],
            [3.0999233287435897, -0.13021076708837676],
        ],
        popupDetails: [
            {
                stage: 0,
                popupType: popupTypes.EQUITMENT,
                title: "Sugar",
                description: "Sweet!!",
                cookieKey: "sugar",
                imageURL: "link/sugar.jpg",
                text: "Take some"
            },
            {
                stage: 1,
                popupType: popupTypes.EQUITMENTPICKEDUP,
                title: "Sugar",
                description: "Sweet!!",
                imageURL: "link/sugar.jpg",
                text: "You should leave the rest for the next person",
            }
        ]

    },
    cinnamonItem: {
        itemType: "view",
        svgID: "cinnamon-svg",
        polylineRad: [
            [3.541705280476011, -0.047797976861321256],
            [3.5418052804760114, -0.047697976861321253],
            [3.6088032103665477, -0.04768471883877923],
            [3.609035855567734, -0.1060961056784564],
            [3.538033355094823, -0.105130502868781],
        ],
        popupDetails: [
            {
                stage: 0,
                popupType: popupTypes.EQUITMENT,
                title: "Cinnamon Sticks",
                description: "Maybe there are some pancakes about",
                cookieKey: "cinnamon",
                imageURL: "link/cinnamon.jpeg",
                text: "Take a couple sticks",
            },
            {
                stage: 1,
                popupType: popupTypes.EQUITMENTPICKEDUP,
                title: "Cinnamon Sticks",
                description: "Maybe there are some pancakes about",
                imageURL: "link/cinnamon.jpeg",
                text: "You took a handful of cinnamon sticks",
            }
        ],
    },
    kettleItem: {
        svgID: "kettle-svg",
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
        popupDetails: [
            {
                stage: 0,
                popupType: popupTypes.PASSWORD,
                cookieKey: "kettleCode",
                title: "Kettle with locked lid",
                description: "Enter the code to open the kettle",
                answer: "A2B2M2A4V5",
                placeholder: "Enter Code",
            },
            {
                stage: 1,
                popupType: popupTypes.SIMPLE,
                title: "Opened kettle",
                description: "You find a note in the kettle",
                cookieKey: "kettle-note",
                imageURL: "link/kettle-note.pdf",
                popupURL: "link/kettle-note.pdf",
            },
        ],
    },
    cauldronItem: {
        svgID: "cauldron-svg",
        polylineRad: [
            [4.237020102893588, -0.1399985350091233],
            [4.237120102893588, -0.1398985350091233],
            [4.32597119576795, -0.13986388125739246],
            [4.329332822424835, -0.19508971957526366],
            [4.24758281776756, -0.20142277528431451],
            [4.235837940393109, -0.13641327820447935],
        ],
        popupDetails: [
            {
                stage: 0,
                popupType: popupTypes.PASSWORD,
                cookieKey: "cauldronCode",
                title: "Cauldron",
                description: "You find a lock behind the cauldron",
                answer: "false",
                placeholder: "Enter Code",
            },
            {
                stage: 1,
                popupType: popupTypes.EQUITMENT,
                title: "Key",
                description: "There is a key in the safe",
                cookieKey: "tavern-key",
                imageURL: "link/safe-key.jpg",
                text: "Take the key for a door later"
            },
            {
                stage: 2,
                popupType: popupTypes.DESCRIPTION,
                title: "Empty Safe",
                description: "This is were I found the key",
                text: "This is were I found the key",
            }
        ],
    },


};