var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  pageDots: false
});




$('.button-group').on( 'click', '.button', function() {
  var index = $(this).index();
  $carousel.flickity( 'select', index );
});