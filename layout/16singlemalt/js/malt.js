$(document).ready(function () {
    $(".gnb > li ").hover(
      function () {
        $(this).children(".submenu").stop().slideDown();
      },
      function () {
        $(this).children(".submenu").stop().slideUp();
      }
    );
  });