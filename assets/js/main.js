$(document).ready(function () {
  $('.main-menu a, .smooth-link').click(function (e) {
  	e.preventDefault();
    $('body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 600);
  });
  $(document).on('scroll', function () {
    if ($(this).scrollTop() > 100) {
      $('.glove').addClass('punch');
    } else {
      $('.glove').removeClass('punch');
    }
  });
  $('.gallery').slippry({
    transition: 'kenburns',
    easing: 'linear',
    speed: 2000,
    pause: 6000,
    kenZoom: 260,
    autoHover: false
  });
});