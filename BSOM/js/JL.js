$(window).on('load', function(){
    $('#cover').fadeOut(700).delay(2000);
    })

$(document).ready(function(){
  $('.parallax').parallax();
  $(".bedrijfContent").each(function(index) {
        $(this).delay(300*index).fadeIn(400 + (100*index));
  });
  setTimeout(function(){
    $('.modal').modal();
    $('#modal1').modal('open');
  }, 2000)


$('.bedrijfContent').on('mouseenter', function(){
  $('.bedrijfContent').not(this).css("opacity", ".5");
});

$('.bedrijfContent').on('mouseleave', function(){
  $('.bedrijfContent').not(this).css("opacity", "1");
});

});

function runTask() {
    // run for 50 ms
    setTimeout(runTask, 1); // Allow DOM-update
}
