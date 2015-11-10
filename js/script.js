$(document).ready(function(){
  $(window).scroll(function(){
    console.log('You scrolled!');
    if ($(window).scrollTop() > 910) {
      $('#navbar').addClass('navbar-fixed');
    } else if ($(window).scrollTop() < 910) {
      $('#navbar').removeClass('navbar-fixed');
    }
  });
});
