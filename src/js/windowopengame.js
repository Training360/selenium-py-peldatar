var colors = [];
$( document ).ready(function() {
    console.log( "ready!" );
    while (colors.length < 100) {
        do {
            var color = Math.floor((Math.random()*1000000)+1);
        } while (colors.indexOf(color) >= 0);
        colors.push("#" + ("000000" + color.toString(16)).slice(-6));
    }
    const rndcolor = Math.floor(Math.random() * colors.length);
    $("#target_color").text(colors[rndcolor]);
});


function randomWindow(element){
    guesses = $("#numberOfGuesses").text();
    $("#numberOfGuesses").text(parseInt(guesses)+1);
    document.getElementById(element).disabled = true;
    console.log(element)
    console.log(colors[element])
    var win = window.open("", `${element}_win`, "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=300,height=150");
    body = win.document.getElementsByTagName('body')[0];
    body.style=`background-color: ${colors[element]}`;
    h1 = win.document.createElement("h1");
    h1.innerHTML = `${colors[element]}`;
    body.appendChild(h1);
}