// DOM elements
const input = document.getElementById("toggle");
const link = document.querySelector(".options a");
const selectedElement = document.querySelector(".selected");
const checkIcon = document.querySelectorAll(".options .check");

// DOM utility function
const clearSelected = () =>
  checkIcon.forEach((el) => el.classList.remove("check-true"));

function getCurrentClass(evt) {
  return document.querySelector(`.option:nth-child(${evt})`);
}

function getSelectedValue(selected) {
  return selected.querySelector(".value").innerHTML;
}

function updatedSelectedValue(value) {
  selectedElement.innerHTML = value;
}

function toggleClassName(selected) {
  selected.querySelector(".check").classList.add("check-true");
}

function toggleInput() {
  if (input.checked) input.checked = false;
  else input.checked = true;
}

function checkInput() {
  input.checked = true;
}

// close dialog select value
link.addEventListener("focus", function () {
  checkInput();
});

// manipulate DOM on item select
function selectPack(evt) {
  clearSelected();
  const selected = getCurrentClass(evt);
  updatedSelectedValue(getSelectedValue(selected));
  toggleClassName(selected);
  toggleInput();
}
