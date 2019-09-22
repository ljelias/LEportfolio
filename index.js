$(document).ready(function() {

  $('h1').on('click', function() {
    $('#bio, #skills, #gallery, #connect').hide();
    $('#welcome').fadeIn(1000);
  });
  $('#aboutLink').on('click', function() {
    $('#welcome, #skills, #gallery, #connect').hide();
    $('#bio').fadeIn(500);
  });
  $('#skillsLink').on('click', function() {
    $('#welcome, #bio, #gallery, #connect').hide();
    $('#skills').fadeIn(500);
  });
  $('#galleryLink').on('click', function() {
    $('#welcome, #bio, #skills, #connect').hide();
    $('#gallery').fadeIn(500);
  });
  $('#connectLink').on('click', function() {
    $('#welcome, #bio, #skills, #gallery').hide();
    $('#connect').fadeIn(500);
  });
}); 
