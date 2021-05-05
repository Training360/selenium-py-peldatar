// A $( document ).ready() block.

$( document ).ready(function() {
    console.log( "ready!" );
    
    var min = 500, max = 3000;
    var delay = Math.floor(Math.random() * (max - min) + min);
    $("#target").delay(delay).queue(function (next) {
        $(this).append( `<div id="container">
        <form>
            <p>
                <label>
                    <input type="radio" id="yes" name="name" value="Yes"> Yes
                </label>
                <label>
                    <input type="radio" id="no" name="name" value="No"> No 
                </label>
            </p>
            <p>
                <input type="reset" value="Reset">
                <input type="submit" id="buttoncheck" value="Check">
            </p>
            <p id="result"></p>
        </form>
        <p>processing time: ${delay} msec</p>
        </div>` );
        
        $.urlParam = function (name) {
            var results = new RegExp('[\?&]' + name + '=([^&#]*)')
                              .exec(window.location.search);
        
            return (results !== null) ? results[1] || 0 : false;
        }
        
        console.log($.urlParam('name')); //edit
        if($.urlParam('name') !== false){
            $('#result').html(`Radio button is checked and it's value is ${$.urlParam('name')}`)
            if($.urlParam('name')==='Yes'){
                $("#yes").prop("checked", true);
            } else {
                $("#no").prop("checked", true);
            }
        } else {
            $('#result').html('Radio button is Not checked')
        }

        next();

    }).append();

})