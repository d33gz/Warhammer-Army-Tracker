const topSection = document.getElementById('top');
const middleSectionBrain = document.getElementById('middle-brain');
const middleSectionGuts = document.getElementById('middle-guts');
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
};

resetButton.onclick = () => {
  middleSectionBrain.innerHTML = "";
  middleSectionGuts.innerHTML = "";
  enableTopButtons();
  bottomSection.style.visibility = 'hidden';
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

const fillGutsWithModel = () => {
  let entryName = genestealer.name;
  let entryQuantity = genestealer.quantity;
  let entryPaintName = genestealer.paintScheme[0].paintName;
  let entryPaintCoats = genestealer.paintScheme[0].coats;
  let entryPaintLocation = genestealer.paintScheme[0].location;
  middleSectionGuts.innerHTML = `<h3>Model Name: ${entryName}</h3><p>Quantity of Model: ${entryQuantity}</p><p>Paint Name: ${entryPaintName}</p><p>Coats: ${entryPaintCoats}</p><p>Paint Location: ${entryPaintLocation}</p>`;
};

let genestealer = {
  name: "Genestealer",
  quantity: 8,
  gear: [null],
  stats: [null],
  cost: null,
  paintScheme: [{
    paintName: "Skeleton Horde",
    coats: 2,
    location: "Whole body"
  }]
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
    console.log(modelName)
    console.log(document.getElementById('create-model-name'))
    console.log(document.getElementById('create-model-name').value)
    let newModel = masterFigure;
    newModel.name = modelName;
    newModel.model = modelQuantity;
    newModel.paintScheme[0].paintName = modelPaintName;
    newModel.paintScheme[0].coats = modelCoats;
    newModel.paintScheme[0].location = modelLocation;
    console.log('MF 2');
    console.log(newModel);
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