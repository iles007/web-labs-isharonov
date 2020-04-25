$('.menu').on('click' , function() {
  $('.menu_l').toggleClass('active', 3000);
  $('body').toggleClass('active');
  $('.menu_ride').toggleClass('active', 3000);
});

$(document).ready(function(){
    $("header").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 400);
    });
});

$('.akc__btn').on('click' , function(e) {
    e.preventDefault();
    $('.popup').addClass('active');
});
$('.popup__close').on('click' , function(e) {
    e.preventDefault();
    $('.popup').removeClass('active');
});
$('.popup__overlay').on('click' , function(e) {
    e.preventDefault();
    $('.popup').removeClass('active');
});

$('.popup__body').on('click', function(e){
    e.preventDefault();
    $('.popup').addClass('active23232');
});


          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object