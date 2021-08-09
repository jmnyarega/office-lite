const clearSelected = () => {
  const elements = document.querySelectorAll(".options .check");
  elements.forEach((el) => el.classList.remove("check-true"));
};

const selectPack = (evt) => {
  clearSelected();
  const selector = `.option:nth-child(${evt + 1})`;
  const selected = document.querySelector(selector);
  const value = selected.querySelector(".value").innerHTML;
  document.querySelector(".selected").innerHTML = value;
  selected.querySelector(".check").classList.add("check-true");
};
