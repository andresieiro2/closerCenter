$(document).ready(function() {
  $(window).scroll(function(){
    $('#header').html($( "[data-detect-visible]" ).detectCloser().attr('id') ) ;
  })
});
