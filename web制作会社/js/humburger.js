$(function(){ // if document is ready
    $(".humburger").click(function () {
        $(this).toggleClass('active')
        $('.humburger-bg').toggleClass('open')
        ;
    });
  });