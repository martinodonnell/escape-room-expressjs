const panorama = "images/kitchen/kitchen.jpg";
const panoramaCaption = "Kitchen";

const popupItems = {
  coffeeItem: {
    itemType: "view",
    svgID: "coffee-svg",
    polylineRad: [
      [5.864023930415806,-0.29511827431597504],[5.864123930415806,-0.29501827431597505],
      [5.903421051582216,-0.2830240866433247],[5.928210128556574,-0.290591004927778],
      [5.948942685551601,-0.30555738530771714],[5.9579086715784815,-0.32168957300653167],
      [5.9568936916509205,-0.3873373194916725],[5.956060094950779,-0.43130638590600023],
      [5.919593003152647,-0.4486131875276689],[5.887223365211162,-0.44509247644274863],
      [5.8581445165325965,-0.43412117046245546],[5.847325560185752,-0.4234292433690552],
      [5.847305729272504,-0.3236483964323402],[5.855224267597281,-0.2997600506001188],
    ],
    popupDetails: [
      {
        stage: 0,
        popupType: popupTypes.SIMPLE,
        title: "Coffee Tin",
        description: "Inside the container you find a rolled up piece of paper",
        cookieKey: "coffee-sheet",
        imageURL: "kitchen/an-clock.png",
        popupURL: "kitchen/an-clock.png",
      },
    ]
  },
  teaItem: {
    itemType: "view",
    svgID: "tea-svg",
    polylineRad: [
      [5.995650608726502,-0.3065333260483758],[5.995750608726501,-0.3064333260483758],
      [6.011953548046076,-0.3041742960910594],[6.033619540021002,-0.2941350485012777],
      [6.052745157797733,-0.29842649881237215],[6.05953658202837,-0.3111611191733181],
      [6.070740490392395,-0.3132904602448692],[6.080802412393424,-0.3241305484985426],
      [6.089965576021958,-0.3320291513981459],[6.089602731599142,-0.3593721351480237],
      [6.090053059029362,-0.4044087047981979],[6.089462943221636,-0.4474511828518324],
      [6.065371091957261,-0.4577644278621502],[6.030401897831315,-0.4635476362020885],
      [6.003362700364556,-0.46240743795130257],[5.986936517817149,-0.44798324249756627],
      [5.975577319720815,-0.4415319019608819],[5.973712217536609,-0.336540630082528],
      [5.993808254572171,-0.3035398499063324],
    ],
    popupDetails: [
      {
        stage: 0,
        popupType: popupTypes.SIMPLE,
        title: "Tea Tin",
        description: "Inside the container you find a rolled up piece of paper",
        cookieKey: "tea-sheet",
        imageURL: "kitchen/an-the.png",
        popupURL: "kitchen/an-the.png",
      }
    ],

  },
  sugarItem: {
    itemType: "view",
    svgID: "sugartin-svg",
    polylineRad: [
      [6.1282258814227095,-0.31361908422773976],[6.128325881422709,-0.3135190842277398],
      [6.169682867017644,-0.30766434882889016],[6.1922230129504765,-0.3113665939060475],
      [6.210881982730677,-0.32491996539405754],[6.227638562636135,-0.33839910652572125],
      [6.232958475947425,-0.3451585651464242],[6.2269277757373,-0.3560239633853779],
      [6.227503874779669,-0.44198556508019227],[6.21818393845681,-0.46642121052448315],
      [6.1909421808646234,-0.4696202490511716],[6.176738400479966,-0.47739654824785305],
      [6.150178796487843,-0.4733527482044906],[6.1261468796510785,-0.4729581289429996],
      [6.115237039488194,-0.4610657597777692],[6.10581703929774,-0.44915457141507575],
      [6.108652378241283,-0.34773335132331695],[6.123885056641237,-0.3148113444945657]
    ],
    popupDetails: [
      {
        stage: 0,
        popupType: popupTypes.SIMPLE,
        title: "Sugar Tin",
        description: "Inside the container you find a rolled up piece of paper",
        cookieKey: "sugar-sheet",
        imageURL: "kitchen/an-start.png",
        popupURL: "kitchen/an-start.png",
      }
    ],

  },
  recipeBook: {
    itemType: "view",
    svgID: "book-table-svg",
    polylineRad: [
      [5.335243977553599,-0.5695340159625726],
      [5.335343977553599,-0.5694340159625726],
      [5.359140121173211,-0.5355076583167864],
      [5.388942091894712,-0.527741825786157],
      [5.399771631966346,-0.5074709182329631],
      [5.426841264247563,-0.4942391426569568],
      [5.549052371180735,-0.5159124114036722],
      [5.551508169703133,-0.51969593368087],
      [5.520471785980531,-0.5589659198243302],
      [5.472534450539611,-0.6048636295446261],
      [5.330503307041436,-0.5712026809812683]
    ],
    popupDetails: [
      {
        stage: 0,
        popupType: popupTypes.SIMPLE,
        title: "Recipe Book",
        description: "Book of recipes",
        cookieKey: "cook-book",
        imageURL: "kitchen/cookbook.pdf",
        popupURL: "kitchen/cookbook-cover.png",
      }
    ]
  },
  kitchenNote: {
    itemType: "view",
    svgID: "cubboard-1-item",
    polylineRad: [
      [0.3955333854101774, -0.6115991227306123],
      [0.3956333854101774, -0.6114991227306124],
      [0.5716481633521948, -0.5722588294059441],
      [0.5703178958718997, -0.846224132239414],
      [0.38987968658942684, -0.8886630453562061],
      [0.38669349622774646, -0.6131349183007804],
    ],
    popupDetails: [
      {
        stage: 0,
        popupType: popupTypes.SIMPLE,
        title: "Cupboard",
        description: "There's a scrunched up piece of paper",
        cookieKey: "kitchen-note",
        imageURL: "kitchen/kitchen-note.png",
        popupURL: "kitchen/scrunched-paper-ball.jpg",
      }
    ]
  },
  keypadItem: {
    svgID: "keypad-svg",
    polylineRad: [
      [2.7147914495218752,0.0035261693506380976],
      [2.7148914495218754,0.0036261693506380974],
      [2.7916329690705184,0.0035326327492317677],
      [2.7927638209393297,-0.09005428464601839],
      [2.7229745976290225,-0.09189062099056522],
    ],
    popupDetails: [
      {
        stage: 0,
        popupType: popupTypes.PASSWORD,
        cookieKey: "keypad",
        title: "Keypad",
        description: "Where did I leave that code? I think I wrote it down somewhere",
        answer: "Start the clock",
        placeholder: "Enter Code",
        methodCall: 'checkPassword'
      },
      {
        stage: 1,
        popupType: popupTypes.NAVIGATION,
      },
    ],
  },
  outsideCat: {
    svgID: 'cat-outside-kitchen',
    polylineRad: [
      [4.828676147885055,-0.02361323929506587],
      [4.828776147885055,-0.02351323929506587],
      [4.850097922784916,-0.02267320309553633],
      [4.84920110929376,-0.06545612744065621],
      [4.828778756688577,-0.06536305950850729]
    ],
    popupDetails: [
    {
        stage: 0,
        popupType: popupTypes.DESCRIPTION,
        title: "You look out the window",
        description: "What's that out there?"
    }
  ]
  },
};