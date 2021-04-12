const topSection = document.getElementById('top');
const middleSectionBrain = document.getElementById('middle-brain');
const middleSectionGuts = document.getElementById('middle-guts');
const scrollSection = document.getElementById('scroller');
const bottomSection = document.getElementById('bottom');
const createArmyButton = document.getElementById('create-army');
const editArmyButton = document.getElementById('edit-army');
const resetButton = document.getElementById('reset-page');

createArmyButton.onclick = () => {
  middleSectionBrain.innerHTML = "<h2>Create your army here bro:</h2>";
  fillGutsWithForm();
  disableTopButtons();
  revealBottom();
};

editArmyButton.onclick = () => {
  middleSectionBrain.innerHTML = "<h2>Here's your army bro:</h2>";
  fillGutsWithModel();
  disableTopButtons();
  revealBottom();
  addScrollButtons();
};

resetButton.onclick = () => {
  resetPage();
};

const disableTopButtons = () => {
  createArmyButton.disabled = true;
  editArmyButton.disabled = true;
};

const enableTopButtons = () => {
  createArmyButton.disabled = false;
  editArmyButton.disabled = false;
};

const revealBottom = () => {
  bottomSection.style.visibility = 'visible';
};

const resetPage = () => {
  middleSectionBrain.innerHTML = "";
  middleSectionGuts.innerHTML = "";
  scrollSection.innerHTML = "";
  enableTopButtons();
  bottomSection.style.visibility = 'hidden';
};


const addScrollButtons = () => {
  if (army.length === 1) {
    scrollSection.innerHTML = '<h3> nutin\' here, boss</h3>'; 
  } else {
    scrollSection.innerHTML = "<button id='scroll-left' type='submit'><</button><button id='scroll-right' type='submit'>></button>";
    const scrollRight = document.getElementById('scroll-left');
    const scrollLeft = document.getElementById('scroll-right');
    if (scrollSection > army.length) {
      scrollRight.disabled = true;
      scrollLeft.disabled = false;
    } else if (scrollSection < army.length) {
      scrollRight.disabled = false;
      scrollLeft.disabled = true;
    } else {
      scrollRight.disabled = false;
      scrollLeft.disabled = false;
    };
    scrollRight.onclick = () => {
      scrollIndex ++;
      fillGutsWithModel();
    };
    scrollLeft.onclick = () => {
      scrollIndex --;
      fillGutsWithModel();
    };
  };
};

let scrollIndex = 1;

const fillGutsWithModel = () => { 
  let entryName = army[scrollIndex - 1].name;
  let entryQuantity = army[scrollIndex - 1].quantity;
  let entryPaintName = army[scrollIndex - 1].paintScheme[0].paintName;
  let entryPaintCoats = army[scrollIndex - 1].paintScheme[0].coats;
  let entryPaintLocation = army[scrollIndex - 1].paintScheme[0].location;
  middleSectionGuts.innerHTML = `<h3>Model Name: ${entryName}</h3><p>Quantity of Model: ${entryQuantity}</p><p>Paint Name: ${entryPaintName}</p><p>Coats: ${entryPaintCoats}</p><p>Paint Location: ${entryPaintLocation}</p>`;
};

const fillGutsWithForm = () => {
  console.log('MF 1');
  console.log(masterFigure);
  middleSectionGuts.innerHTML = `<h3>Model Name: <input id='create-model-name' type='text'></h3><p>Quantity of Model: <input id='create-model-quantity' type='number'></p><p>Paint Name: <input id='create-model-paintName' type='text'></p><p>Coats: <input id='create-model-coats' type='number'></p><p>Paint Location: <input id='create-model-location' type='text'></p><button id='create-model' type='submit'>Create</button><br>`;
  document.getElementById('create-model').onclick = () => {
    let modelName = document.getElementById('create-model-name').value;
    let modelQuantity = document.getElementById('create-model-quantity').value;
    let modelPaintName = document.getElementById('create-model-paintName').value;
    let modelCoats = document.getElementById('create-model-coats').value;
    let modelLocation = document.getElementById('create-model-location').value;
    let newModel = masterFigure;
    newModel.name = modelName;
    newModel.model = modelQuantity;
    newModel.paintScheme[0].paintName = modelPaintName;
    newModel.paintScheme[0].coats = modelCoats;
    newModel.paintScheme[0].location = modelLocation;
    army.push(newModel);
    resetPage();
  };
};

let masterFigure = {
  name: "",
  quantity: null,
  gear: [null],
  stats: [null],
  cost: null,
  paintScheme: [{
    paintName: "",
    coats: null,
    location: ""
  }]
};

let army = [
  {
    name: "Genestealer",
    quantity: 8,
    gear: [null],
    stats: [null],
    cost: null,
    paintScheme: [{
      paintName: "Skeleton Horde",
      paintType: "Contrast",
      coats: 2,
      location: "Whole Model"
    }],
  },
  {
    name: "Liazrd Man with Club",
    quantity: 6,
    gear: ["Celestite Club", "Powerful Jaws and Stardrake Shield"],
    stats: [null],
    cost: null,
    paintScheme: [{
      paintName: "Caledor Sky",
      paintType: "Base",
      coats: 2,
      location: "Body"
    }],
  },
  {
    name: "Liazrd Man with Stardrake Icon",
    quantity: 1,
    gear: ["Stardrake Icon", "Powerful Jaws and Stardrake Shield"],
    stats: [null],
    cost: null,
    paintScheme: [{
      paintName: "Caledor Sky",
      paintType: "Base",
      coats: 2,
      location: "Body"
    }],
  },
  {
    name: "Liazrd Man with Wardrum",
    quantity: 1,
    gear: ["Wardrum", "Powerful Jaws and Stardrake Shield"],
    stats: [null],
    cost: null,
    paintScheme: [{
      paintName: "Caledor Sky",
      paintType: "Base",
      coats: 2,
      location: "Body"
    }],
  }
];