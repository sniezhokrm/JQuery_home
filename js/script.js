$(document).ready(function() {

  $('.main_btna, .main_btn').on('click', () => {

    $('.overlay').fadeTo(600, 1, function() {
      $(this).css("display", "block");
    });
    $('.modal').slideToggle(600, function() {
      $(this).css("display", "block");
    });
  });
  $('.close').on('click', () => {
    $('.overlay').fadeTo(600, 0, function() {
      $(this).css("display", "none");
    });
    $('.modal').slideToggle(600, function() {
      $(this).css("display", "none");
    });
  });


});
