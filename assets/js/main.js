$(document).ready(function () {
  $('.main-menu a, #intro a, #join a, .sign-up a').click(function (e) {
  	e.preventDefault();
    $('body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 600);
  });
});