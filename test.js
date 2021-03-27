const topSection = document.getElementById('top');
const middleSectionBrain = document.getElementById('middle-brain');
const middleSectionGuts = document.getElementById('middle-guts');
const bottomSection = document.getElementById('bottom');
const createArmyButton = document.getElementById('create-army');
const editArmyButton = document.getElementById('edit-army');
const resetButton = document.getElementById('reset-page');

createArmyButton.onclick = () => {
  middleSectionBrain.innerHTML = "<p>Well what do you know... you want to create an army!</p>";
  disableTopButtons();
  revealBottom();
};

editArmyButton.onclick = () => {
  middleSectionBrain.innerHTML = "<h2>Here's your army bro:</h2><br>";
  fillGuts();
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

const fillGuts = () => {
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