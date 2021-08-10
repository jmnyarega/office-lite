const clear = () => {
  const elements = document.querySelectorAll(".input-control");
  elements.forEach((el) => el.classList.remove("input-control--error"));
};

const isEmpty = (val) => {
  if (val.trim().length === 0) return true;
  return false;
};

const isPhone = (val) =>
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(val);

const isEmail = (val) =>
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    val
  );

const showError = (name) => {
  clear();
  const element = document.getElementById(name);
  element.classList.add("input-control--error");
};

const handleSubmit = () => {
  const form = document.getElementById("form");
  const fd = new FormData(form);
  const name = fd.get("name");
  const email = fd.get("email");
  const phone = fd.get("phone");
  const company = fd.get("company");
  const option = document.getElementById("selected").innerText;
  if (isEmpty(name)) {
    showError("name");
    return false;
  } else if (isEmpty(email) || !isEmail(email)) {
    showError("email");
    return false;
  } else if (isEmpty(option)) {
    showError("option");
  } else if (isEmpty(phone) || !isPhone(phone)) {
    showError("phone");
    return false;
  } else if (isEmpty(company)) {
    showError("company");
    return false;
  } else {
    return true;
  }
};
