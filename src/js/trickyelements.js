
var elements = ["button", "input", "span"]


function createMyElement(elementId, elementText, elementType){
    var element = document.createElement(elementType);
    element.setAttribute("id", elementId);
    if(elementType==='input'){
        element.placeholder = elementText;
    } else {
        element.innerText = elementText;
    }
    if(elementType==='button'){
        element.setAttribute("onClick", `output("${elementId} was clicked")`)
    }
    return element
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

    window.fields = [{elementId: "element1", randomid: getRndInteger(1000,10000), id: 1, elementType: elements[getRndInteger(0,3)]},
                {elementId: "element2", randomid: getRndInteger(1000,10000), id: 2, elementType: elements[getRndInteger(0,3)]},
                {elementId: "element3", randomid: getRndInteger(1000,10000), id: 3, elementType: elements[getRndInteger(0,3)]},
                {elementId: "element4", randomid: getRndInteger(1000,10000), id: 4, elementType: elements[getRndInteger(0,3)]},
                {elementId: "element5", randomid: getRndInteger(1000,10000), id: 5, elementType: elements[getRndInteger(0,3)]}
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
            button = createMyElement(fields[i].randomid, fields[i].elementId, fields[i].elementType);
        } else {
            button = createMyElement(fields[i].elementId, fields[i].elementId, fields[i].elementType);
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