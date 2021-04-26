
function createButton(buttonId, buttonText, event){
    var button = document.createElement('button');
    button.setAttribute("id", buttonId);
    button.innerText = buttonText;
    button.setAttribute("onClick", `output("${buttonId} was clicked")`)
    return button
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

    window.fields = [{buttonId: "button1", randomid: getRndInteger(1000,10000), id: 1},
                {buttonId: "button2", randomid: getRndInteger(1000,10000), id: 2},
                {buttonId: "button3", randomid: getRndInteger(1000,10000), id: 3},
                {buttonId: "button4", randomid: getRndInteger(1000,10000), id: 4},
                {buttonId: "button5", randomid: getRndInteger(1000,10000), id: 5}
                ]
    
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
        if(difficulty.checked){
            button = createButton(fields[i].randomid, fields[i].buttonId);
        } else {
            button = createButton(fields[i].buttonId, fields[i].buttonId);
        }
        trickyForm.appendChild(button);
        trickyForm.appendChild(brElement.cloneNode());
    }
}

populateForm();

function onSetupChanged(){
    var trickyForm = document.getElementById("trickyForm");
    trickyForm.innerHTML = '';
    populateForm();
    return true;
}

function output(value){
    var output = document.getElementById("result");
    output.innerHTML = value;
}