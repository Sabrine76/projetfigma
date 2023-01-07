var items = $('.carousel .item');
var currentItem = 0;

$('.carousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));

  for (var i=0;i<2;i++) {
    next=next.next();
    if (!next.length) {
    	next = $(this).siblings(':first');
  	}
    
    next.children(':first-child').clone().appendTo($(this));
  }

  // Ajout de l'algorithme de rotation
  var nextItem = (currentItem + 1) % items.length;
  $(items[nextItem]).children(':first-child').clone().appendTo($(this));
  currentItem = nextItem;
});