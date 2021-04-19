var page = '1';
var totalPages;


function getData() {
  $.getJSON('https://api.thecatapi.com/v1/images/search?limit=10&page='+page+'&order=Desc', function(data) {

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

//-----------------------------------
// Load more button
//-----------------------------------

$('.load-more-button button').on('click', function() {
  page ++;
  getData();
});


//-----------------------------------
// Load more on scroll
//-----------------------------------

$(window).scroll(function() {
  
   var scrollTop = $(window).scrollTop();
   console.log(scrollTop);
   var elTop = $('.scroll-trigger').offset().top;
   console.log(elTop);
   var scrolledTop = elTop - scrollTop;
   console.log(scrolledTop);
  
   if (scrolledTop < 900) {
     page ++;
     getData();
   }
  
 });
