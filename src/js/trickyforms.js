
function createInputFieldWithLabel(inputId, labelText){
    var label = document.createElement('label');
    label.setAttribute("for", inputId);
    label.textContent = labelText;
    var input = document.createElement('input');
    input.setAttribute("id", inputId);
    return [label, input]
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function compareRandomId( a, b ) {
    if ( a.randomid < b.randomid ){
      return -1;
    }
    if ( a.randomid > b.randomid ){
      return 1;
    }
    return 0;
}

function compareId( a, b ) {
    if ( a.id < b.id ){
      return -1;
    }
    if ( a.id > b.id ){
      return 1;
    }
    return 0;
}

var fields;

function populateForm(){
    var difficulty = document.getElementById("difficulty");
    var randomized = document.getElementById("randomized");

    window.fields = [{inputId: "firstName", labelText: "First Name: ", randomid: getRndInteger(1000,10000), id: 1},
                {inputId: "lastName", labelText: "Last Name: ", randomid: getRndInteger(1000,10000), id: 2},
                {inputId: "address", labelText: "Address: ", randomid: getRndInteger(1000,10000), id: 3},
                {inputId: "companyName", labelText: "Company Name: ", randomid: getRndInteger(1000,10000), id: 4},
                {inputId: "email", labelText: "Email: ", randomid: getRndInteger(1000,10000), id: 5},
                {inputId: "phoneNumber", labelText: "Phone Number: ", randomid: getRndInteger(1000,10000), id: 6},
                {inputId: "roleInCompany", labelText: "Role in Company: ", randomid: getRndInteger(1000,10000), id: 6}]
    
    if (!randomized.checked){
        var arrayLength = fields.length;
        for (var i = 0; i < arrayLength; i++) {
            fields[i].randomid = i;
        }
    }
    var trickyForm = document.getElementById("trickyForm");
    var brElement = document.createElement("br");
    window.fields = window.fields.sort( compareRandomId );

    var arrayLength = fields.length;
    for (var i = 0; i < arrayLength; i++) {
        // console.log(fields[i]);
        if(difficulty.checked){
            [label, input] = createInputFieldWithLabel(fields[i].randomid, fields[i].labelText);
        } else {
            [label, input] = createInputFieldWithLabel(fields[i].inputId, fields[i].labelText);
        }
        // console.log(label);
        // console.log(input);
        trickyForm.appendChild(label);
        trickyForm.appendChild(input);
        trickyForm.appendChild(brElement.cloneNode());
    }
    
    var submitButton = document.createElement('button');
    submitButton.addEventListener('click', onSubmit);
    submitButton.textContent = "Submit";

    trickyForm.appendChild(submitButton);
}

populateForm();

function onSetupChanged(){
    var trickyForm = document.getElementById("trickyForm");
    trickyForm.innerHTML = '';
    var trickyTable = document.getElementById("trickyTable");
    trickyTable.innerHTML = `<thead>
    <tr>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Address</th>
        <th scope="col">Company Name</th>
        <th scope="col">Email</th>
        <th scope="col">Phone Number</th>
        <th scope="col">Role in Company</th>
    </tr>
  </thead>`;
    populateForm();
    return true;
}

function onSubmit(e){
    console.log(window.fields);
    var trickyForm = document.getElementById("trickyForm");
    
    var values = [];
    window.fields = window.fields.sort( compareId );
    var arrayLength = window.fields.length;
    for (var i = 0; i < arrayLength; i++) {
        console.log(window.fields[0].randomid);
        var field = document.getElementById(window.fields[i].randomid);
        console.log(field);
        console.log(field);
        values.push(field.value)
    }
    addRow(values);
    console.log(values);
    trickyForm.innerHTML = '';
    populateForm();
    //e.preventDefault();
    //e.stopImmediatePropagation();
    //e.stopPropagation();
    //return false;
}

function createCol(text){
    var cell = document.createElement("td");
    cell.innerHTML = text;
    return cell;
}

function addRow(values){
    console.log(values);
    var trickyTable = document.getElementById("trickyTable");
    var row = document.createElement("tr");
    var arrayLength = values.length;
    for (var i = 0; i < arrayLength; i++) {
        row.appendChild(createCol(values[i]));
    }
    trickyTable.appendChild(row);
}