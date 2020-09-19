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

const popupTypes = {
  EQUITMENT: 'equitment',
  EQUITMENTPICKEDUP: 'equitment-pickedup',
  SIMPLE: 'simple',
  DESCRIPTION: 'description',
  PASSWORD: 'password',
  NAVIGATION: 'navigation',
  CONDITIONAL: 'conditional',
  EMPTY: 'empty'
}


const viewItems = [
  {
    itemType: "view",
    cookieKey: "kitchenNote",
    imageURL: "kitchen/kitchen-note.png",
    displayName: "Kitchen Note",
  },
  {
    itemType: "view",
    cookieKey: "sugar-sheet",
    imageURL: "kitchen/an-start.png",
    displayName: "Sugar Paper",
  },
  {
    itemType: "view",
    cookieKey: "tea-sheet",
    imageURL: "kitchen/an-the.png",
    displayName: "Tea Paper",
  },
  {
    itemType: "view",
    cookieKey: "coffee-sheet",
    imageURL: "kitchen/an-clock.png",
    displayName: "Coffee Paper",
  },
  {
    itemType: "view",
    cookieKey: "cook-book",
    imageURL: "kitchen/cook-book.pdf",
    displayName: "Cook Book",
  },
  {
    itemType: "view",
    cookieKey: "kettle-note",
    imageURL: "link/kettle-note.pdf",
    displayName: "Kettle Notes",
  },
  {
    itemType: "view",
    cookieKey: "riddle-book",
    imageURL: "link/riddle-book.pdf",
    displayName: "Riddle Book",
  },
  {
    itemType: "view",
    cookieKey: "martha-note",
    imageURL: "tavern/martha-note.png",
    displayName: "Martha Note",
  },
  {
    itemType: "view",
    cookieKey: "glass-note",
    imageURL: "tavern/decipher.png",
    displayName: "Note in bottle",
  },
  {
    itemType: "view",
    cookieKey: "loose-recipe",
    imageURL: "library/missing-recipe.png",
    displayName: "Loose Recipe",
  },
  {
    itemType: "view",
    cookieKey: "recipe-codes",
    imageURL: "library/recipe-codes.png",
    displayName: "Recipe Codes",
  },
  {
    itemType: "view",
    cookieKey: "globe",
    imageURL: "tavern/decipher.png",
    displayName: "Globe",
  },
  {
    itemType: "equip",
    cookieKey: "spectacles",
    displayName: "Spectacles",
  },
  {
    itemType: "equip",
    cookieKey: "hammer",
    displayName: "Hammer",
  },
  {
    itemType: "equip",
    cookieKey: "library-key",
    displayName: "Library Key",
  },
  {
    itemType: "equip",
    cookieKey: "tavern-key",
    displayName: "Tavern Key",
  },
  {
    itemType: "equip",
    cookieKey: "flint",
    displayName: "Flint and Steel",
  },
  {
    itemType: "equip",
    cookieKey: "take-final-meal",
    displayName: "Pollastro Arrosto",
  },
  {
    itemType: "noneClickable",
    cookieKey: "orange-juice",
    displayName: "Half cup of Orange Juice",
  },
  {
    itemType: "noneClickable",
    cookieKey: "chicken",
    displayName: "2 pounds of Chicken",
  },
  {
    itemType: "noneClickable",
    cookieKey: "blossom-water",
    displayName: "1 tsp Orange Blossom Water",
  },
  {
    itemType: "noneClickable",
    cookieKey: "sugar",
    displayName: "1 tsp Sugar",
  },
  {
    itemType: "noneClickable",
    cookieKey: "cinnamon",
    displayName: "1 tsp Cinnamon",
  },
  {
    itemType: "noneClickable",
    cookieKey: "goblet-water",
    displayName: "Cup of Verjuice",
  },
];