var myWin;
      
function openWindow() {
  myWin = window.open("https://met.hu", "myWin", "width=1200, height=600, top=100, left=100, scrollbars=yes, resizable=yes");
}

function winFocus() {
  myWin.focus();
}

function displayAlert() {
  var value = document.getElementById("name").value;
  alert("Hello " + value + ", share this practice page and share your knowledge");
  document.getElementById("name").value = "";
}

function displayConfirm() {
  var value = document.getElementById("name").value;
  confirm("Hello " + value + ", Are you sure you want to confirm?")
  document.getElementById("name").value = "";
}

function hideElement() {
  var x = document.getElementById("displayed-text");
  //style.visibility = "hidden";
  x.style.display = "none";
}

function showElement() {
  var x = document.getElementById("displayed-text");
  //style.visibility = "visible";
  x.style.display = "block";
}

window.addEventListener('load', function () {
    deleteButtons = $('.delete-row-btn');
    console.log(deleteButtons);
    for (index = 0; index < deleteButtons; ++index) {
        element = deleteButtons[index];
        console.log(element);
        elemente.onClick = function() {
            console.log("clicked");
            $(element.parentNode.parentNode).css('opacity', 0);
        };
    }  
})

