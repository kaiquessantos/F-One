$(document).ready(function() {
  $('#mobile_button').on('click', function() {
    $('#mobile_button').find('i').toggleClass('fa-x');
    $('#mobile_menu').toggleClass('active');
  });
});