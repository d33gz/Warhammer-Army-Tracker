const topSection = document.getElementById('top');
const middleSection = document.getElementById('middle');
const bottomSection = document.getElementById('bottom');
const createArmyButton = document.getElementById('create-army');
const editArmyButton = document.getElementById('edit-army');
const resetButton = document.getElementById('reset-page');

createArmyButton.onclick = () => {
  middleSection.innerHTML = "<p>Well what do you know... you want to create an army!</p>";
  disableTopButtons();
  revealBottom();
};

editArmyButton.onclick = () => {
  middleSection.innerHTML = "<h3>Here's your army bro:</h3>";
  disableTopButtons();
  revealBottom();
};

resetButton.onclick = () => {
  middleSection.innerHTML = "";
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