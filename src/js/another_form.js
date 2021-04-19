const entries = [];
const table = document.getElementById("detailsTable");

function handleSubmit(e) {
  if (e.preventDefault) e.preventDefault();

  const inputName = document.getElementById("fullname").value;
  const inputEmail = document.getElementById("email").value;
  const inputDob = document.getElementById("dob").value;
  const inputTel = document.getElementById("phone").value;

  const entry = {
    name: inputName,
    email: inputEmail,
    dob: inputDob,
    tel: inputTel
  };
  addRow(entry);

  return false;
}

function addRow(data) {
  // add entry as new row in table
  const row = table.insertRow(-1);
  let cell;

  for (let key in data) {
    cell = row.insertCell(-1);
    cell.innerHTML = data[key];
  }
  cell = row.insertCell(-1);
  cell.innerHTML = '<span class="btnDelete">X</span>';
  cell.addEventListener("click", deleteRow);

  // save entry for push
  entries.push(data);
}

function deleteRow(e) {
  // find clicked index & delete from table
  const idx = e.target.parentElement.parentElement.rowIndex;
  table.deleteRow(idx);

  // delete entry from data for push
  entries.splice(idx - 1, 1);
}

const form = document.getElementById("contactForm");
if (form.attachEvent) {
  form.attachEvent("submit", handleSubmit);
} else {
  form.addEventListener("submit", handleSubmit);
}