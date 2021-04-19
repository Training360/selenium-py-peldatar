var page = '1';

function getData() {
  $.getJSON('https://api.thecatapi.com/v1/images/search?limit=5&page='+page+'&order=Desc', function(data) {

    console.log(data);


    var imageList = data;

    $.each(imageList, function(i, val) {

      var image = val;
      var imageURL = val.url;
      var imageWidth = val.width;
      var imageHeight = val.height;
      var id = val.id;

      $('.grid').append('<div class="image"><img src="'+ imageURL +'"><p>Cat id: '+ id +'</p></div>');  

    });  
  });
}

getData();

$('.load-more-button button').on('click', function() {
  page ++;
  getData();
});