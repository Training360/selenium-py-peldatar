$('#dragThis').draggable(
  {
      containment: $('body'),
      drag: function(){
          var offset = $(this).offset();
          var xPos = offset.left;
          var yPos = offset.top;
          $('#posX > span').text(xPos);
          $('#posY > span').text(yPos);
      },
      stop: function(){
          var finalOffset = $(this).offset();
          var finalxPos = finalOffset.left;
          var finalyPos = finalOffset.top;

          $('#finalX > span').text(finalxPos);
          $('#finalY > span').text(finalyPos);
          $('#width > span').text($(this).width());
          $('#height > span').text($(this).height());
      },
      revert: 'invalid'
  });

$('#dropHere').droppable(
  {
      accept: '#dragThis',
      over : function(){
          $(this).animate({'border-width' : '5px',
                           'border-color' : '#0f0'
                          }, 500);
          $('#dragThis').draggable('option','containment',$(this));
      }
  });