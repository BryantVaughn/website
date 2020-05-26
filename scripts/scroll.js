$(window).scroll(function() {
  if($(window).scrollTop() >= 50) {
    $('nav').addClass('solid');
  } else {
    $('nav').removeClass('solid');
  }
});